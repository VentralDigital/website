import nextra from 'nextra'
import rehypeAsciiMath from 'rehype-asciimath'

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  flexsearch: {
    codeblocks: false
  },
  defaultShowCopyCode: false,
  codeHighlight: true,
  latex: true,
  // Enables AsciiMath notation.
  mdxOptions: {
    rehypePlugins: [
      rehypeAsciiMath,
    ],
  },
})

export default {
  ...withNextra({
    reactStrictMode: true,
    eslint: {
      // ESLint behaves weirdly in this monorepo.
      ignoreDuringBuilds: true
    },
    webpack(config) {
      const allowedSvgRegex = /components\/icons\/.+\.svg$/
  
      const fileLoaderRule = config.module.rules.find(rule =>
        rule.test?.test?.('.svg')
      )
      fileLoaderRule.exclude = allowedSvgRegex
  
      config.module.rules.push({
        test: allowedSvgRegex,
        use: ['@svgr/webpack']
      })
      return config
    }
  }),
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};