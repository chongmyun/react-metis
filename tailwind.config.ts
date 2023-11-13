import type { Config } from 'tailwindcss'
const libName = process.env.LIB_NAME || 'alpas';
const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'main-logo': `url("/img/logo.png")`,
        'menu-logo': `url("/img/logo_menu.png")`,
        "login-background": `url('/img/lib/${libName}/login-background.png')`,
        'login-logo': `url("/img/lib/${libName}/login-logo.png")`,
        'check-box': `url("/img/img_checkbox.png")`,
      },
    },
  },
  plugins: [],
}
export default config

