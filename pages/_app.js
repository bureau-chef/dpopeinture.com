import 'react-flexbox-grid/dist/react-flexbox-grid.css'
import '../styles/flexboxgrid-fix.scss'
import '../styles/style.scss'
/* import '../styles/sass/bc-styles.scss'
import '../styles/sass/bc-anim.scss'
import '../styles/global.css' */

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}