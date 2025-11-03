// vite-plugin-canonical.ts
import type { Plugin, ResolvedConfig } from 'vite';
import { readFileSync, writeFileSync } from 'fs';
import { resolve } from 'path';
import fg from 'fast-glob';

interface CanonicalPluginOptions {
  /** Production domain (no trailing slash) */
  base: string;
  /** Remove trailing slash from URLs? */
  stripTrailingSlash?: boolean;
  /** Remove .html extension? */
  stripHtmlExtension?: boolean;
}

export default function canonicalPlugin({
  base,
  stripTrailingSlash = true,
  stripHtmlExtension = true,
}: CanonicalPluginOptions): Plugin {
  const normalizedBase = base.replace(/\/+$/, '');
  let config: ResolvedConfig;

  return {
    name: 'vite-plugin-canonical',
    apply: 'build',
    enforce: 'post',

    configResolved(resolvedConfig) {
      // Store the final config (outDir, etc.)
      config = resolvedConfig;
    },

    async writeBundle() {
      const outDir = config.build.outDir ?? 'dist';
      const htmlFiles = await fg(`${outDir}/**/*.html`, { onlyFiles: true });

      for (const file of htmlFiles) {
        const html = readFileSync(file, 'utf-8');

        // Skip if already has a canonical tag
        if (html.includes('rel="canonical"')) continue;

        // Build relative path from outDir
        let relPath = resolve(file).replace(resolve(outDir), '').replace(/\\/g, '/');

        // /about/index.html → /about/
        relPath = relPath.replace(/\/index\.html$/, '/');

        if (stripHtmlExtension) {
          relPath = relPath.replace(/\.html$/, '');
        }

        if (stripTrailingSlash) {
          relPath = relPath.replace(/\/+$/, '') || '/';
        }

        const canonicalUrl = `${normalizedBase}${relPath}`;
        const tag = `  <link rel="canonical" href="${canonicalUrl}">\n`;

        const injected = html.replace('</head>', `${tag}</head>`);
        writeFileSync(file, injected);
      }
    },
  };
}