import { useState, useEffect } from "react";
import "./ScrollTopButton.css";

const ScrollTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const buttonVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollTop = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", buttonVisibility);
    return () => {
      window.removeEventListener("scroll", buttonVisibility);
    };
  }, []);

  return (
    <div className="scroll_top">
      {isVisible && (
        <button
          onClick={scrollTop}
          className="button_scroll"
          aria-label="Remonter en haut de la page"
          tabIndex={0}
        ></button>
      )}
    </div>
  );
};

export default ScrollTopButton;
