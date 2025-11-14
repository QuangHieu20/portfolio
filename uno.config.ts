import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetWind3,
  presetWebFonts,
} from "unocss";

export default defineConfig({
  theme: {
    colors: {
     'beige-light': '#CABEAE',
     'deep-black': '#1A1818',
      'taupe': '#7B7369'
    },
    fontFamily: {
      sans: ['Montserrat', 'system-ui', 'sans-serif'],
      heading: ['Georgia', 'serif'],
    },
  },
  shortcuts: {
    'nav-link-large': 'font-heading text-[clamp(2rem,9vw,15rem)] font-medium text-deep-black break-words m-0 no-underline hover:opacity-80 focus:underline',
    'nav-link-large-vi': 'font-heading text-[clamp(2rem,6vw,15rem)] font-medium text-deep-black break-words m-0 no-underline hover:opacity-80 focus:underline',
  },
  presets: [
    presetWind3(),
    presetAttributify(),
    presetIcons(),
    presetWebFonts({
      provider: "google",
      fonts: {
        sans: {
          name: "Montserrat",
          weights: ['400', '500', '600', '700'],
        },
        // Georgia là font hệ thống, không cần load từ Google Fonts
        // Nhưng vẫn định nghĩa để có thể dùng font-heading
      },
    }),
  ],
});
