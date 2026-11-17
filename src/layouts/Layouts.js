import { useEffect } from "react";
import { scrollAnimation } from "@common/scrollAnims";

import Footer from "./footers/Index";
import Header from "./headers/Index";
import Preloader from "./Preloader";

const Layouts = ({
  children,
  footer,
  noHeader,
  noFooter
}) => {
  useEffect(() => {
    const cleanupScroll = scrollAnimation();

    // preloader
    if (typeof window !== 'undefined') {
      const loader = document.getElementsByClassName('preloader');
      if (loader[0]) loader[0].classList.add('loaded');
    }
    return cleanupScroll;
  }, []);

  return (
    <>
      <Preloader />

      {!noHeader && <Header />}

      {children}
      
      {!noFooter && <Footer footer={footer} />}

      <button id="scrollTop" className="scrollTopStick">
        <i className="fa-solid fa-arrow-up" />
      </button>
    </>
  );
};
export default Layouts;
