import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import {BsArrowRightCircle} from "react-icons/bs"
import {BsArrowLeftCircle} from "react-icons/bs"

import 'swiper/css';
import Swipe from './Swipe';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


function Slider(){
    return(
        <div>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                navigation={{
                    nextEl:".button-next-slide",
                    prevEl:".button-prev-slide",
                }}
                pagination={{  }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                className='relative z-0'>
                    {/* When there will be many slides we will use map functions to implement this */}
                <SwiperSlide>
                    <Swipe></Swipe>
                </SwiperSlide>
                <SwiperSlide>
                    <Swipe></Swipe>
                </SwiperSlide>
                <SwiperSlide>
                    <Swipe></Swipe>
                </SwiperSlide>

                <div className='button-next-slide w-[24px] h-[24px] absolute right-[20px] bottom-[20px] z-50'>
                    <BsArrowRightCircle></BsArrowRightCircle>
                </div>

                <div className='button-prev-slide w-[24px] h-[24px] absolute right-[50px] bottom-[20px] z-50'>
                    <BsArrowLeftCircle></BsArrowLeftCircle>
                </div>
            </Swiper>
        </div>
    );

}

export default Slider;