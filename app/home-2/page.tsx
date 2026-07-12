import Navbar from "@/components/Navbar";
import HeroV2 from "@/components/v2/HeroV2";
import AboutSplitV2 from "@/components/v2/AboutSplitV2";
import WhatWeDoListV2 from "@/components/v2/WhatWeDoListV2";
import StoryBannerV2 from "@/components/v2/StoryBannerV2";
import ImpactTrackingV2 from "@/components/v2/ImpactTrackingV2";
import ProgramCardsV2 from "@/components/v2/ProgramCardsV2";
import StatsHighlightV2 from "@/components/v2/StatsHighlightV2";
import DonateCtaDarkV2 from "@/components/v2/DonateCtaDarkV2";
import FaqSplitV2 from "@/components/v2/FaqSplitV2";
import Footer from "@/components/Footer/Footer";

const programsA = [
  {
    image: "/images/gallery/gallery-3.jpg",
    title: "Disability Support & Empowerment",
    text: "Advocacy, rehabilitation, assistive devices, and community-based inclusion programs for children and adults.",
  },
  {
    image: "/images/gallery/gallery-4.jpg",
    title: "Education & Skills Development",
    text: "Helping children stay in school and equipping young people and adults with vocational and digital skills.",
  },
  {
    image: "/images/gallery/gallery-6.jpg",
    title: "Healthcare & Mobility Assistance",
    text: "Wheelchairs, white canes, hearing aids, therapy support, and medical outreach.",
  },
];

const programsB = [
  {
    image: "/images/gallery/gallery-2.jpg",
    title: "Wheelchair & Mobility Aid Distribution",
    text: "Restoring freedom of movement to people who have gone years without adequate mobility support.",
  },
  {
    image: "/images/gallery/gallery-1.jpg",
    title: "Vocational Skills Training",
    text: "Practical training that helps beneficiaries build sustainable livelihoods and independence.",
  },
  {
    image: "/images/gallery/gallery-5.jpg",
    title: "Children's Home Care",
    text: "Shelter, nurturing, and development for vulnerable children with disabilities.",
  },
];

export default function HomeV2() {
  return (
    <>
      <Navbar />
      <HeroV2 />
      <AboutSplitV2 />
      <WhatWeDoListV2 />
      <StoryBannerV2 />
      <ImpactTrackingV2 />
      <ProgramCardsV2
        eyebrow="Our Programs"
        heading="Dedicated to Meaningful & Lasting Change"
        buttonLabel="Contact Us"
        buttonHref="/contact"
        cards={programsA}
      />
      <StatsHighlightV2 />
      <ProgramCardsV2
        eyebrow="Get Involved"
        heading="Join Us in Creating Change That Matters"
        buttonLabel="Get Involved"
        buttonHref="/get-involved"
        cards={programsB}
        dark
      />
      <DonateCtaDarkV2 />
      <FaqSplitV2 />
      <Footer />
    </>
  );
}
