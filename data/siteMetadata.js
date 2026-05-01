/** @type {import("pliny/config").PlinyConfig } */
const siteMetadata = {
  title: 'Marcio Moreira Junior — GitHub Projects',
  author: 'Marcio Moreira Junior',
  headerTitle: 'Marcio Moreira Junior',
  description:
    'Technical landing page for Marcio Moreira Junior: Linux Engineer, DevOps, SRE, developer and creator of open source and personal software projects.',
  language: 'en-us',
  theme: 'system',
  siteUrl: 'https://mdmjunior.github.io',
  officialSite: 'https://www.marciomoreirajunior.com.br',
  siteRepo: 'https://github.com/mdmjunior/mdmjunior.github.io',
  siteLogo: `${process.env.BASE_PATH || ''}/static/images/logo.png`,
  socialBanner: `${process.env.BASE_PATH || ''}/static/images/twitter-card.png`,
  email: 'iam@marciomoreirajunior.com.br',
  github: 'https://github.com/mdmjunior',
  x: 'https://x.com/oslabsmmoreira',
  facebook: 'https://facebook.com/mdmjunior',
  linkedin: 'https://www.linkedin.com/in/mdmjunior',
  instagram: 'https://www.instagram.com/marciomjunior',
  medium: 'https://medium.com/@marcioduartejr',
  locale: 'en-US',
  stickyNav: true,
  analytics: {
    googleAnalytics: {
      googleAnalyticsId: 'G-SBFS9BLLGB',
    },
  },
  newsletter: {
    provider: null,
  },
  search: {
    provider: null,
  },
}

module.exports = siteMetadata
