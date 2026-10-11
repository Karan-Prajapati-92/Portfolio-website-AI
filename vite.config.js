import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Inlines the (small) built stylesheet into index.html so first paint does not wait
// for a second request.
function inlineCss() {
  return {
    name: 'inline-css',
    enforce: 'post',
    apply: 'build',
    generateBundle(_, bundle) {
      const html = bundle['index.html'];
      if (!html) return;
      let source = String(html.source);
      for (const [name, asset] of Object.entries(bundle)) {
        if (asset.type !== 'asset' || !name.endsWith('.css')) continue;
        const file = name.split('/').pop();
        const tag = new RegExp(`<link rel="stylesheet"[^>]*href="[^"]*${file}"[^>]*>`);
        if (tag.test(source)) {
          source = source.replace(tag, () => `<style>${asset.source}</style>`);
          delete bundle[name];
        }
      }
      html.source = source;
    },
  };
}

export default defineConfig({
  plugins: [react(), inlineCss()],
});
