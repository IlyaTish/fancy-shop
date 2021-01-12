/* Includes */

import React from 'react'

// Styles

import './styles/styles.sass'
import 'swiper/swiper.scss'

// Block components

import Header from 'components/block-components/Header/component'
import Footer from 'components/block-components/Footer/component'
import HomePage from 'components/page-components/home-page/component'



class App extends React.Component {
  render() {
    return (
      <div className='wrapper'>
        <Header />

        <main className='content'>
          <HomePage />
        </main>

        <Footer />
      </div>
    )
  }
}

export default App
