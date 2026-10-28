export interface Deployment {
  name: string;
  url?: string;
  displayUrl: string;
  tag: string;
  description?: string;
  logo: string;
}

export interface Project {
  slug: string;
  title: string;
  category: string;
  summary: string;
  image: string;
  alt: string;
  isMulti: boolean;
  url?: string;
  displayUrl?: string;
  deployments?: Deployment[];
}

export const projects: Project[] = [
  {
    slug: 'restaurant-hospitality-erp',
    title: 'Restaurant & Hospitality ERP',
    category: 'Enterprise Hospitality & F&B Operations',
    summary:
      'All-in-one operations platform managing table QR ordering, kitchen dispatch, dual-level inventory, HR attendance, payroll, and multi-bank financial reconciliations across leading dining venues in Addis Ababa and Bahir Dar.',
    image: '/assets/images/projects/hospitality-erp.webp',
    alt: 'Restaurant & Hospitality ERP operations dashboard showcase',
    isMulti: true,
    deployments: [
      {
        name: 'Cloud Sun Cafe (Bahir Dar)',
        url: 'https://cloudsunbahirdar.com/',
        displayUrl: 'cloudsunbahirdar.com',
        tag: 'Bahir Dar',
        description:
          'Table-side QR ordering, kitchen display workflows, and automated staff payroll.',
        logo: '/assets/images/projects/logos/cloud-sun-bahirdar.webp',
      },
      {
        name: 'Arabian Palace Restaurant',
        url: 'https://arabianpalace-eth.com/',
        displayUrl: 'arabianpalace-eth.com',
        tag: 'Addis Ababa',
        description:
          'Multi-floor dining & lounge with multi-station routing and daily settlement.',
        logo: '/assets/images/projects/logos/arabian-palace.webp',
      },
      {
        name: 'Cloud Sun Cafe (Addis Ababa)',
        url: 'https://cloudsun-cafe.com/',
        displayUrl: 'cloudsun-cafe.com',
        tag: 'Addis Ababa',
        description:
          'Metropolitan branch handling fast table turnover and central procurement.',
        logo: '/assets/images/projects/logos/cloud-sun-cafe.webp',
      },
      {
        name: 'KOS Home Cafe',
        url: 'https://koshomecafe.com/',
        displayUrl: 'koshomecafe.com',
        tag: 'Specialty Dining',
        description:
          'Specialty brunch hub with recipe cost tracking and live inventory replenishment.',
        logo: '/assets/images/projects/logos/kos-home-cafe.webp',
      },
    ],
  },
  {
    slug: 'nur-selam-factory',
    title: 'Nur Selam Baltna: Factory Manufacturing ERP',
    category: 'Industrial Manufacturing & Supply Chain',
    summary:
      'End-to-end industrial production ERP coordinating raw agricultural material intake, formulation batching, packaging lines, and wholesale distributor logistics.',
    image: '/assets/images/projects/nur-selam-factory.webp',
    alt: 'Nur Selam Baltna industrial manufacturing ERP showcase',
    isMulti: false,
    url: 'https://nurselambaltina.com/',
    displayUrl: 'nurselambaltina.com',
  },
  {
    slug: 'retail-pos-shop-erp',
    title: 'Retail POS & Shop Management Platform',
    category: 'Omnichannel Retail & Inventory',
    summary:
      'Versatile retail management ERP featuring barcode scanning, lot and expiry tracking, supplier purchase orders, and multi-store inventory synchronization.',
    image: '/assets/images/projects/retail-pos-platform.webp',
    alt: 'Retail POS and Shop Management Platform showcase',
    isMulti: true,
    deployments: [
      {
        name: 'Cloud Group: Retail & Treasury',
        url: 'https://cloudgroup-et.com/',
        displayUrl: 'cloudgroup-et.com',
        tag: 'Retail & Treasury ERP',
        description:
          'Multi-tier wholesale & retail POS checkout, automated refill approvals, and treasury reconciliation.',
        logo: '/assets/images/projects/logos/cloud-group.webp',
      },
      {
        name: 'Yusra Baltina',
        url: 'https://yusrabaltina.com/',
        displayUrl: 'yusrabaltina.com',
        tag: 'Food & Spices',
        description:
          'Bulk food spices and traditional flours POS with batch expiry tracking.',
        logo: '/assets/images/projects/logos/yusra-baltina.webp',
      },
      {
        name: 'Yoban Kitchenware',
        url: 'https://yoban-et.com/',
        displayUrl: 'yoban-et.com',
        tag: 'Home & Kitchen',
        description:
          'High-SKU kitchenware management with barcode printing and wholesale tiers.',
        logo: '/assets/images/projects/logos/yoban.webp',
      },
      {
        name: 'Nur Selam Baltina Shop',
        url: 'https://shop.nurselambaltina.com/',
        displayUrl: 'shop.nurselambaltina.com',
        tag: 'Direct Retail',
        description:
          'Consumer retail storefront with real-time stock sync from central factory.',
        logo: '/assets/images/projects/logos/nur-selam-shop.webp',
      },
      {
        name: 'Ethio Yarn Store',
        url: 'https://ethioyarnstores.com/',
        displayUrl: 'ethioyarnstores.com',
        tag: 'Shop Mobile App & POS',
        description:
          'Omnichannel shop suite with a Flutter mobile shopping app, GPS delivery fee calculations, and multi-store inventory sync.',
        logo: '/assets/images/projects/logos/ethio-yarn-store.webp',
      },
    ],
  },
  {
    slug: 'humanitarian-ngo-ecosystem',
    title: 'Non-Profit & Humanitarian Ecosystem',
    category: 'Humanitarian Aid & Social Welfare Tech',
    summary:
      'Integrated digital ecosystem anchored by Eznet Child Care, enabling child welfare tracking, clinic workflows, donor management, and QR-verified community food aid distributions.',
    image: '/assets/images/projects/ngo-ecosystem.webp',
    alt: 'Non-profit and humanitarian digital systems showcase',
    isMulti: true,
    deployments: [
      {
        name: 'Eznet Child Care Portal',
        url: 'https://eznet-cp.com/',
        displayUrl: 'eznet-cp.com',
        tag: 'Child Welfare Portal',
        description:
          'Sponsorship & welfare portal tracking child health records and donor milestones.',
        logo: '/assets/images/projects/logos/eznet.webp',
      },
      {
        name: 'Metezazen Charity',
        url: 'https://metezazen.org/',
        displayUrl: 'metezazen.org',
        tag: 'Meal Distribution',
        description:
          'QR-verified meal voucher network distributing meals across partner restaurants.',
        logo: '/assets/images/projects/logos/metezazen.webp',
      },
      {
        name: 'My Charities Foundation',
        url: 'https://mycharities-foundation.org/',
        displayUrl: 'mycharities-foundation.org',
        tag: 'Global Foundation',
        description:
          'International humanitarian portal for fundraising campaigns and verified metrics.',
        logo: '/assets/images/projects/logos/my-charities.webp',
      },
      {
        name: 'Dar Al-Fiker Foundation',
        url: 'https://daralfiker.org/',
        displayUrl: 'daralfiker.org',
        tag: 'Education & Relief',
        description:
          'Community foundation managing orphan sponsorship, dorm aid, and relief programs.',
        logo: '/assets/images/projects/logos/dar-al-fiker.webp',
      },
      {
        name: 'Afak Organization',
        url: 'https://www.afakorganization.com/',
        displayUrl: 'afakorganization.com',
        tag: 'Community Development',
        description:
          'Civil society portal coordinating disaster relief and youth capacity building.',
        logo: '/assets/images/projects/logos/afak-organization.webp',
      },
      {
        name: 'Mamedoch Association',
        url: 'https://mamedoch.org/',
        displayUrl: 'mamedoch.org',
        tag: 'Youth & Welfare',
        description:
          'Community welfare initiative facilitating emergency support and member mutual aid.',
        logo: '/assets/images/projects/logos/mamedoch.webp',
      },
      {
        name: 'Ethiopian Ahle Sunna: Mosque Network',
        url: 'https://ethioahlesunnah.org/',
        displayUrl: 'ethioahlesunnah.org',
        tag: 'Mosque Network & Operations',
        description:
          'Nationwide mosque directory, prayer schedules, fundraising campaigns, and student applications across regional branches.',
        logo: '/assets/images/projects/logos/ahle-sunna.webp',
      },
      {
        name: 'Arefa Islamic Institution',
        url: 'https://arefaic.org/',
        displayUrl: 'arefaic.org',
        tag: 'Community & Institution',
        description:
          'Multilingual digital portal with real-time prayer calculations, donation packages, program registrations, and localized CMS.',
        logo: '/assets/images/projects/logos/arefa-center.webp',
      },
      {
        name: "Atika Women's Center",
        url: 'https://atikawec.com/',
        displayUrl: 'atikawec.com',
        tag: "Women's Empowerment & Ed",
        description:
          'Comprehensive digital portal and administrative suite for Islamic education, student admissions, and digital ID card generation.',
        logo: '/assets/images/projects/logos/atika.webp',
      },
    ],
  },
  {
    slug: 'saramall',
    title: 'Sara Mall: Commercial Property & Tenant ERP',
    category: 'Commercial Real Estate & Property ERP',
    summary:
      'An integrated building management platform for commercial retail spaces, floor inventory, room leasing, tenant lifecycle management, and automated rent schedules.',
    image: '/assets/images/projects/saramall.webp',
    alt: 'Sara Mall commercial property and tenant management ERP showcase',
    isMulti: false,
    url: '',
    displayUrl: '',
  },
];
