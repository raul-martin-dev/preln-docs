import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  useNextSeoProps() {
    return {
      titleTemplate: '%s - Preln'
    }
  },
  logo: 
  <div style={{ display: "flex" }}>
    <div>
      <svg 
        height="30"
        width="40"
        viewBox="0 0 500 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">

        <path 
        d="M132.316 1c98 2 120.5 77.5 127.5 119.5 15.6 0 25.5 16.667 28.5 25 4.8 21.6-7.333 34.667-14 38.5l8 18c22 16.8 50.5 12 62 7.5 39.6-13.6 44.5-58.333 42-79-4.4-35.6-29.833-37.167-42-33.5-26 17.2-13.5 39.5-4 48.5-44.4.4-45.5-29.833-40.5-45 18.4-48.8 61.333-48.667 80.5-42.5 76 34 59.333 111.5 41.5 146-27.6 60-108.167 58-145 49.5 41.6 66.4 92.5 77.25 115 76 50.4-2.8 54.5-29.5 52.5-44.5-3.667-27.5-33.667-24.5-43.5-18 2-28.8 22.167-33.333 32-32 41.6 8.4 54.86 41.5 54 62-2.4 57.2-64.972 80-97.5 80-76.5 0-131.5-55.333-149-85-86 53.2-56.5 118.22-25 132.5 30 13.6 46.833 1.667 51.5-6 6-9.6 1.5-22.667-1.5-28-6.8-13.2-23.5-13.167-31-11.5 14.4-22.8 34.333-21.833 42.5-18.5 29.6 14.4 29.667 52.667 26 70-11.6 40-53.5 49-73 48.5-47.6-2.8-75.167-42.833-83-62.5-34-59.2 8.5-120.667 34-144-114.8-14.8-138.833 49.167-136.5 83 5.6 35.6 26.667 38.167 36.5 35 14.4-6.8 11.333-21.833 8-28.5 33.6 11.2 33 33.333 28.5 43-23.2 37.2-66.667 22.167-85.5 10-46-40.4-30.5-101.167-17-126.5 25.2-54.4 104.5-73 141-75.5-80.8-13.6-108-70-111.5-96.5-5.2-90.8 56.5-114.833 88-115.5z" 
        fill="currentColor"
        stroke="currentColor"
        />
      </svg>
    </div>
    <div style={{ margin: "auto auto auto 15%" }}>
      <b>Preln</b>
    </div>
  </div>,
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
