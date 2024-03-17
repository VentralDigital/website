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

## Build Pipeline

Executed from the repository's root directory:

`pnpm i && pnpm build && cd docs && until pnpm build; do echo "Build failed, retrying..."; done`

Note that building and exporting the "docs" may fail with heap-overflow errors due to the memory intense rendering of LaTeX formulas. The current workaround is simply to repeatedly start the build, which works because each build attempt will not start from scratch but make use of what has already been successfully built and cached.


## License

[Nextra](https://nextra.site) is licensed under the MIT License.

Actual website contents, such as texts and images, may be copied freely under the condition that the link to the original is referenced.