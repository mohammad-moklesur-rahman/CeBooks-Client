import MyContainer from "./MyContainer";

const categories = [
  {
    name: "Islamic Books",
    icon: "📖",
    description:
      "Explore a wide collection of Islamic books, including Quranic studies, Hadith collections, and inspirational writings to deepen your spiritual knowledge and understanding.",
  },
  {
    name: "English Books",
    icon: "📚",
    description:
      "Discover English books across genres like fiction, non-fiction, self-help, and academic resources that enhance reading skills, creativity, and knowledge.",
  },
  {
    name: "Bangla Books",
    icon: "📘",
    description:
      "Browse Bangla books featuring literature, poetry, novels, and educational materials that celebrate Bengali culture, language, and storytelling traditions.",
  },
];

const RecommendedBooks = () => {
  const handleCategoryClick = (categoryName) => {
    // Navigate to category page
    // router.push(`/category-filtered-product/${categoryName}`);
  };

  return (
    <div className="bg-primary-content py-20">
      <MyContainer>
        <div>
          <h2
            data-aos="fade-right"
            className="text-center text-2xl text-green-500 font-bold mb-10"
          >
            Recommended eBooks for You
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 h-96 gap-8 px-4">
            {categories.map((category) => (
              <div
                data-aos="fade-up"
                key={category.name}
                className="cursor-pointer bg-accent-content shadow-md rounded-2xl p-6 flex flex-col items-center justify-center hover:shadow-lg hover:scale-105 transition-transform duration-200"
              >
                <span className="text-5xl mb-3">{category.icon}</span>
                <h3 className="text-lg font-semibold text-green-500 text-center">
                  {category.name}
                </h3>
                <p className="text-justify text-base-100 mt-4">{category.description}</p>
              </div>
            ))}
          </div>
        </div>
      </MyContainer>
    </div>
  );
};

export default RecommendedBooks;
