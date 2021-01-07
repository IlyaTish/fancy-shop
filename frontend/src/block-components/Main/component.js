/* Includes */

//  Styles

import './style.scoped.sass'
import './responsive.scoped.sass'

// Import Swiper React components

import { Swiper, SwiperSlide } from 'swiper/react'



/* Functional component */

const Main = () => {
  return (
    <section className='main'>
      <div className='container'>
        <div className='main__cont'>
          <div className='main-slider'>
            <Swiper
              slidesPerView={1}
              spaceBetween={10}
              direction={'horizontal'}
              loop={true}
              autoplay={{ delay: 12000 }}
              mousewheel={{ forceToAxis: true }}
            >
              <SwiperSlide>
                <a className='main-slider__item' href='/home'>
                  <img
                    className='main-slider__img'
                    src={require('./img/banner-01.jpg').default}
                    srcSet={require('./img/banner-01@2x.jpg').default}
                    alt='Banner'
                  />
                </a>
              </SwiperSlide>

              <SwiperSlide>
                <a className='main-slider__item' href='/home'>
                  <img
                    className='main-slider__img'
                    src={require('./img/banner-01.jpg').default}
                    srcSet={require('./img/banner-01@2x.jpg').default}
                    alt='Banner'
                  />
                </a>
              </SwiperSlide>

              <SwiperSlide>
                <a className='main-slider__item' href='/home'>
                  <img
                    className='main-slider__img'
                    src={require('./img/banner-01.jpg').default}
                    srcSet={require('./img/banner-01@2x.jpg').default}
                    alt='Banner'
                  />
                </a>
              </SwiperSlide>
            </Swiper>
          </div>

          <div className='gift'>
            <div className='gift__content'>
              <span className='gift__title'>
                Подберите подарок себе <br />
                или своим близким <span className='emoji emoji-gift' />
              </span>

              <div className='gift-form'>
                <div className='input-row'>
                  <div className='input-wrapper input-wrapper--fit'>
                    <span className='input-title'>Пол:</span>
                    <div className='input-row input-row--no-gap'>
                      <label className='btn-gender active'>
                        <input type='checkbox' />
                        <svg
                          className='icon'
                          width='30'
                          height='30'
                          viewBox='0 0 30 30'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M16.565 20.914a4.035 4.035 0 01-3.21-.017c-.138-.06-.074-.268.074-.238a7.717 7.717 0 003.064.017c.148-.03.21.179.072.238zm3.399.473c-.421 0-.822-.123-1.163-.352a.497.497 0 00-.591.035 5.05 5.05 0 01-6.445.014.497.497 0 00-.586-.036c-.335.22-.73.339-1.143.339a5.158 5.158 0 00-5.16 5.16V29.5a.5.5 0 00.5.5h19.248a.5.5 0 00.5-.5v-2.953a5.158 5.158 0 00-5.16-5.16zm.098 7.05h-1.5a.5.5 0 010-1h1.5a.5.5 0 010 1zM24.266 5.05c-.96-1.558-2.43-2.62-4.113-3.039a.5.5 0 00-.103-.835C18.337.352 16.388-.063 14.56.008 9.546.202 6.646 3.953 6.75 8.814c0 2.803 0 2.617.002 2.681.016.359.556.338.553-.02-.01-1.095-.083-1.905.444-2.994a4.541 4.541 0 015.163-2.437c2.707.65 3.263 1.907 5.648 1.81.19-.018 1.04-.159 2.21-.486a1.5 1.5 0 011.898 1.314c.02.291.018-.168.018 2.898 0 .35.516.378.552.031.014-.143.01.11.01-3.615 0-.869.336-1.688.945-2.306.17-.173.19-.45.072-.64zm-2.593 3.718a.5.5 0 00-.633-.437c-1.32.369-2.251.513-2.423.52-2.697.122-3.398-1.225-5.937-1.835a3.543 3.543 0 00-4.382 3.473c.004.773.015 1.557.015 2.646 0 3.687 3 6.687 6.687 6.687 3.687 0 6.687-3 6.687-6.687 0-4.4.005-4.153-.014-4.367z'
                            fill='#000'
                          />
                        </svg>
                      </label>

                      <label className='btn-gender'>
                        <input type='checkbox' />
                        <svg
                          className='icon'
                          width='30'
                          height='30'
                          viewBox='0 0 30 30'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <g clipPath='url(#clip0)'>
                            <path
                              d='M18.453 21.382l-3.146 2.436a.5.5 0 01-.613 0l-3.15-2.439a.398.398 0 01-.037-.597 2.05 2.05 0 00.234-.274.494.494 0 01.576-.171 7.692 7.692 0 005.373-.002.493.493 0 01.571.178c.073.1.147.183.23.266a.402.402 0 01-.038.603zm1.818.014a.503.503 0 00-.337.104l-4.628 3.583a.5.5 0 01-.612 0L10.067 21.5a.503.503 0 00-.337-.104 5.156 5.156 0 00-4.855 5.15V29.5a.5.5 0 00.5.5h19.25a.5.5 0 00.5-.5v-2.954a5.156 5.156 0 00-4.854-5.15zm3.974-8.65a5.908 5.908 0 01-.995-3.288V6.75A6.757 6.757 0 0016.526 0H13.5a6.758 6.758 0 00-6.75 6.75v2.708c0 1.174-.343 2.31-.995 3.288a7.113 7.113 0 00.41 8.44.5.5 0 00.65.107 6.117 6.117 0 013.221-.907c.826 0 .925-.698.546-.966a7.684 7.684 0 01-3.27-6.287V9.625A1.5 1.5 0 019.01 8.138c2.99.396 6.04-.368 8.515-2.266.984-.753 2.412-.053 2.413 1.188.002.039.037.712.46.967a.96.96 0 00.603.11 1.5 1.5 0 011.687 1.488v3.508a7.684 7.684 0 01-3.269 6.287c-.379.268-.28.966.546.966 1.171 0 2.28.326 3.22.906a.501.501 0 00.652-.106c1.984-2.418 2.128-5.858.408-8.44zm-3.12-3.617c-.258.032-.762.044-1.242-.245-.94-.566-.945-1.806-.945-1.818a.5.5 0 00-.804-.4 12.454 12.454 0 01-9.255 2.463.5.5 0 00-.566.496v3.508c0 3.687 3 6.687 6.687 6.687 3.688 0 6.688-3 6.688-6.688V9.626a.5.5 0 00-.563-.496z'
                              fill='#000'
                            />
                          </g>
                          <defs>
                            <clipPath id='clip0'>
                              <path fill='#fff' d='M0 0h30v30H0z' />
                            </clipPath>
                          </defs>
                        </svg>
                      </label>
                    </div>
                  </div>

                  <div className='input-wrapper'>
                    <span className='input-title'>Возраст:</span>
                    <input className='input' />
                  </div>
                </div>

                <div className='input-row'>
                  <div className='input-wrapper'>
                    <span className='input-title'>Категория товара:</span>
                    <input className='input' />
                  </div>
                </div>

                <div className='input-row'>
                  <div className='input-wrapper'>
                    <span className='input-title'>Максимальная цена:</span>
                    <input className='input' />
                  </div>
                  <div className='btn'>
                    <span className='btn__txt'>Найти</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Main
