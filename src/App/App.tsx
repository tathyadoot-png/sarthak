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
          <Route path="/impact/karmis" element={<SarthakKarmis />} />
          <Route path="/impact/stories" element={<SuccessStories />} />
          <Route path="/awards" element={<Awards />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/partner" element={<Partner />} />
          <Route path="/about" element={<About />} />
           <Route path="/initiatives" element={<Initiatives />} />

        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;