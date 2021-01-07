/* Includes */

//  Styles

import './style.scoped.sass'
import './responsive.scoped.sass'



const Footer = () => {
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='footer__cont'>
          <div className='footer__col-1'>
            <img
              className='footer-logo'
              src={require('./img/logo-white.svg').default}
              alt='Fancy.shop'
            />

            <a className='footer__link' href='tel:+79175391142'>
              <svg
                className='icon'
                width='30'
                height='30'
                viewBox='0 0 30 30'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <g clipPath='url(#clip0)' fill='#000'>
                  <path
                    opacity='.4'
                    d='M19.701 9.792L23.79.26l-.972-.224a1.416 1.416 0 00-1.611.814l-2.813 6.563a1.402 1.402 0 00.405 1.64l.903.74zm-10.642 9a1.406 1.406 0 00-1.641-.405L.856 21.199a1.424 1.424 0 00-.82 1.618l.222.966 9.54-4.088-.74-.903zM28.91 1.442L25.644.688l-4.433 10.341 1.136.93a21.714 21.714 0 01-10.382 10.383l-.93-1.137L.686 25.64l.755 3.27A1.406 1.406 0 002.812 30C17.819 30 30 17.843 30 2.813a1.406 1.406 0 00-1.09-1.37z'
                  />
                  <path d='M23.79.26L19.7 9.792l1.51 1.237L25.644.688 23.79.26zM.257 23.783l.429 1.857 10.347-4.435-1.236-1.51-9.54 4.088z' />
                </g>
                <defs>
                  <clipPath id='clip0'>
                    <path fill='#fff' d='M0 0h30v30H0z' />
                  </clipPath>
                </defs>
              </svg>

              <span className='footer__txt'>+7 (917) 539-11-42</span>
            </a>

            <a className='footer__link' href='mailto:fancy.shop@mail.ru'>
              <svg
                className='icon'
                width='30'
                height='30'
                viewBox='0 0 30 30'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <g clipPath='url(#clip0)' fill='#000' fillOpacity='.8'>
                  <path
                    opacity='.4'
                    d='M15.027 20.625h-.054c-1.764 0-3.54-1.372-4.837-2.374-.21-.163-8.685-6.374-10.136-7.509v12.695a2.812 2.812 0 002.813 2.813h24.375A2.812 2.812 0 0030 23.437V10.745c-1.433 1.123-9.926 7.344-10.137 7.507-1.296 1.002-3.072 2.374-4.835 2.374zM27.188 3.75H2.813A2.813 2.813 0 000 6.563v1.113a1.411 1.411 0 00.54 1.107c1.792 1.4 2.384 1.899 10.16 7.541.984.715 2.94 2.45 4.3 2.426 1.36.023 3.316-1.71 4.3-2.426 7.776-5.642 8.368-6.135 10.16-7.54A1.401 1.401 0 0030 7.675V6.562a2.812 2.812 0 00-2.813-2.812z'
                  />
                  <path d='M30 7.676v3.068c-1.433 1.123-9.926 7.344-10.137 7.507-1.296 1.002-3.072 2.374-4.835 2.374h-.056c-1.763 0-3.54-1.372-4.836-2.374-.21-.163-8.685-6.374-10.136-7.509V7.676a1.411 1.411 0 00.54 1.107c1.792 1.4 2.384 1.899 10.16 7.541.977.71 2.914 2.426 4.273 2.426h.054c1.359 0 3.296-1.716 4.274-2.426 7.775-5.642 8.367-6.135 10.16-7.54A1.401 1.401 0 0030 7.675z' />
                </g>
                <defs>
                  <clipPath id='clip0'>
                    <path fill='#fff' d='M0 0h30v30H0z' />
                  </clipPath>
                </defs>
              </svg>
              <span className='footer__txt'>fancy.shop@mail.ru</span>
            </a>
          </div>

          <div className='footer__col-2'>
            <span className='footer__title'>Каталог</span>
            <div className='footer__wrapper'>
              <ul className='footer-menu footer-menu--2-cols'>
                <li className='footer-menu__item'>
                  <a className='footer-menu__link' href='/home'>
                    Детские коляски
                  </a>
                </li>
                <li className='footer-menu__item'>
                  <a className='footer-menu__link' href='/home'>
                    Квдрокоптеры и радиоуправляемые игрушки
                  </a>
                </li>
                <li className='footer-menu__item'>
                  <a className='footer-menu__link' href='/home'>
                    Куклы
                  </a>
                </li>
                <li className='footer-menu__item'>
                  <a className='footer-menu__link' href='/home'>
                    Развивающие игрушки
                  </a>
                </li>
                <li className='footer-menu__item'>
                  <a className='footer-menu__link' href='/home'>
                    Детская одежда
                  </a>
                </li>
                <li className='footer-menu__item'>
                  <a className='footer-menu__link' href='/home'>
                    Товары для мам и малышей
                  </a>
                </li>
                <li className='footer-menu__item'>
                  <a className='footer-menu__link' href='/home'>
                    Мягкие игрушки
                  </a>
                </li>
                <li className='footer-menu__item'>
                  <a className='footer-menu__link' href='/home'>
                    Велосипеды и гироскутеры
                  </a>
                </li>
                <li className='footer-menu__item'>
                  <a className='footer-menu__link' href='/home'>
                    Конструкторы
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className='footer__col-3'>
            <span className='footer__title'>Меню</span>
            <ul className='footer-menu'>
              <li className='footer-menu__item'>
                <a className='footer-menu__link' href='/home'>
                  Доставка
                </a>
              </li>
              <li className='footer-menu__item'>
                <a className='footer-menu__link' href='/home'>
                  Гарантия
                </a>
              </li>
              <li className='footer-menu__item'>
                <a className='footer-menu__link' href='/home'>
                  О нас
                </a>
              </li>
              <li className='footer-menu__item'>
                <a className='footer-menu__link' href='/home'>
                  Контакты
                </a>
              </li>
            </ul>
          </div>

          <div className='footer__col-4'>
            <span className='footer__title'>Обратная связь</span>
            <form className='footer-form'>
              <input
                className='input'
                type='text'
                name='name'
                placeholder='Имя'
              />
              <input
                className='input'
                type='text'
                name='phone'
                placeholder='+7 (917) 539-11-42'
              />
              <button className='btn'>
                <span className='btn__txt'>Отправить</span>
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className='footer-bottom'>
        <div className='container'>
          <div className='footer-bottom__cont'>
            <span className='footer-bottom__txt'>
              Copyright 2019&nbsp;&copy; Семейный онлайн гипермаркет
              &laquo;fancy.shop&raquo;. Все права защищены.
            </span>
            <div className='footer-bottom__links'>
              <a className='footer-bottom__link' href='/home'>
                Положение о&nbsp;конфиденциальности
              </a>
              <a className='footer-bottom__link' href='/home'>
                Положение о&nbsp;Cookie
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
