import 'react-flexbox-grid/dist/react-flexbox-grid.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import '../styles/flexboxgrid-fix.scss'
import '../styles/style.scss'
/* import '../styles/sass/bc-styles.scss'
import '../styles/sass/bc-anim.scss'
import '../styles/global.css' */

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}