import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "@/components/utils/ScrollToTop";
import MainLayout from "@/layouts/MainLayout";
import HomePage from "@/pages/home/HomePage";
import NotFound from "@/pages/NotFound";
import VisionMission from "@/pages/about/VisionMission";
import ContactSection from "@/pages/contact/ContactSection";
import SarthakKarmis from "@/pages/impact/SarthakKarmis";
import SuccessStories from "@/pages/impact/SuccessStories";
import Awards from "@/pages/Awards/Awards";
import Gallery from "@/pages/gallery/Gallery";
import Donate from "@/pages/donate/Donate";
import Partner from "@/pages/partner/Partner";
import About from "@/pages/about/About";
import Initiatives from "@/pages/initiatives/Initiatives";
import Impact from "@/pages/impact/Impact";
import OrganicPage from "@/pages/initiatives/OrganicPage";
import SocialPage from "@/pages/initiatives/SocialPage";
import AllAchievements from "@/pages/home/sections/AwardsAndCTA/AllAchievements";
import PlasticRecyclingPage from "@/pages/whatwedo/PlasticRecyclingPage";
import OrganicWastePage from "@/pages/whatwedo/OrganicWastePage";
import EWastePage from "@/pages/whatwedo/EWastePage";
import WasteToWealthPage from "@/pages/whatwedo/WasteToWealthPage";
import BhopalModelPage from "@/pages/whatwedo/BhopalModelPage";
import ZeroWasteCampusPage from "@/pages/initiatives/ZeroWasteCampusPage";
import BehaviourChangePage from "@/pages/whatwedo/BehaviourChangePage";
import Partners from "@/pages/home/sections/Partners/Partners";
import AchievementsPage from "@/pages/whatwedo/AchievementsPage";
import PaperWaste from "@/pages/whatwedo/PaperWaste";
import IndustrialWaste from "@/pages/whatwedo/IndustrialWaste";
import AgricultureWaste from "@/pages/whatwedo/AgricultureWaste";
import HairToAminoAcid from "@/pages/whatwedo/HairToAminoAcid";
import InternshipPage from "@/pages/whatwedo/InternshipPage";
import StudyTour from "@/pages/whatwedo/StudyTour";
import CommunityProgramme from "@/pages/whatwedo/CommunityProgramme";
import TrainingPage from "@/pages/whatwedo/TrainingPage";
import Publications from "@/pages/whatwedo/Publications";


const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about/vision" element={<VisionMission />} />
          <Route path="/contact" element={<ContactSection />} />
          <Route path="/impact" element={<Impact />} />
          <Route path="/sarthak-karmi" element={<SarthakKarmis />} />
          <Route path="/success-stories" element={<SuccessStories />} />
          <Route path="/awards" element={<Awards />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/partnerships" element={<Partners />} />
          <Route path="/about" element={<About />} />
          <Route path="/initiatives" element={<Initiatives />} />
          <Route path="/organic" element={<OrganicPage />} />
          <Route path="/social" element={<SocialPage />} />
          <Route path="/achievements" element={<AllAchievements />} />
          <Route path="/plastic-recycling" element={<PlasticRecyclingPage />} />
          <Route path="/organic-waste" element={<OrganicWastePage />} />
          <Route path="/e-waste" element={<EWastePage />} />
          <Route path="/waste-to-wealth" element={<WasteToWealthPage />} />
          <Route path="/bhopal-model" element={<BhopalModelPage />} />
          <Route path="/zero-waste-campus" element={<ZeroWasteCampusPage />} />
          <Route path="/behaviour-change" element={<BehaviourChangePage />} />
          <Route path="/industrial" element={<IndustrialWaste />} />
          <Route path="/agriculture" element={<AgricultureWaste />} />
          <Route path="/hair-to-amino-acid" element={<HairToAminoAcid />} />
          <Route path="/internship" element={<InternshipPage />} />
          <Route path="/study-tour" element={<StudyTour />} />
          <Route path="/community-programme" element={<CommunityProgramme />} />
          <Route path="/training" element={<TrainingPage />} />
          <Route path="/paper" element={<PaperWaste />} />
          <Route path="/compliance" element={<AchievementsPage />} />
          <Route path="/publications" element={<Publications />} />

        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;