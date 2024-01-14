import { useEffect } from "react";
import Header from "./Header";
import MainContent from "./MainContent";
import ScrollTopButton from "./ScrollTopButton";

function Resume() {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      const scrollTop = document.getElementById("scroll-top");
      if (scrollY >= 560) scrollTop?.classList.add("show-scroll");
      else scrollTop?.classList.remove("show-scroll");
    });
  }, []);

  return (
    <div>
      <Header />
      <MainContent />
      <ScrollTopButton />
    </div>
  );
}

export default Resume;
