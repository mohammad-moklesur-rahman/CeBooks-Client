"use client";

import Image from "next/image";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Keyboard, Pagination, Navigation, Autoplay } from "swiper/modules";
import MyContainer from "./MyContainer";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import "animate.css";

export default function ContenSwiper() {
  const [typewriter1] = useTypewriter({
    words: [
      "A Comprehensive Collection of Authentic Islamic Books for Deep Knowledge and Spiritual Growth.",
    ],
    loop: false,
  });
  const [typewriter2] = useTypewriter({
    words: [
      "A Curated Selection of Popular English Books Covering Learning, Literature, and Global Knowledge.",
    ],
    loop: false,
  });
  const [typewriter3] = useTypewriter({
    words: [
      "An Extensive Library of Bangla Books Featuring Culture, Literature, Education, and Inspiration.",
    ],
    loop: false,
  });

  return (
    <MyContainer>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        keyboard={{
          enabled: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        autoplay={{ delay: 5000 }}
        modules={[Keyboard, Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="grid grid-cols-2 mx-20">
            {/* content area */}
            <div className="flex justify-center items-center h-[88vh]">
              <div className="text-[20px] font-bold text-green-500 animate__animated animate__backInLeft">
                <span>{typewriter1}</span>
                <Cursor cursorColor="#ff9292" />
                <p className="mt-4 text-accent animate__animated animate__pulse animate__infinite animate__slow">
                  A rich collection of authentic Islamic books covering Qur’an,
                  Hadith, Tafseer, Seerah, Islamic history, and daily life
                  guidance. Perfect for anyone seeking spiritual growth and
                  deeper understanding of Islam.
                </p>
              </div>
            </div>

            {/* image area */}
            <div className="flex justify-center items-center h-[88vh] animate__animated animate__pulse animate__infinite animate__slower">
              <Image
                src="/images/slide1.png"
                alt="slider 1"
                width={200}
                height={200}
              />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="grid grid-cols-2 mx-20">
            {/* content area */}
            <div className="flex justify-center items-center h-[88vh]">
              <div className="flex justify-center items-center h-[88vh]">
                <div className="text-[20px] font-bold text-green-500">
                  <span>{typewriter2}</span>
                  <Cursor cursorColor="#ff9292" />
                  <p className="mt-4 text-accent animate__animated animate__pulse animate__infinite animate__slow">
                    A diverse library of English ebooks including literature,
                    self-development, academic resources, novels, and modern
                    writings. Ideal for readers looking to learn, explore, and
                    enjoy global English literature.
                  </p>
                </div>
              </div>
            </div>

            {/* image area */}
            <div className="flex justify-center items-center h-[88vh] animate__animated animate__pulse animate__infinite animate__slower">
              <Image
                src="/images/slide2.png"
                alt="slider 1"
                width={200}
                height={200}
              />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="grid grid-cols-2 mx-20">
            {/* content area */}
            <div className="flex justify-center items-center h-[88vh]">
              <div className="text-[20px] font-bold text-green-500">
                <span>{typewriter3}</span>
                <Cursor cursorColor="#ff9292" />
                <p className="mt-4 text-accent animate__animated animate__pulse animate__infinite animate__slow">
                  A wide range of Bangla books from classic literature to
                  contemporary writings, religious texts, academic resources,
                  and novels. Explore the richness of Bangla language and
                  culture through curated ebooks.
                </p>
              </div>
            </div>

            {/* image area */}
            <div className="flex justify-center items-center h-[88vh] animate__animated animate__pulse animate__infinite animate__slower">
              <Image
                src="/images/slide3.png"
                alt="slider 1"
                width={200}
                height={200}
              />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </MyContainer>
  );
}
