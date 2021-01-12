/* Includes */

// Styles

import './style.scoped.sass'
import './responsive.scoped.sass'

// Import Swiper React components

import { Swiper, SwiperSlide } from 'swiper/react'



/* Functional component */

const CatalogNav = () => {
  const swiperParams = {
    slidesPerView: 'auto',
    direction: 'horizontal',
    autoplay: {
      delay: 5000
    },
    mousewheel: {
      forceToAxis: true
    }
  }

  return (
    <div className='catalog-nav-wrapper'>
      <div className='container'>
        <Swiper
          className='catalog-nav-swiper items-swiper swiper-container'
          {...swiperParams}
        >
          <SwiperSlide>
            <a className='catalog-nav-swiper__link' href='/home'>
              детские коляски
            </a>
          </SwiperSlide>

          <SwiperSlide>
            <a className='catalog-nav-swiper__link' href='/home'>
              квадрокоптеры и радиоуправляемые игрушки
            </a>
          </SwiperSlide>

          <SwiperSlide>
            <a className='catalog-nav-swiper__link' href='/home'>
              электроника
            </a>
          </SwiperSlide>

          <SwiperSlide>
            <a className='catalog-nav-swiper__link' href='/home'>
              одежда, обувь и аксессуары
            </a>
          </SwiperSlide>

          <SwiperSlide>
            <a className='catalog-nav-swiper__link' href='/home'>
              товары для мам и малышей
            </a>
          </SwiperSlide>

          <SwiperSlide>
            <a className='catalog-nav-swiper__link' href='/home'>
              мягкие игрушки
            </a>
          </SwiperSlide>

          <SwiperSlide>
            <a className='catalog-nav-swiper__link' href='/home'>
              велосипеды и гироскутеры
            </a>
          </SwiperSlide>

          <SwiperSlide>
            <a className='catalog-nav-swiper__link' href='/home'>
              конструкторы
            </a>
          </SwiperSlide>
        </Swiper>

        <div className='catalog-nav'>
          <div className='catalog-nav__item'>
            <div className='catalog-nav__content'>
              <span className='catalog-nav__title'>Детские коляски</span>
              <a className='btn btn--empty' href='/home'>
                <span className='btn__txt'>Смотреть</span>
              </a>
            </div>
            <img
              className='catalog-nav__img'
              src={require('./img/pic-01.jpg').default}
              srcSet={require('./img/pic-01@2x.jpg').default}
              alt='pic-01'
            />
          </div>

          <div className='catalog-nav__item'>
            <div className='catalog-nav__content'>
              <span className='catalog-nav__title'>
                Квадрокоптеры и радиоуправляемые игрушки
              </span>
              <a className='btn btn--empty' href='/home'>
                <span className='btn__txt'>Смотреть</span>
              </a>
            </div>
            <img
              className='catalog-nav__img'
              src={require('./img/pic-02.jpg').default}
              srcSet={require('./img/pic-02@2x.jpg').default}
              alt='pic-02'
            />
          </div>

          <div className='catalog-nav__item'>
            <div className='catalog-nav__content'>
              <span className='catalog-nav__title'>Электроника</span>
              <a className='btn btn--empty' href='/home'>
                <span className='btn__txt'>Смотреть</span>
              </a>
            </div>
            <img
              className='catalog-nav__img'
              src={require('./img/pic-03.jpg').default}
              srcSet={require('./img/pic-03@2x.jpg').default}
              alt='pic-03'
            />
          </div>

          <div className='catalog-nav__item'>
            <div className='catalog-nav__content'>
              <span className='catalog-nav__title'>Для дома и интерьера</span>
              <a className='btn btn--empty' href='/home'>
                <span className='btn__txt'>Смотреть</span>
              </a>
            </div>
            <img
              className='catalog-nav__img'
              src={require('./img/pic-04.jpg').default}
              srcSet={require('./img/pic-04@2x.jpg').default}
              alt='pic-04'
            />
          </div>

          <div className='catalog-nav__item'>
            <div className='catalog-nav__content'>
              <span className='catalog-nav__title'>
                Одежда, обувь и аксессуары
              </span>
              <a className='btn btn--empty' href='/home'>
                <span className='btn__txt'>Смотреть</span>
              </a>
            </div>
            <img
              className='catalog-nav__img'
              src={require('./img/pic-05.jpg').default}
              srcSet={require('./img/pic-05@2x.jpg').default}
              alt='pic-05'
            />
          </div>

          <div className='catalog-nav__item'>
            <div className='catalog-nav__content'>
              <span className='catalog-nav__title'>
                Товары для мам и малышей
              </span>
              <a className='btn btn--empty' href='/home'>
                <span className='btn__txt'>Смотреть</span>
              </a>
            </div>
            <img
              className='catalog-nav__img'
              src={require('./img/pic-06.jpg').default}
              srcSet={require('./img/pic-06@2x.jpg').default}
              alt='pic-06'
            />
          </div>

          <div className='catalog-nav__item'>
            <div className='catalog-nav__content'>
              <span className='catalog-nav__title'>Мягкие игрушки</span>
              <a className='btn btn--empty' href='/home'>
                <span className='btn__txt'>Смотреть</span>
              </a>
            </div>
            <img
              className='catalog-nav__img'
              src={require('./img/pic-07.jpg').default}
              srcSet={require('./img/pic-07@2x.jpg').default}
              alt='pic-07'
            />
          </div>

          <div className='catalog-nav__item'>
            <div className='catalog-nav__content'>
              <span className='catalog-nav__title'>
                Велосипеды и гироскутеры
              </span>
              <a className='btn btn--empty' href='/home'>
                <span className='btn__txt'>Смотреть</span>
              </a>
            </div>
            <img
              className='catalog-nav__img'
              src={require('./img/pic-08.jpg').default}
              srcSet={require('./img/pic-08@2x.jpg').default}
              alt='pic-08'
            />
          </div>

          <div className='catalog-nav__item'>
            <div className='catalog-nav__content'>
              <span className='catalog-nav__title'>Конструкторы</span>
              <a className='btn btn--empty' href='/home'>
                <span className='btn__txt'>Смотреть</span>
              </a>
            </div>
            <img
              className='catalog-nav__img'
              src={require('./img/pic-09.jpg').default}
              srcSet={require('./img/pic-09@2x.jpg').default}
              alt='pic-09'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CatalogNav
