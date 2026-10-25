#!/usr/bin/env bash
# Assemble the Cloudflare Pages output dir (default ./dist) for chadmurchison.com.
# There is no build step: plain index.html + assets/ plus the Pages config files.
# 1010-glow (formerly /1010-glow/ in the S3 bucket) is intentionally left out (Chad, Oct 25 2026).
set -euo pipefail
OUT="${1:-dist}"
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
rm -rf "$OUT" && mkdir -p "$OUT"
cp "$ROOT/index.html" "$OUT/"
cp -r "$ROOT/assets" "$OUT/assets"
cp "$ROOT/pages/_headers" "$ROOT/pages/_redirects" "$ROOT/pages/robots.txt" "$OUT/"
echo "Pages output in $OUT:"; (cd "$OUT" && find . -type f | sort)
