import 'react-flexbox-grid/dist/react-flexbox-grid.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import '../styles/flexboxgrid-fix.scss'
import '../styles/style.scss'

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}