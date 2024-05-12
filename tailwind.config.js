/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{vue,js,ts,html}'],
  theme: {
    extend: {}
  },
  // eslint-disable-next-line no-undef
  plugins: [require('daisyui')],
  daisyui: {
    themes: ['light', 'dark', 'dim'], // 主题
    darkTheme: 'dim', // 默认深色主题
    base: true, // 是否启用基础样式
    styled: true, // 是否启用daisyUI组件
    utils: true, // 是否启用daisyUI工具
    prefix: '', // daisyUI前缀
    logs: false // 是否启用控制台日志
  }
}
