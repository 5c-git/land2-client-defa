import './advantages.scss';
import Swiper from 'swiper';
import {
  Navigation, Pagination, Scrollbar,
} from 'swiper/modules';

const tabs = document.querySelectorAll('.advantages__tab');
const items = document.querySelectorAll('.advantages__item');

const setActive = (index) => {
  tabs.forEach(tab => tab.classList.remove('advantages__tab--active'));
  items.forEach(item => item.classList.remove('advantages__item--active'));

  tabs[index]?.classList.add('advantages__tab--active');
  items[index]?.classList.add('advantages__item--active');
};

if (tabs.length && items.length) {
  setActive(0);

  tabs.forEach((tab, index) => {
    tab.addEventListener('click', (evt) => {
      evt.preventDefault();
      setActive(index);
    });
  });
}


const sliderInit = () => {
  const sliderEl = document.querySelector('.advantages__swiper');
  if (!sliderEl) return;

  const scrollbarEl = sliderEl.querySelector('.advantages__scrollbar');

  let slider = null;
  const breakpoint = window.matchMedia('(max-width: 991px)');

  const init = () => {
    slider = new Swiper(sliderEl, {
      modules: [Navigation, Pagination, Scrollbar],
      slidesPerView: 'auto',
      spaceBetween: 0,
      loop: false,
      scrollbar: {
        el: scrollbarEl,
        dragClass: 'slider__scrollbar-drag',
        draggable: true,
      },
    });
  };

  const destroy = () => {
    if (slider) {
      slider.destroy(true, true);
      slider = null;
    }
  };

  const handleBreakpoint = (e) => {
    if (e.matches) {
      if (!slider) init();
    } else {
      destroy();
    }
  };

  handleBreakpoint(breakpoint);

  breakpoint.addEventListener('change', handleBreakpoint);
};

sliderInit();
