import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import StickySocial from "@/components/layout/StickySocial";
import ScrollToTop from "@/components/layout/ScrollToTop";

export type Lang = "hi" | "en";

const MainLayout = () => {
  const [lang, setLang] = useState<Lang>(() => {
    if (typeof window === "undefined") return "hi";
    return localStorage.getItem("lang") === "en" ? "en" : "hi";
  });

  useEffect(() => {
    localStorage.setItem("lang", lang);
  }, [lang]);

  return (
    <>
      <Navbar lang={lang} setLang={setLang} />
      {/* <StickySocial /> */}
      <ScrollToTop />

      <main className="bg-white">
        <Outlet context={{ lang }} />
      </main>

      <Footer lang={lang} />
    </>
  );
};

export default MainLayout;