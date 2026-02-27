import { useOutletContext } from "react-router-dom";
import type { Lang } from "@/layouts/MainLayout";
import HeroSection from "./sections/home/HeroSection";
import AboutSection from "./sections/about/AboutSection";
import JourneySection from "./sections/journey/JourneySection";
import ContributionsSection from "./sections/contributions/ContributionsSection";
import AchievementsSection from "./sections/achievements/AchievementsSection";
import LeadershipSection from "./sections/leadership/LeadershipSection";
import GallerySection from "./sections/gallery/GallerySection";
import ContactSection from "../contact/ContactSection";
import AudioVideoSection from "./sections/AudioVideo/AudioVideoSection";
import Partners from "./sections/Partners/Partners";
import SarthakKarmi from "./sections/SarthakKarmi/SarthakKarmi";
import FocusAndImpact from "./sections/FocusAndImpact/FocusAndImpact";
import AwardsAndCTA from "./sections/AwardsAndCTA/AwardsAndCTA";
import BhopalModel from "./sections/home/BhopalModel";

const HomePage = () => {
  const { lang } = useOutletContext<{ lang: Lang }>();

  return (
    <>
      <section id="home">
        <HeroSection lang={lang} />
      </section>
      <AboutSection lang={lang} />
      <FocusAndImpact lang={lang} />
      <BhopalModel  lang={lang}/>
      <Partners  lang={lang} />
      <SarthakKarmi lang={lang} />
      <AwardsAndCTA lang={lang} />
      
    </>
  );
};

export default HomePage;
