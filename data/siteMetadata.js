/** @type {import("pliny/config").PlinyConfig } */
const siteMetadata = {
  title: 'Marcio Moreira Junior — Tech Lab',
  author: 'Marcio Moreira Junior',
  headerTitle: 'TECH LAB',
  description:
    'Technical projects and experiments, focused on Linux, DevOps, SRE, cloud engineering, automation and practical software products.',
  language: 'en-us',
  theme: 'system',
  siteUrl: 'https://mdmjunior.github.io',
  officialSite: 'https://www.marciomoreirajunior.com.br',
  siteRepo: 'https://github.com/mdmjunior/mdmjunior.github.io',
  siteLogo: `${process.env.BASE_PATH || ''}/static/images/logo.png`,
  socialBanner: `${process.env.BASE_PATH || ''}/static/images/twitter-card.png`,
  email: 'iam@marciomoreirajunior.com.br',
  github: 'https://github.com/mdmjunior',
  linkedin: 'https://www.linkedin.com/in/mdmjunior',
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
