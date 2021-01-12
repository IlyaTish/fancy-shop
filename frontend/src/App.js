/* Includes */

import React from 'react'

// Styles

import './styles/styles.sass'
import 'swiper/swiper.scss'

// Block components

import Header from 'block-components/Header/component'
import Footer from 'block-components/Footer/component'
import Main from 'block-components/Main/component'
import CatalogNav from 'block-components/CatalogNav/component'
import PopularProducts from 'block-components/PopularProducts/component'



class App extends React.Component {
  render() {
    return (
      <div className='wrapper'>
        <Header />

        <main className='content'>
          <Main />
          <CatalogNav />
          <PopularProducts />
        </main>

        <Footer />
      </div>
    )
  }
}

export default App
