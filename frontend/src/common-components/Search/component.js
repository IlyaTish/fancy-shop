/* Includes */

// Styles

import './style.scoped.sass'
import './responsive.scoped.sass'

// Icons

import { ICONS } from 'data/icons'
import CommonIcon from 'icon-components/commonIcon/component'



/* Functional component */

const Search = () => {
  return (
    <div className='search'>
      <input
        className='search__input input'
        type='search'
        placeholder='Поиск'
      />
      <button className='search__btn'>
        <CommonIcon
          name='search-icon'
          width='30'
          height='30'
          viewBox='0 0 30 30'
          icon={ICONS.search}
        />
      </button>
    </div>
  )
}

export default Search
