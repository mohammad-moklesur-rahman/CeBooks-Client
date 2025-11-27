"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import MyContainer from "./MyContainer";
import { useUser } from "@clerk/nextjs";

const ManageEBookTable = () => {
  const { user } = useUser();
  const [myProducts, setMyProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch data on client
  const loadData = async () => {
    try {
      const res = await fetch(
        `http://localhost:5000/api/ebooks/my-ebooks?email=${user?.primaryEmailAddress.emailAddress}`
      );
      const result = await res.json();
      setMyProducts(result);
    } catch (err) {
      console.error(err);
      alert("Failed to fetch data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleDelete = async (id) => {
    try {
      await fetch(`http://localhost:5000/api/ebooks/${id}`, {
        method: "DELETE",
      });
      alert("Deleted successfully!");
      loadData(); // reload data
    } catch (err) {
      alert("Delete failed");
    }
  };
  console.log(myProducts);
  if (loading) return <p className="text-center py-10">Loading...</p>;

  return (
    <div className="bg-secondary px-2 pb-20 pt-10">
      <h2 className="text-center text-2xl text-accent font-bold pb-10">
        My Listings
      </h2>

      <MyContainer>
        <div className="bg-primary-content">
          <div className="overflow-x-auto">
            <table className="table w-full border border-primary shadow-lg rounded-lg">
              <thead className="bg-primary text-accent uppercase">
                <tr>
                  <th>#</th>
                  <th>Item</th>
                  <th>Category</th>
                  <th>Price</th>
                  <th>Location</th>
                  <th>Date</th>
                  <th>Actions</th>
                </tr>
              </thead>

              <tbody>
                {myProducts.length > 0 ? (
                  myProducts.map((p, index) => (
                    <tr key={p._id}>
                      <th>{index + 1}</th>
                      <td className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle h-12 w-12">
                            <Image
                              src={p.thumbnailUrl}
                              alt={p.name}
                              width={48}
                              height={48}
                              unoptimized
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-semibold">{p.name}</div>
                          <div className="text-xs text-gray-400">{p.email}</div>
                        </div>
                      </td>
                      <td>{p.category}</td>
                      <td>${p.price}</td>
                      <td>{p.location}</td>
                      <td>{p.date}</td>
                      <td>
                        <button className="btn btn-sm bg-accent mr-2">
                          View
                        </button>
                        <button
                          className="btn btn-sm btn-error"
                          onClick={() => handleDelete(p._id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={7} className="text-center py-4">
                      No products found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </MyContainer>
    </div>
  );
};

export default ManageEBookTable;
