/* Includes */

//  Styles

import './style.scoped.sass'



/* Functional component */

const BurgerMenu = props => {
  const fadeInStyles = {
    top: props.headerHeight
  }

  return (
    <div
      className={`burger-menu ${props.active ? '' : 'active'}`}
      style={props.active ? {} : fadeInStyles}
    >
      <ul className='header-nav__list'>
        <li className='header-nav__item'>
          <div className='header-nav__link'>Доставка</div>
        </li>
        <li className='header-nav__item'>
          <div className='header-nav__link'>Гарантия</div>
        </li>
        <li className='header-nav__item'>
          <div className='header-nav__link'>О нас</div>
        </li>
        <li className='header-nav__item'>
          <div className='header-nav__link'>Контакты</div>
        </li>
      </ul>
    </div>
  )
}

export default BurgerMenu
