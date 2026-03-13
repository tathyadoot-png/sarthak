import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "@/components/utils/ScrollToTop";
import MainLayout from "@/layouts/MainLayout";
import HomePage from "@/pages/home/HomePage";
import NotFound from "@/pages/NotFound";
import VisionMission from "@/pages/about/VisionMission";
import ContactSection from "@/pages/contact/ContactSection";
import History from "@/pages/about/HistorySection";
import Governance from "@/pages/about/Governance";
import PlasticWaste from "@/pages/initiatives/PlasticWaste";
import EWaste from "@/pages/initiatives/EWaste";
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


const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about/vision" element={<VisionMission />} />
          <Route path="/contact" element={<ContactSection />} />
          <Route path="/about/history" element={<History />} />
          <Route path="/about/governance" element={<Governance />} />
          <Route path="/initiatives/plastic" element={<PlasticWaste />} />
          <Route path="/initiatives/ewaste" element={<EWaste />} />
          <Route path="/initiatives/carcass" element={<PlasticWaste />} />
          <Route path="/initiatives/narmada" element={<PlasticWaste />} />
          <Route path="/impact" element={<Impact />} />
          <Route path="sarthak-karmi" element={<SarthakKarmis />} />
          <Route path="/success-stories" element={<SuccessStories />} />
          <Route path="/awards" element={<Awards />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/partnerships" element={<Partners />} />
             <Route path="/partner" element={<Partner />} />
          <Route path="/about" element={<About />} />
          <Route path="/initiatives" element={<Initiatives />} />
          <Route path="/initiatives/organic" element={<OrganicPage />} />
          <Route path="/initiatives/social" element={<SocialPage />} />
          <Route path="/achievements" element={<AllAchievements />} />
          <Route path="/plastic-recycling" element={<PlasticRecyclingPage />} />
          <Route path="/organic-waste" element={<OrganicWastePage />} />
          <Route path="/e-waste" element={<EWastePage />} />
          <Route path="/waste-to-wealth" element={<WasteToWealthPage />} />
          <Route path="/bhopal-model" element={<BhopalModelPage />} />
          <Route path="/zero-waste-campus" element={<ZeroWasteCampusPage />} />
          <Route path="/behaviour-change" element={<BehaviourChangePage />} />
          <Route path="/compliance" element={<AchievementsPage />} />





        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;