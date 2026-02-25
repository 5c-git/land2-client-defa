import './line-banner.scss';

import Swiper from 'swiper';
import { FreeMode, Mousewheel } from 'swiper/modules';


const sliderInit = () => {
  const history = document.querySelector('.line-banner');
  if (history) {
    const swiperEl = history.querySelector('.swiper');
    if (!swiperEl) return;

    let slider = null;

    const breakpoint = window.matchMedia('(max-width: 991px)');

    const initSlider = () => {
      slider = new Swiper(swiperEl, {
        modules: [FreeMode, Mousewheel],
        slidesPerView: 'auto',
        spaceBetween: 0,
        mousewheel: {
          enabled: true,
          releaseOnEdges: true,
        },
        freeMode: {
          enabled: true,
        },
      });
    };

    const destroySlider = () => {
      if (slider) {
        slider.destroy(true, true); // Удалить инстанс + очистить стили.
        slider = null;
      }
    };

    const handleBreakpoint = (evt) => {
      if (evt.matches) {
        if (!slider) initSlider();
      } else {
        destroySlider();
      }
    };

    handleBreakpoint(breakpoint);

    breakpoint.addEventListener('change', handleBreakpoint);
  }
};

sliderInit();
