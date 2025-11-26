"use client";

import Image from "next/image";
import Marquee from "react-fast-marquee";

const authors = [
  {
    name: "Humayun Ahmed",
    photo: "/authors/humayun-ahmed.jpg",
    description:
      "Legendary Bangladeshi novelist and filmmaker. Creator of Himu and Misir Ali.",
    books: "120+ Books",
  },
  {
    name: "Muhammed Zafar Iqbal",
    photo: "/authors/zafar-iqbal.jpg",
    description:
      "Popular science-fiction writer and academic. Known for inspiring millions of young readers.",
    books: "90+ Books",
  },
  {
    name: "William Shakespeare",
    photo: "/authors/shakespeare.jpg",
    description:
      "Greatest English playwright and poet. His works shaped Western literature.",
    books: "40+ Plays & Books",
  },
  {
    name: "Ibn Kathir",
    photo: "/authors/ibn-kathir.jpg",
    description:
      "Islamic historian and scholar, most famous for Tafsir Ibn Kathir.",
    books: "30+ Islamic Books",
  },
  {
    name: "Agatha Christie",
    photo: "/authors/agatha-christie.jpg",
    description:
      "World’s best-selling mystery writer. Creator of Hercule Poirot.",
    books: "85+ Books",
  },
];

export default function AuthorsSection() {
  return (
    <section className="py-16 bg-base-200">
      <h2 className="text-3xl font-bold text-center text-primary mb-8">
        Featured Authors
      </h2>

      <Marquee pauseOnHover speed={50} gradient={false}>
        <div className="flex gap-10 px-4">
          {authors.map((author, index) => (
            <div
              key={index}
              className="card w-72 bg-base-100 shadow-xl border border-base-300"
            >
              <figure>
                <Image
                  src={author.photo}
                  alt={author.name}
                  width={50}
                  height={50}
                  className="h-48 w-full object-cover"
                />
              </figure>

              <div className="card-body">
                <h3 className="text-lg font-bold">{author.name}</h3>
                <p className="text-sm opacity-80">{author.description}</p>

                <div className="mt-3">
                  <p className="font-semibold">{author.books}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Marquee>
    </section>
  );
}
