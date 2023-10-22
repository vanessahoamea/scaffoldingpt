"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Keyboard, Pagination } from "swiper/modules";
import Review from "./Review";
import type { ReviewData } from "../types";
import "swiper/css";
import "swiper/css/a11y";
import "swiper/css/keyboard";
import "swiper/css/pagination";

interface ReviewSwiperProps
{
    data: ReviewData[]
};
export default function ReviewSwiper(props: ReviewSwiperProps)
{
    return (
        <Swiper
            modules={[A11y, Keyboard, Pagination]}
            spaceBetween={25}
            slidesPerView={3}
            loop={true}
            a11y={{ prevSlideMessage: "Înapoi", nextSlideMessage: "Înainte" }}
            keyboard={{ enabled: true }}
            pagination={{ clickable: true, dynamicBullets: true }}
            breakpoints={{
                0: { slidesPerView: 1},
                640: { slidesPerView: 2},
                1024: { slidesPerView: 3}
            }}
        >
        {
            props.data.map((review: ReviewData) => (
                <SwiperSlide key={review.id}>
                    <Review {...review} />
                </SwiperSlide>
            ))
        }
        </Swiper>
    );
}