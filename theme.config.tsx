import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  useNextSeoProps() {
    return {
      titleTemplate: '%s - Preln'
    }
  },
  logo: <span>Preln</span>,
  project: {
    link: 'https://github.com/Adri-Hdez/Preln',
  },
  docsRepositoryBase: 'https://github.com/shuding/nextra-docs-template',
  footer: {
    text: 'Preln, a package for preprocessing text in spanish.',
  },
  gitTimestamp : false,
}

export default config
