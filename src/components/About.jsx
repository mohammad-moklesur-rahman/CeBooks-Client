"use client";

import Image from "next/image";
import CountUp from "../components/CountUp";
import MyContainer from "./MyContainer";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AboutPage() {
  // Fixes mobile scroll-jump issue
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 800,
      easing: "ease-out-cubic",
      offset: 10,
    });
  }, []);

  return (
    <div className="bg-green-100 text-accent-content">
      {/* HERO SECTION */}
      <div className="py-10 bg-gradient-to-r from-gray-500 to-purple-950 text-accent-content">
        <MyContainer>
          <div className="flex flex-col md:flex-row lg:flex-row-reverse gap-8">
            <div className="flex justify-center min-h-[300px] items-center">
              <Image
                src="/images/about-cover.jpg"
                alt="About CeBooks"
                width={280}
                height={280}
                priority
                data-aos="zoom-in"
                className="rounded-xl shadow-2xl border-4 border-accent"
              />
            </div>

            <div data-aos="fade-right" className="px-4 md:px-0 mt-2">
              <h1 className="text-4xl lg:text-5xl font-bold text-accent-content">
                About <span className="text-secondary">CeBooks</span>
              </h1>
              <p className="py-6 text-lg leading-relaxed text-primary-content">
                CeBooks is a modern digital library platform providing easy
                access to Islamic, Bangla, and English eBooks for readers
                worldwide.
              </p>
              <button className="btn bg-primary-content text-accent-content border-none hover:bg-secondary/80">
                Explore eBooks
              </button>
            </div>
          </div>
        </MyContainer>
      </div>

      {/* MISSION SECTION */}
      <section className="py-16">
        <div className="container mx-auto px-4" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-center mb-10 text-secondary">
            Our Mission
          </h2>
          <p className="text-lg text-center leading-relaxed text-secondary-content">
            At CeBooks, our mission is to build the largest digital collection
            of valuable eBooks and empower millions of readers with authentic
            content.
          </p>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-16 bg-base-100">
        <div className="container mx-auto px-4">
          <h2
            className="text-3xl font-bold text-center mb-12 text-secondary"
            data-aos="fade-up"
          >
            Why Choose CeBooks?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div
              className="card bg-primary shadow-xl p-6 border border-secondary"
              data-aos="zoom-in"
            >
              <h3 className="text-xl font-bold mb-3 text-accent-content">
                ✔ Huge Collection
              </h3>
              <p className="text-secondary-content">
                Access eBooks from Islamic, Bangla, and English categories.
              </p>
            </div>

            <div
              className="card bg-primary shadow-xl p-6 border border-secondary"
              data-aos="zoom-in"
              data-aos-delay="150"
            >
              <h3 className="text-xl font-bold mb-3 text-accent-content">
                ✔ Easy Navigation
              </h3>
              <p className="text-secondary-content">
                User-friendly design with fast search and filters.
              </p>
            </div>

            <div
              className="card bg-primary shadow-xl p-6 border border-secondary"
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              <h3 className="text-xl font-bold mb-3 text-accent-content">
                ✔ Free & Premium Options
              </h3>
              <p className="text-secondary-content">
                Enjoy both free and premium high-quality eBooks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DYNAMIC COUNTERS */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="shadow py-8 grid grid-cols-1 sm:grid-cols-3 bg-primary-content text-accent-content">
            <div className="place-items-center" data-aos="fade-up">
              <div className="text-secondary-content">Total eBooks</div>
              <div className="text-secondary text-4xl">
                <CountUp end={1200} />+
              </div>
            </div>

            <div
              className="place-items-center py-4"
              data-aos="fade-up"
              data-aos-delay="150"
            >
              <div className="text-secondary-content">Active Readers</div>
              <div className="text-accent text-4xl">
                <CountUp end={50000} />+
              </div>
            </div>

            <div
              className="place-items-center"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="text-secondary-content">Authors</div>
              <div className="text-primary text-4xl">
                <CountUp end={350} />+
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOUNDER SECTION */}
      <section className="py-16 bg-base-100">
        <div className="container mx-auto px-4">
          <h2
            className="text-3xl font-bold text-center mb-12 text-secondary"
            data-aos="fade-up"
          >
            Meet Our Founder
          </h2>

          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="min-h-[250px] flex items-center">
              <Image
                src="/images/founder.jpg"
                alt="Founder"
                width={250}
                height={250}
                priority
                className="rounded-full shadow-lg border-4 border-accent"
                data-aos="zoom-in"
              />
            </div>

            <div data-aos="fade-left">
              <h3 className="text-2xl font-bold mb-3 text-accent-content">
                Mohammad Moklesur Rahman
              </h3>
              <p className="text-secondary-content leading-relaxed">
                Passionate about technology, education and digital reading, he
                founded CeBooks to make knowledge accessible for everyone.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
