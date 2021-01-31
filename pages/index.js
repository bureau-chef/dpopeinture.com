import { Component } from 'react'
import Head from 'next/head'

import TagManager from 'react-gtm-module'

import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'

import { gsap, Power3 } from 'gsap/dist/gsap'

class Index extends Component {

  constructor(props) { 
    super(props)
  }

  componentDidMount() {
    TagManager.initialize({ gtmId: 'GTM-TMSSCZL' })
    gsap.to('.app', { 
      autoAlpha: 1,
      ease:Power3.easeOut,
      duration: 1,
    })
  }

  render () {
    return (
    <div className="app">
      <Head>
        <title>DPO Peinture Inc. - Votre projet, notre expertise.</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Main />
      <Footer />

    </div>
    )
  }

}

export default Index