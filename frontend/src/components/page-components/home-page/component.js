/* Includes */

// Block components

import Main from 'components/block-components/Main/component'
import CatalogNav from 'components/block-components/CatalogNav/component'
import PopularProducts from 'components/block-components/PopularProducts/component'

const HomePage = () => {
  return (
    <>
      <Main />
      <CatalogNav />
      <PopularProducts />
    </>
  )
}

export default HomePage
