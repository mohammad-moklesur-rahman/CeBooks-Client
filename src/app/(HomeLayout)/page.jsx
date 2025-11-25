import ContentSwiper from "@/components/ContenSwiper";
import FeaturedAuthors from "@/components/FeaturedAuthors";
import LatestAdditions from "@/components/LatestAdditions";
import LatestBlog from "@/components/LatestBlog";
import ReadingTips from "@/components/ReadingTips";
import RecommendedBooks from "@/components/RecommendedBooks";

export default function Home() {
  return (
    <>
      {/* Banner Section */}
      <section data-aos="fade-up" className="bg-accent-content">
        <ContentSwiper />
      </section>

      {/* Recommended eBooks*/}
      <section>
        <RecommendedBooks />
      </section>

      {/* Latest Additions*/}
      <section>
        <LatestAdditions />
      </section>

      {/* Reading Tips */}
      <section>
        <ReadingTips />
      </section>

      {/* Featured Authors */}
      <section>
        <FeaturedAuthors />
      </section>

      {/* Latest Blog */}
      <section>
        <LatestBlog />
      </section>
    </>
  );
}
