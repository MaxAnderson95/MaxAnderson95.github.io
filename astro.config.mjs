// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import remarkGithubBlockquoteAlert from 'remark-github-blockquote-alert';
import expressiveCode from 'astro-expressive-code';
import { pluginFileIcons } from '@xt0rted/expressive-code-file-icons';

export default defineConfig({
  site: 'https://maxanderson.tech',
  output: 'static',
  integrations: [
    expressiveCode({
      themes: ['github-dark'],
      minSyntaxHighlightingColorContrast: 7,
      plugins: [
        // @ts-expect-error Types mismatch between expressive-code versions
        pluginFileIcons(),
      ],
      frames: {
        extractFileNameFromCode: true,
      },
      styleOverrides: {
        borderRadius: '0.5rem',
        borderWidth: '1px',
        borderColor: 'var(--color-rule)',
        codeBackground: '#121823',
        frames: {
          editorActiveTabBackground: 'transparent',
          editorActiveTabBorderColor: 'transparent',
          editorTabBarBackground: 'transparent',
          editorTabBarBorderBottomColor: 'var(--color-rule)',
          terminalTitlebarBackground: 'transparent',
          terminalTitlebarBorderBottomColor: 'var(--color-rule)',
        }
      }
    }),
    react(),
    sitemap()
  ],
  vite: {
    // @ts-expect-error Type mismatch with vite
    plugins: [tailwindcss()],
  },
  markdown: {
    remarkPlugins: [remarkGithubBlockquoteAlert],
  },
});
