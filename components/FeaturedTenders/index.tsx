import SectionTitle from "../Common/SectionTitle";
import SingleTender from "./SingleTender";

const testimonialData = [
  {
    id: 1,
    name: "Musharof Chy",
    designation: "Founder @TailGrids",
    content:
      "Our members are so impressed. It's intuitive. It's clean. It's distraction free. If you're building a community.",
    image: "/images/testimonials/auth-01.png",
    star: 5,
  },
  {
    id: 2,
    name: "Devid Weilium",
    designation: "Founder @UIdeck",
    content:
      "Our members are so impressed. It's intuitive. It's clean. It's distraction free. If you're building a community.",
    image: "/images/testimonials/auth-02.png",
    star: 5,
  },
];

const FeaturedTenders = () => {
  return (
    <>
      <section id="features" className="py-3 md:py-4 lg:py-6 bg-gray-light dark:bg-black-dark">
        <div className="container">
          <SectionTitle
            title="Featured Tenders"
            paragraph="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
            center
          />
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-2">
            {testimonialData.map((testimonial) => (
              <SingleTender key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>

        </div>
      </section>
    </>
  );
};

export default FeaturedTenders;
