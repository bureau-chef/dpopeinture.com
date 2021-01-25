import { Component } from 'react'
import Head from 'next/head'

import TagManager from 'react-gtm-module'

import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'

class Index extends Component {

  constructor(props) { 
    super(props)
  }

  componentDidMount() {
    TagManager.initialize({ gtmId: 'GTM-TMSSCZL' })
  }

  render () {
    return (
    <div className="app">
      <Head>
        <title>DPO Peinture Inc.ss</title>
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