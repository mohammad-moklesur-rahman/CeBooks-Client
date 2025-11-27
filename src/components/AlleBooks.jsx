"use client";

import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import MyContainer from "./MyContainer";
import Link from "next/link";

const AlleBooks = () => {
  const [data, setData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [loadingSearch, setLoadingSearch] = useState(false);

  const router = useRouter();
  const searchTimeout = useRef(null);

  // Fetch eBooks
  async function getAlleBooks() {
    const res = await fetch("http://localhost:5000/api/ebooks", {
      cache: "no-store",
    });
    return await res.json();
  }

  // FIXED: Async loading
  useEffect(() => {
    async function loadBooks() {
      const latestData = await getAlleBooks();
      setData(latestData);
    }
    loadBooks();
  }, []);

  // Category list
  const categories = ["All", ...new Set(data.map((p) => p.category))];

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    setLoadingSearch(true);

    if (searchTimeout.current) clearTimeout(searchTimeout.current);

    searchTimeout.current = setTimeout(() => {
      setLoadingSearch(false);
    }, 500);
  };

  // Filter client-side
  const filteredData = data.filter((product) => {
    const matchCategory =
      selectedCategory === "All" ? true : product.category === selectedCategory;

    const matchSearch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    return matchCategory && matchSearch;
  });

  return (
    <div className="bg-base-300 pb-20">
      <MyContainer>
        <h2
          data-aos="fade-right"
          className="text-center text-2xl text-green-500 font-bold py-10"
        >
          All available listing eBooks
        </h2>

        <div>
          {/* Filters */}
          <div className="mb-16 mt-7 flex flex-col lg:flex-row justify-between items-center gap-4">
            {/* Category Filter */}
            <div className="flex items-center gap-2">
              <span className="hidden md:block text-[18px] font-extrabold text-green-500">
                Filter by category:
              </span>

              <div className="relative w-42 sm:w-64">
                <select
                  value={selectedCategory}
                  onChange={handleCategoryChange}
                  className="appearance-none w-full bg-secondary-content border-0 rounded-lg py-3 px-4 pr-10 text-primary focus:outline-none"
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Search */}
            <div className="flex items-center mt-8 lg:mt-0 gap-2">
              <span className="hidden md:block text-[18px] font-extrabold text-green-500">
                Search:
              </span>
              <input
                type="text"
                value={searchTerm}
                onChange={handleSearchChange}
                placeholder="Search by name..."
                className="input w-64 bg-secondary-content border-0 rounded-lg py-3 px-4"
              />
            </div>
          </div>

          {/* Searching... */}
          {loadingSearch ? (
            <div className="text-center py-20 animate-pulse text-accent font-semibold">
              Searching...
            </div>
          ) : filteredData.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredData.map((Info) => (
                <div
                  data-aos="fade-up"
                  key={Info._id}
                  className="hover:scale-105 cursor-pointer transition-transform duration-200"
                >
                  <div className="card bg-accent-content h-full shadow-sm">
                    <figure className="px-4 pt-4">
                      <Image
                        src={Info.thumbnailUrl}
                        width={500}
                        height={500}
                        unoptimized
                        alt={Info.category}
                        className="rounded-xl h-50 w-full"
                      />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title text-green-500">{Info.name}</h2>
                      <p className="text-base-100">
                        <span className="font-semibold">Category:</span>{" "}
                        {`${Info.category} | ${Info.subCategory}`}
                      </p>
                      <p className="text-base-100">
                        <span className="font-semibold ">Location:</span>{" "}
                        {Info.location}
                      </p>
                      <p className="text-base-100">
                        <span className="font-semibold">Price:</span> $
                        {Info.price}
                      </p>
                      <div className="card-actions">
                        <Link
                          href={`/all-ebooks/${Info._id}`}
                          className="btn btn-outline text-yellow-500 mt-2 hover:bg-gray-600 w-full"
                        >
                          See Details
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center py-10 text-gray-500">No eBooks found.</p>
          )}
        </div>
      </MyContainer>
    </div>
  );
};

export default AlleBooks;
