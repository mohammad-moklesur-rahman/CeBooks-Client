import Image from "next/image";
import MyContainer from "./MyContainer";
import Link from "next/link";

async function getLatestData() {
  const res = await fetch(
    "https://cebooks.vercel.app/api/ebooks/latest-ebooks",
    {
      cache: "no-store",
    }
  );
  return res.json();
}

const LatestAdditions = async () => {
  const latestData = await getLatestData();
  return (
    <div className="bg-base-300 pb-20">
      <MyContainer>
        <h2
          data-aos="fade-right"
          className="text-center text-2xl text-green-500 font-bold py-10"
        >
          Latest Additions
        </h2>
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-0">
            {latestData.map((Info) => (
              <div
                data-aos="fade-up"
                key={Info._id}
                className="hover:scale-105 cursor-pointer transition-transform duration-200"
              >
                <div className="card bg-accent-content h-full shadow-sm">
                  <figure className="px-4 pt-4">
                    <Image
                      src={Info.thumbnail}
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
        </div>
      </MyContainer>
    </div>
  );
};

export default LatestAdditions;
