export default async function handler(req: any, res: any) {
  if (req.method && req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const SECRET_KEY = process.env.RESTAURANT_API_SECRET || 'birtucan_portfolio_sec_2026_x89a';

  const VENUES = [
    {
      id: 'cloudsun_addis',
      name: 'Cloud Sun Cafe (Addis)',
      urls: [
        'https://api2.cloudsun-cafe.com/api/v1/public/lifetime-metrics/',
        'https://cloudsun-cafe.com/api/v1/public/lifetime-metrics/',
      ],
    },
    {
      id: 'cloudsun_bahirdar',
      name: 'Cloud Sun (Bahir Dar)',
      urls: [
        'https://api2.cloudsunbahirdar.com/api/v1/public/lifetime-metrics/',
        'https://cloudsunbahirdar.com/api/v1/public/lifetime-metrics/',
      ],
    },
    {
      id: 'arabian_palace',
      name: 'Arabian Palace',
      urls: [
        'https://api2.arabianpalace-eth.com/api/v1/public/lifetime-metrics/',
        'https://arabianpalace-eth.com/api/v1/public/lifetime-metrics/',
      ],
    },
  ];

  const FALLBACK_TOTAL_ORDERS = 125000;
  const FALLBACK_TOTAL_ITEMS = 340000;

  function parseMetricNumber(val: any): number | null {
    if (typeof val === 'number' && Number.isFinite(val) && val >= 0) return val;
    if (typeof val === 'string' && val.trim().length > 0) {
      const parsed = Number(val.replace(/,/g, ''));
      if (Number.isFinite(parsed) && parsed >= 0) return parsed;
    }
    return null;
  }

  async function fetchWithTimeout(url: string, timeoutMs: number) {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), timeoutMs);
    const separator = url.includes('?') ? '&' : '?';
    const targetUrl = `${url}${separator}key=${encodeURIComponent(SECRET_KEY)}`;

    try {
      const resp = await fetch(targetUrl, {
        method: 'GET',
        headers: {
          'X-API-Key': SECRET_KEY,
          'Accept': 'application/json',
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
        },
        signal: controller.signal,
      });
      return resp;
    } finally {
      clearTimeout(timer);
    }
  }

  async function fetchVenueMetric(venue: (typeof VENUES)[0]) {
    for (const url of venue.urls) {
      try {
        const resp = await fetchWithTimeout(url, 4000);
        if (!resp.ok) continue;

        const ct = resp.headers.get('content-type') || '';
        if (ct.includes('html')) continue;

        let data: any;
        if (ct.includes('json') || ct.includes('text/plain') || ct === '') {
          const text = await resp.text();
          if (text.trim().startsWith('<')) continue;
          data = JSON.parse(text);
        } else {
          data = await resp.json();
        }

        const rawOrders = parseMetricNumber(data?.total_orders);
        const rawQuantity = parseMetricNumber(data?.total_quantity_sold);
        const rawItems = parseMetricNumber(data?.total_order_items);
        const resolvedItems = rawQuantity !== null ? rawQuantity : rawItems;

        if (rawOrders !== null || resolvedItems !== null) {
          return {
            orders: rawOrders,
            items: resolvedItems,
            isLive: true,
          };
        }
      } catch {
        continue;
      }
    }

    return {
      orders: null,
      items: null,
      isLive: false,
    };
  }

  try {
    const results = await Promise.allSettled(VENUES.map((v) => fetchVenueMetric(v)));

    let sumOrders = 0;
    let sumItems = 0;
    let liveCount = 0;

    results.forEach((res) => {
      if (res.status === 'fulfilled' && res.value.isLive) {
        const val = res.value;
        if (typeof val.orders === 'number' && Number.isFinite(val.orders)) {
          sumOrders += val.orders;
        }
        if (typeof val.items === 'number' && Number.isFinite(val.items)) {
          sumItems += val.items;
        }
        liveCount++;
      }
    });

    // If one fails, omit it and sum the rest. Only use fallback if all fail.
    const total_orders = liveCount > 0 ? sumOrders : FALLBACK_TOTAL_ORDERS;
    const total_items = liveCount > 0 ? sumItems : FALLBACK_TOTAL_ITEMS;

    res.setHeader('Cache-Control', 'public, s-maxage=60, stale-while-revalidate=300');
    return res.status(200).json({
      total_orders,
      total_items,
      live_venues: liveCount,
      is_live: liveCount > 0,
    });
  } catch (_e) {
    return res.status(200).json({
      total_orders: FALLBACK_TOTAL_ORDERS,
      total_items: FALLBACK_TOTAL_ITEMS,
      live_venues: 0,
      is_live: false,
    });
  }
}
