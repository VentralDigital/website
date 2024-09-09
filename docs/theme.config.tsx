import type { DocsThemeConfig } from 'nextra-theme-docs'
import { useConfig } from 'nextra-theme-docs'
import { useRouter } from 'next/router'

import Image from 'next/image';
import logoImage from './public/logoflicker.svg'

const config: DocsThemeConfig = {
  docsRepositoryBase: 'https://github.com/VentralDigital/website/tree/main/docs/',
  useNextSeoProps() {
    return {
      titleTemplate: '%s • Ventral Digital'
    }
  },
  logo: (
    <>
      <Image src={logoImage} height={50} alt="Ventral Digital"/>
    </>
  ),
  /* Adding announcement banner to top: */
  /* banner: {
    dismissible: true,
    key: '2023-12-05-relaunch', // Storage key to remember dismissed state
    text: (
      <a href="https://twitter.com/patrickd_de/status/1732445343625642317" target="_blank">
        🎉 This website has just relaunched! Report any issues you find to get a Cantina Code! →
      </a>
    )
  }, */
  head: function useHead() {
    const { title } = useConfig()
    const { asPath } = useRouter()
    return (
      <>
        <meta name="apple-mobile-web-app-title" content="Ventral Digital" />
        <meta name="msapplication-TileColor" content="#fff" />
        <meta name="theme-color" content="#fff" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="Content-Type" content="text/html; charset=UTF-8" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta name="description" content="Ventral Digital LLC is a research and consultancy firm specializing in Information Security and Privacy."/>
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="ventraldigital" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="Ventral Digital LLC is a research and consultancy firm specializing in Information Security and Privacy."/>
        <meta property="og:url" content={'https://ventral.digital' + asPath} />
        <meta property="og:title" content={title ? title + ' • Ventral Digital' : 'Ventral Digital'}/>
        <meta property="og:image:alt" content={title ? 'Banner for blog post on Ventral Digital titled ' + title : 'Banner for blog post on Ventral Digital'} />
        <meta property="og:image" content="https://ventral.digital/og.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:description" content="Ventral Digital LLC is a research and consultancy firm specializing in Information Security and Privacy."/>
        <meta name="twitter:site:domain" content="ventral.digital" />
        <meta name="twitter:creator" content="@patrickd_de" />
        <meta name="twitter:creator:id" content="493540838" />
        <meta name="twitter:url" content={'https://ventral.digital' + asPath} />
        <meta name="twitter:title" content={title ? title + ' • Ventral Digital' : 'Ventral Digital'}/>
        <meta name="twitter:image:alt" content={title ? 'Banner for blog post on Ventral Digital titled ' + title : 'Banner for blog post on Ventral Digital'} />
        <meta name="twitter:image" content="https://ventral.digital/og.png" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="icon" href="/favicon-dark.svg" type="image/svg+xml" media="(prefers-color-scheme: dark)"/>
        <link rel="icon" href="/favicon-dark.png" type="image/png" media="(prefers-color-scheme: dark)"/>
      </>
    )
  },
  search: {
    placeholder: 'Search...',
  },
  editLink: {
    text: 'Suggest edit on GitHub →'
  },
  feedback: {
    content: null,
  },
  sidebar: {
    titleComponent({ title, type }) {
      if (type === 'separator') {
        return <span className="cursor-default">{title}</span>
      }
      return <>{title}</>
    },
    defaultMenuCollapseLevel: 1,
    toggleButton: false
  },
  footer: {
    text: (
      <div className="flex w-full flex-col items-center sm:items-start">
        <p className="mt-6 text-xs">
          <i>All security/hacking related information on this website is for educational purposes. In no event shall the authors or copyright holders be held liable for any effects arising from the usage of the information. Do not use the information against devices or services that are not your own property or without permission of the owner.</i>
        </p>
        <p className="mt-6 text-xs">
          © {new Date().getFullYear()} Ventral Digital LLC
        </p>
      </div>
    )
  },
  toc: {
    title: "In this article",
    backToTop: true
  },
  darkMode: false,
  nextThemes: {
    defaultTheme: 'light',
  },
  navigation: false,
}

export default config
