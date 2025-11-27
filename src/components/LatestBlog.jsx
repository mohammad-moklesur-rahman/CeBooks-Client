import blogs from "@/data/blogs";
import Image from "next/image";
import MyContainer from "./MyContainer";

export default async function LatestBlogs() {
  return (
    <div className="bg-base-300 pb-20 pt-10">
      <MyContainer>
        <h2
          data-aos="fade-right"
          className="text-center text-2xl text-green-500 font-bold mb-10"
        >
          Latest Blog
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-0">
          {blogs.slice(0, 3).map((blog) => (
            <div
              data-aos="fade-up"
              key={blog.id}
              className="card bg-accent-content shadow-xl"
            >
              <figure>
                <Image
                  src={blog.photo}
                  alt={blog.subcategory}
                  width={500}
                  height={500}
                  unoptimized
                  className="h-48 w-full object-cover"
                />
              </figure>

              <div className="card-body">
                <h3 className="card-title text-green-500 text-lg">{blog.title}</h3>

                <p className="text-sm text-base-100">
                  {blog.description.substring(0, 100)}...
                </p>

                <div className="flex justify-between items-center mt-4">
                  <span className="text-sm text-primary">{blog.date}</span>
                  <button className="btn btn-outline text-yellow-500 btn-sm hover:bg-gray-600">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </MyContainer>
    </div>
  );
}
