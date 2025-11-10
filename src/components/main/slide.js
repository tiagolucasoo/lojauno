import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import './css/slide.css'

function Slide() {
    return (
        <main className='Slide'>
            <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            pagination={{clickable: true}}
            scrollbar={{draggable: true}}
            autoplay={{delay: 3000, disableOnInteraction: false}}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('Slide')}>

                <SwiperSlide className='modeloSlide' style={{backgroundImage: "url(banner01.jpg)"}}>
                    <div className='slide-conteudo'>
                        <h2 className='tituloSlide'>Lorem Ipsum Dolor Sit Amet Consectetur</h2>
                    </div>
                </SwiperSlide>

                <SwiperSlide className='modeloSlide' style={{backgroundImage: "url(banner02.jpg)"}}>
                    <div className='slide-conteudo'>
                        <h2 className='tituloSlide'>Lorem Ipsum Dolor Sit Amet Consectetur</h2>
                    </div>
                </SwiperSlide>

                <SwiperSlide className='modeloSlide' style={{backgroundImage: "url(banner03.jpg)"}}>
                    <div className='slide-conteudo'>
                        <h2 className='tituloSlide'>Lorem Ipsum Dolor Sit Amet Consectetur</h2>
                    </div>
                </SwiperSlide>

            </Swiper>
        </main>
    );
}

export default Slide;