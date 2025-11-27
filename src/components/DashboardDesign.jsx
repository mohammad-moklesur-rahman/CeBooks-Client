"use client";

import { useUser } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import CountUp from "react-countup";

export default function DashboardDesign() {
  const [totalEbooks, setTotalEbooks] = useState(0);
  const [myEbooks, setMyEbooks] = useState(0);
  const [latest, setLatest] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useUser();

  useEffect(() => {
    async function loadDashboard() {
      try {
        const totalRes = await fetch("https://cebooks.vercel.app/api/ebooks");
        const totalData = await totalRes.json();

        const myRes = await fetch(
          `https://cebooks.vercel.app/api/ebooks/my-ebooks?email=${user?.primaryEmailAddress.emailAddress}`
        );
        const myData = await myRes.json();

        const latestRes = await fetch(
          "https://cebooks.vercel.app/api/ebooks/latest-ebooks"
        );
        const latestData = await latestRes.json();

        setTotalEbooks(totalData?.length || 0);
        setMyEbooks(myData?.length || 0);
        setLatest(latestData || []);
      } catch (e) {
        console.log("Dashboard fetch error", e);
      } finally {
        setLoading(false);
      }
    }

    loadDashboard();
  }, []);

  return (
    <div className="p-6 space-y-8">
      {/* HEADER */}
      <div className="flex flex-col sm:flex-row items-center justify-between">
        <h2 className="text-3xl font-bold text-green-500 mb-4 sm:mb-0">
          Dashboard Overview
        </h2>
        <Link href="/dashboard/addebook" className="btn btn-primary">
          + Upload New Ebook
        </Link>
      </div>

      {/* STATS CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Total Ebooks */}
        <div className="card bg-gradient-to-r from-indigo-600 to-blue-600 text-white shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Total Ebooks</h2>
            {loading ? (
              <span className="loading loading-ring loading-lg"></span>
            ) : (
              <p className="text-6xl font-bold">
                <CountUp end={totalEbooks} duration={2} />
              </p>
            )}
          </div>
        </div>

        {/* My Ebooks */}
        <div className="card bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-xl">
          <div className="card-body">
            <h2 className="card-title">My Ebooks</h2>
            {loading ? (
              <span className="loading loading-ring loading-lg"></span>
            ) : (
              <p className="text-6xl font-bold">
                <CountUp end={myEbooks} duration={2} />
              </p>
            )}
          </div>
        </div>

        {/* Latest Uploaded */}
        <div className="card bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Latest Uploads</h2>
            {loading ? (
              <span className="loading loading-ring loading-lg"></span>
            ) : (
              <p className="text-6xl font-bold">
                <CountUp end={latest?.length || 0} duration={2} />
              </p>
            )}
          </div>
        </div>
      </div>

      {/* LATEST EBOOKS TABLE */}
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title mb-4">Latest Added Ebooks</h2>

          {loading ? (
            <div className="flex justify-center py-10">
              <span className="loading loading-ring loading-lg"></span>
            </div>
          ) : latest.length === 0 ? (
            <p className="text-center text-gray-500 py-6">
              No recent ebooks found.
            </p>
          ) : (
            <div className="overflow-x-auto">
              <table className="table table-zebra w-full">
                <thead className="bg-base-300">
                  <tr>
                    <th>#</th>
                    <th>Cover</th>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Category</th>
                    <th>Date</th>
                  </tr>
                </thead>

                <tbody>
                  {latest.slice(0, 6).map((ebook, i) => (
                    <tr key={ebook._id}>
                      <td>{i + 1}</td>
                      <td>
                        <Image
                          src={ebook.thumbnail}
                          width={50}
                          height={50}
                          alt="cover"
                          unoptimized
                          className="w-14 h-16 object-cover rounded"
                        />
                      </td>
                      <td className="font-semibold">{ebook.name}</td>
                      <td>{ebook.author}</td>
                      <td>{ebook.subCategory}</td>
                      <td>{ebook.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
