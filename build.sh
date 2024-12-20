#!/bin/bash
export NODE_OPTIONS="--max-old-space-size=8192"
pnpm clean
pnpm i
pnpm build
cd docs
rm -rf export.zip export .next
until pnpm build; do echo "Build failed, retrying..."; done
zip -r export.zip export
