"use client";

import { useUser } from "@clerk/nextjs";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

export default function EbookForm() {
  const { user } = useUser();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    Swal.fire({
      title: "Do you want to save the eBook?",
      text: "This eBook will be saved.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, save it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const formData = new FormData();
          for (const key in data) {
            if (data[key] instanceof FileList) {
              formData.append(key, data[key][0]);
            } else {
              formData.append(key, data[key]);
            }
          }

          const res = await fetch("http://localhost:5000/api/ebooks", {
            method: "POST",
            body: formData,
          });

          const result = await res.json();

          Swal.fire("Saved!", "eBook has been saved.", "success");
          // 🔥 RESET THE FORM HERE
          reset();
        } catch {
          Swal.fire("Error!", "Failed to add eBook.", "error");
        }
      }
    });
  };

  return (
    <div className="bg-accent-content pb-20">
      <h2
        data-aos="fade-right"
        className="text-center text-2xl text-green-500 font-bold py-8"
      >
        Add new eBook.
      </h2>

      <div
        data-aos="fade-up"
        className="max-w-2xl mx-auto bg-primary-content p-8 rounded-2xl shadow-md"
      >
        <h2 className="text-[20px] text-accent font-semibold text-center mb-4">
          Add eBook
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* eBook Name */}
          <div className="form-control">
            <label className="label">
              <span className="label-text my-1">eBook Name</span>
            </label>
            <input
              {...register("name", { required: "Name is required" })}
              placeholder="Enter ebook name"
              className="input outline-primary focus:border-secondary w-full"
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </div>

          {/* Category */}
          <div className="form-control">
            <label className="label">
              <span className="label-text my-1">Category</span>
            </label>
            <select
              {...register("category")}
              className="select outline-primary focus:border-secondary border-0 w-full"
            >
              <option value="Islamic">Islamic Books</option>
              <option value="English">English Books</option>
              <option value="Bangla">Bangla Books</option>
            </select>
          </div>

          {/* Add SubCategory */}
          <div className="form-control">
            <label className="label">
              <span className="label-text my-1">Add SubCategory</span>
            </label>
            <input
              {...register("subCategory", {
                required: "SubCategory is required",
              })}
              placeholder="Ex: Self-Help, History, Science, DevOps etc."
              className="input outline-primary focus:border-secondary w-full"
            />
            {errors.subCategory && (
              <p className="text-red-500 text-sm">
                {errors.subCategory.message}
              </p>
            )}
          </div>

          {/* Price */}
          <div className="form-control">
            <label className="label">
              <span className="label-text my-1">Price</span>
            </label>
            <input
              type="number"
              min="0"
              placeholder="Enter price"
              {...register("price", {
                required: "Price is required",
              })}
              className="input outline-primary focus:border-secondary w-full"
            />
            {errors.price && (
              <p className="text-red-500 text-sm">{errors.price.message}</p>
            )}
          </div>

          {/* eBook thumbnail */}
          <div className="form-control">
            <label className="label">
              <span className="label-text my-1">eBook Thumbnail</span>
            </label>
            <input
              type="file"
              {...register("thumbnail")}
              className="file-input outline-primary focus:border-secondary w-full"
            />
          </div>

          {/* Upload pdf */}
          <div className="form-control">
            <label className="label">
              <span className="label-text my-1">Upload eBook (PDF)</span>
            </label>
            <input
              type="file"
              accept="application/pdf"
              {...register("pdf", {
                required: "PDF file is required",
                validate: {
                  isPdf: (value) => {
                    const file = value[0];
                    if (!file) return "Please select a file";
                    return (
                      file.type === "application/pdf" ||
                      "Only PDF files are allowed"
                    );
                  },
                },
              })}
              className="file-input outline-primary focus:border-secondary w-full"
            />
          </div>

          {/* Description */}
          <div className="form-control">
            <label className="label">
              <span className="label-text my-1">Description</span>
            </label>
            <textarea
              {...register("description", {
                required: "Description is required",
              })}
              placeholder="Write short description..."
              className="textarea outline-primary focus:border-secondary w-full"
              rows="3"
            />
            {errors.description && (
              <p className="text-red-500 text-sm">
                {errors.description.message}
              </p>
            )}
          </div>

          {/* Author Name */}
          <div className="form-control">
            <label className="label">
              <span className="label-text my-1">Author Name</span>
            </label>
            <input
              {...register("author", { required: "Name is required" })}
              placeholder="Enter Author Name"
              className="input outline-primary focus:border-secondary w-full"
            />
            {errors.author && (
              <p className="text-red-500 text-sm">{errors.author.message}</p>
            )}
          </div>

          {/* Publisher Name */}
          <div className="form-control">
            <label className="label">
              <span className="label-text my-1">Publisher Name</span>
            </label>
            <input
              {...register("publisher", { required: "Name is required" })}
              placeholder="Enter Publisher Name"
              className="input outline-primary focus:border-secondary w-full"
            />
            {errors.publisher && (
              <p className="text-red-500 text-sm">{errors.publisher.message}</p>
            )}
          </div>

          {/* Location */}
          <div className="form-control">
            <label className="label">
              <span className="label-text my-1">Location</span>
            </label>
            <input
              {...register("location", { required: "Location is required" })}
              placeholder="Enter location"
              className="input outline-primary focus:border-secondary w-full"
            />
            {errors.location && (
              <p className="text-red-500 text-sm">{errors.location.message}</p>
            )}
          </div>

          {/* Published Date */}
          <div className="form-control">
            <label className="label">
              <span className="label-text my-1">Pick-Up Published Date</span>
            </label>
            <input
              type="date"
              {...register("date", { required: "Date is required" })}
              className="input outline-primary focus:border-secondary w-full"
            />
            {errors.date && (
              <p className="text-red-500 text-sm">{errors.date.message}</p>
            )}
          </div>

          {/* Email (readonly) */}
          <div className="form-control">
            <label className="label">
              <span className="label-text my-1">Email</span>
            </label>
            <input
              type="email"
              {...register("email")}
              value={user?.primaryEmailAddress.emailAddress}
              readOnly
              className="input outline-primary focus:border-secondary w-full bg-gray-100 cursor-not-allowed"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="btn bg-secondary text-green-500 w-full mt-2"
          >
            Add eBook
          </button>
        </form>
      </div>
    </div>
  );
}
