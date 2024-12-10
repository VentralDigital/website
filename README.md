# Ventral.Digital website

Based on the [Nextra Docs](https://github.com/shuding/nextra/tree/main/docs), adjusted to be exported and deployed to IPFS.

## First-Time Setup

The repository uses [PNPM Workspaces](https://pnpm.io/workspaces) and
[Turborepo](https://github.com/vercel/turborepo).

* `npm install -g pnpm` to install *pnpm*
* `pnpm i` to install dependencies
* `pnpm build` to build Nextra Core and Themes

## Working on Content

Enter the `./docs` directory and start `pnpm dev` which will watch for changes while you edit files within `./docs/pages/`.

Check whether static page export works by running `pnpm build` there.

## License

[Nextra](https://nextra.site) is licensed under the MIT License.

Actual website contents, such as texts and images, may be copied freely under the condition that the link to the original is referenced.