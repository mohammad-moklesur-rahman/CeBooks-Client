import blogs from "@/data/blogs";
import Image from "next/image";

export default async function Blogs() {
  return (
    <div className="bg-base-200 py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10 text-primary">
          Latest Blog Posts
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div key={blog.id} className="card bg-base-100 shadow-xl">
              <figure>
                <Image
                  src={blog.image}
                  alt={blog.title}
                  width={500}
                  height={300}
                  className="h-48 w-full object-cover"
                />
              </figure>

              <div className="card-body">
                <h3 className="card-title text-lg">{blog.title}</h3>

                <p className="text-sm text-gray-600">
                  {blog.description.substring(0, 100)}...
                </p>

                <div className="flex justify-between items-center mt-4">
                  <span className="text-sm text-primary">{blog.date}</span>
                  <button className="btn btn-outline btn-sm btn-primary">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
