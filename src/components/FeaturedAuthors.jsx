"use client";

import Image from "next/image";
import Marquee from "react-fast-marquee";

const authors = [
  {
    name: "Humayun Ahmed",
    photo:
      "https://i.postimg.cc/8CdzgBwg/Cover-Image-Rising-BD-Humayun-Ahmed.jpg",
    description:
      "Legendary Bangladeshi novelist and filmmaker. Creator of Himu and Misir Ali.",
    books: "120+ Books",
  },
  {
    name: "Muhammed Zafar Iqbal",
    photo: "https://i.postimg.cc/zB6zntGf/images.jpg",
    description:
      "Popular science-fiction writer and academic. Known for inspiring millions of young readers.",
    books: "90+ Books",
  },
  {
    name: "William Shakespeare",
    photo: "https://i.postimg.cc/sXhdRV3v/Shakespeare-William-banner.webp",
    description:
      "Greatest English playwright and poet. His works shaped Western literature.",
    books: "40+ Plays & Books",
  },
  {
    name: "Ibn Kathir",
    photo: "https://i.postimg.cc/dt7dPpyz/images-(1).jpg",
    description:
      "Islamic historian and scholar, most famous for Tafsir Ibn Kathir.",
    books: "30+ Islamic Books",
  },
  {
    name: "Agatha Christie",
    photo: "https://i.postimg.cc/dV2hJYt2/christie-english-writer.avif",
    description:
      "World’s best-selling mystery writer. Creator of Hercule Poirot.",
    books: "85+ Books",
  },
];

export default function AuthorsSection() {
  return (
    <section className="bg-primary-content pb-20 pt-10">
      <h2
        data-aos="fade-right"
        className="text-center text-2xl text-green-500 font-bold mb-10"
      >
        Featured Authors
      </h2>

      <Marquee pauseOnHover speed={50} gradient={false}>
        <div data-aos="fade-up" className="flex gap-10 px-4">
          {authors.map((author, index) => (
            <div
              key={index}
              className="card w-120 h-96 rounded-full bg-accent-content border-3 border-green-500"
            >
              <figure>
                <Image
                  src={author.photo}
                  alt={author.name}
                  width={500}
                  height={500}
                  unoptimized
                  className="h-75 w-full object-cover"
                />
              </figure>

              <div className="px-8 mt-4 text-center w-full h-full">
                <h3 className="text-green-500 text-[20px] font-bold">{author.name}</h3>
                <p className="text-base-100 my-2">{author.description}</p>
                <p className="text-yellow-500 font-semibold">{author.books}</p>
              </div>
            </div>
          ))}
        </div>
      </Marquee>
    </section>
  );
}
