export const metadata = {
 title: "Vegas Clinic",
 description:
  "Reveal your inner radiance at our aesthetics med spa. Personalized treatments blending advanced techniques for transformative beauty and well-being.",
};

import FeaturesBlocks from "@/components/features-blocks";
import Hero from "@/components/hero";
import Newsletter from "@/components/newsletter";
import Testimonials from "@/components/testimonials";

export default function Home() {
 return (
  <>
   <Hero />
   <FeaturesBlocks />
   <Testimonials />
   <Newsletter />
  </>
 );
}
