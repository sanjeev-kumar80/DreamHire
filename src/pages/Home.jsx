import Hero from "../components/Hero";
import Categories from "../components/Categories";
import FeaturedInternships from "../components/FeaturedInternships";
import LatestJobs from "../components/LatestJobs";
import Companies from "../components/Companies";
import Stats from "../components/Stats";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import Newsletter from "../components/Newsletter";


function Home() {
  return (
    <>
      <Hero />
      <Categories />
      <FeaturedInternships />
      <LatestJobs />
      <Companies />
      <Testimonials />
      <FAQ />
      <Newsletter />


      <Stats />
    </>
  );
}

export default Home;

// function Home() {
//   return (
//     <div className="bg-red-500 h-screen flex items-center justify-center">
//       <h1 className="text-6xl text-white font-bold">
//         Tailwind Working
//       </h1>
//     </div>
//   );
// }

// export default Home;