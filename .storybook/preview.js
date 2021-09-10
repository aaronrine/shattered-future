import 'tailwindcss/tailwind.css'
import jest from 'jest-mock'
import * as nextImage from 'next/image';

window.jest = jest

Object.defineProperty(nextImage, 'default', {
  configurable: true,
  value: (props) => {
    return <img {...props} />;
  }
})

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
