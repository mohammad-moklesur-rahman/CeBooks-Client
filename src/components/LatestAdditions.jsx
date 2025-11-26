import Image from "next/image";
import MyContainer from "./MyContainer";

async function getLatestData() {
  const res = await fetch("http://localhost:5000/api/ebooks/latest-ebooks", {
    cache: "no-store",
  });
  return res.json();
}

const LatestAdditions = async () => {
  const latestData = await getLatestData();
  /* author
category
date
description
email
location
name
pdfUrl
price
publisher
subCategory
thumbnailUrl
_id
 */
  return (
    <div className="bg-base-300 pb-20">
      <MyContainer>
        <h2
          data-aos="fade-right"
          className="text-center text-2xl text-green-500 font-bold py-10"
        >
          Latest Additions
        </h2>
        <div data-aos="fade-up">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {latestData.map((Info) => (
              <div
                key={Info._id}
                className="hover:scale-105 cursor-pointer transition-transform duration-200"
              >
                <div className="card bg-accent-content h-full shadow-sm">
                  <figure className="px-4 pt-4">
                    <Image
                      src={Info.thumbnailUrl}
                      width={50}
                      height={50}
                      unoptimized
                      alt={Info.category}
                      className="rounded-xl h-50 w-full"
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title text-green-500">
                      {Info.name}
                    </h2>
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
                      <button className="btn myBtn w-full">
                        See Details
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </MyContainer>
    </div>
  );
};

export default LatestAdditions;
