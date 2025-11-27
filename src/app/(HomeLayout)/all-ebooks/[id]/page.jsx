import MyContainer from "@/components/MyContainer";
import Image from "next/image";

const eBooksDetails = async ({ params }) => {
  const { id } = await params;

  async function getEBookById() {
    const res = await fetch(`https://cebooks.vercel.app/api/ebooks/${id}`, {
      cache: "no-store",
    });
    return res.json();
  }

  const eBookInfo = await getEBookById();

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
    <div className="bg-accent lg:bg-base-200">
      <MyContainer>
        <div className="bg-secondary grid lg:grid-cols-12 gap-12 lg:pl-6">
          {/* left area for details */}
          <div className="md:col-span-8 pb-20">
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

          {/* Right Aside */}
          <aside className="hidden lg:block bg-accent-content col-span-4 pb-20 px-8">
            <h2
              data-aos="fade-left"
              className="text-center text-2xl text-green-500 font-bold py-10"
            >
              Latest listing Blog
            </h2>
            <div data-aos="fade-up" className="grid gap-8">
              <h2>Blog, Advertisement etc</h2>
            </div>
          </aside>
        </div>
      </MyContainer>
    </div>
  );
};

export default eBooksDetails;
