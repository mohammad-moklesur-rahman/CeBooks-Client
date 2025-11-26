"use client";

import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import MyContainer from "./MyContainer";

const AlleBooks = () => {
  const [data, setData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [loadingSearch, setLoadingSearch] = useState(false);

  const router = useRouter();
  const searchTimeout = useRef(null);

  // Fetch products
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
    <MyContainer>
      <h2 className="text-center text-2xl text-accent font-bold pt-12 mb-10">
        All available listing products
      </h2>

      <div>
        {/* Filters */}
        <div className="mb-16 mt-7 flex flex-col lg:flex-row justify-between items-center gap-4">
          {/* Category Filter */}
          <div className="flex items-center gap-2">
            <span className="hidden md:block text-[18px] font-extrabold text-accent">
              Filter by category:
            </span>

            <div className="relative w-42 sm:w-64">
              <select
                value={selectedCategory}
                onChange={handleCategoryChange}
                className="appearance-none w-full bg-primary-content border-0 rounded-lg py-3 px-4 pr-10 text-primary focus:outline-none"
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
            <span className="hidden md:block text-[18px] font-extrabold text-accent">
              Search:
            </span>
            <input
              type="text"
              value={searchTerm}
              onChange={handleSearchChange}
              placeholder="Search by name..."
              className="input w-64 bg-primary-content border-0 rounded-lg py-3 px-4"
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
            {filteredData.map((productInfo) => (
              <div
                key={productInfo._id}
                className="hover:scale-105 transition-transform"
              >
                <div className="card bg-primary h-full shadow-sm">
                  <figure className="px-4 pt-4">
                    <Image
                      src={productInfo.image}
                      width={500}
                      height={400}
                      alt={productInfo.category}
                      className="rounded-xl w-full h-60 object-cover"
                    />
                  </figure>

                  <div className="card-body">
                    <h2 className="card-title text-accent">
                      {productInfo.name}
                    </h2>
                    <p>
                      <b>Category:</b> {productInfo.category}
                    </p>
                    <p>
                      <b>Location:</b> {productInfo.location}
                    </p>
                    <p>
                      <b>Price:</b> ${productInfo.price}
                    </p>

                    <button
                      onClick={() =>
                        router.push(`/listing-details/${productInfo._id}`)
                      }
                      className="btn bg-secondary text-green-500 hover:bg-accent w-full"
                    >
                      See Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center py-10 text-gray-500">No products found.</p>
        )}
      </div>
    </MyContainer>
  );
};

export default AlleBooks;
