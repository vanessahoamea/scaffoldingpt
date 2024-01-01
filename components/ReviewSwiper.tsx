"use client";

import Review from "./Review";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay, Keyboard, Pagination } from "swiper/modules";
import type { KeyTextField, NumberField, RichTextField } from "@prismicio/client";
import "swiper/css";
import "swiper/css/a11y";
import "swiper/css/keyboard";
import "swiper/css/pagination";

interface ReviewData
{
    name: KeyTextField | undefined,
    job_title: KeyTextField | undefined,
    rating: NumberField | undefined,
    content: RichTextField | undefined
};
interface ReviewSwiperProps
{
    data: ReviewData[]
};
export default function ReviewSwiper(props: ReviewSwiperProps)
{
    return (
        <Swiper
            modules={[A11y, Autoplay, Keyboard, Pagination]}
            spaceBetween={25}
            slidesPerView={3}
            loop={true}
            a11y={{ prevSlideMessage: "Înapoi", nextSlideMessage: "Înainte" }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            keyboard={{ enabled: true }}
            pagination={{ clickable: true, dynamicBullets: true }}
            breakpoints={{
                0: { slidesPerView: 1},
                640: { slidesPerView: 2},
                1024: { slidesPerView: 3}
            }}
        >
        {
            props.data.map((review: ReviewData, index) => (
                <SwiperSlide key={index}>
                    <Review {...review} />
                </SwiperSlide>
            ))
        }
        </Swiper>
    );
}