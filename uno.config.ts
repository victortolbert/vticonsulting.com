import { defineConfig, presetAttributify, presetIcons, presetWebFonts, presetWind3 } from 'unocss'

export default defineConfig({
  shortcuts: {
    'border-base': 'border-gray-300 dark:border-gray-600',
    'bg-active': ':bg-gray/10',
  },
  presets: [
    presetWind3(),
    presetIcons(),
    presetAttributify(),
    presetWebFonts({
      provider: 'none',
      fonts: {
        sans: 'Salesforce Sans, system-ui, sans-serif',
      },
    }),
  ],
})
