import ContentSwiper from "@/components/ContenSwiper";
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
    </>
  );
}
