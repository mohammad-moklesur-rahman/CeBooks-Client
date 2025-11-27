"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function ViewModal({ id }) {
  const modalRef = useRef(null);
  const [eBookInfo, setEBookInfo] = useState(null);

  // Fetch data on client side
  useEffect(() => {
    async function getEBookById() {
      const res = await fetch(`https://cebooks.vercel.app/api/ebooks/${id}`, {
        cache: "no-store",
      });
      const data = await res.json();
      setEBookInfo(data);
    }

    getEBookById();
  }, [id]);

  const openModal = () => {
    if (modalRef.current) modalRef.current.showModal();
  };

  const closeModal = () => {
    if (modalRef.current) modalRef.current.close();
  };

  const {
    name,
    thumbnail,
    category,
    subCategory,
    author,
    publisher,
    date,
    email,
    location,
    price,
    description,
  } = eBookInfo || {};

  return (
    <>
      {/* Open Button */}
      <button className="btn btn-sm bg-accent mr-2" onClick={openModal}>
        View
      </button>

      {/* Modal */}
      <dialog ref={modalRef} className="modal modal-bottom sm:modal-middle">
        <div className="modal-box bg-gray-400 p-6 rounded-2xl shadow-xl">
          <div className="pb-10">
            <div className="px-2 lg:px-0">
              <h2
                data-aos="fade-right"
                className="text-2xl text-green-500 font-bold py-10"
              >
                {name}
              </h2>
              <div data-aos="fade-up">
                <figure>
                  <Image
                    src={thumbnail}
                    width={200}
                    height={250}
                    alt="category"
                    unoptimized
                    className="w-full h-70 md:h-100"
                  />
                </figure>
                <p className="text-gray-800 mt-6">
                  <span className="font-semibold">Category:</span> {category} |{" "}
                  {subCategory}
                </p>
                <p className="text-gray-800 my-2">
                  <span className="font-semibold">Author:</span> {author}
                </p>
                <p className="text-gray-800 my-2">
                  <span className="font-semibold">Publisher:</span> {publisher}
                </p>
                <p className="text-gray-800 my-2">
                  <span className="font-semibold">Published Date:</span> {date}
                </p>
                <p className="text-gray-800 my-2">
                  <span className="font-semibold">Owner’s Email:</span> {email}
                </p>
                <p className="text-gray-800">
                  <span className="font-semibold">Location:</span> {location}
                </p>
                <p className="text-gray-800 my-2">
                  <span className="font-semibold">Price:</span> ${price}
                </p>
                <p className="text-gray-800 mt-6 font-semibold">Description</p>
                <p className="text-gray-800 text-justify pt-2">{description}</p>

                <button className="btn btn-outline text-yellow-500  hover:bg-gray-600 mt-4 px-8">
                  Buy eBook
                </button>
              </div>
            </div>
          </div>

          <div className="mt-4 flex justify-center">
            <button className="btn" onClick={closeModal}>
              Close
            </button>
          </div>
        </div>

        {/* Close on click outside */}
        <form method="dialog" className="modal-backdrop">
          <button>Close</button>
        </form>
      </dialog>
    </>
  );
}
