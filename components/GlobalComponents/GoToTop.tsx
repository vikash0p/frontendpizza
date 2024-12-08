"use client";
import React, { useState, useEffect } from "react";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";
const GoToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  const goToButton = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);
  return (
    <AnimatePresence>
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0 }}
        type="button"
        className=" fixed bottom-4 right-5 z-50  text-4xl text-textColor transition duration-200 ease-linear "
        onClick={goToButton}
      >
        {isVisible && <BsFillArrowUpCircleFill />}
      </motion.button>
    </AnimatePresence>
  );
};
export default GoToTop;
