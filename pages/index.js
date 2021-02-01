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
        <meta name="keywords" content="DPO Peinture Inc., Entrepreneur peintre, Peinture résidentielle, Peinture commerciale, Peinture d'armoires de cuisine, Peinture de revêtements extérieurs, Peinture au fusil, Teinture en tout genre, Service de design d’intérieur" />
        <meta name="description" content='Entrepreneur peintre œuvrant principalement sur la rive-sud et la région de Montréal, DPO Peinture Inc. est disponible pour tous vos projets de peinture, petits ou grands. Que ce soit pour l’intérieur ou l’extérieur, notre équipe chevronnée saura satisfaire vos attentes, aussi élevées soient-elles. Faites confiance à nos experts, ils mettront leurs compétences et leur minutie en œuvre pour réaliser les travaux demandés tout en respectant vos exigences. Contactez-nous dès maintenant et il nous fera grand plaisir de discuter avec vous de votre projet.' />
      </Head>

      <Header />
      <Main />
      <Footer />

    </div>
    )
  }

}

export default Index