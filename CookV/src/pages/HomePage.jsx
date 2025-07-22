import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import Features from "../components/Features";
import Testimonial from "../components/Testimonial";
import FinalCTA from "../components/FinalCTA";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <div className="font-[Inter] bg-[#FDFDFD] text-gray-800">
      <Header />
      <Hero />
      <HowItWorks />
      <Features />
      <Testimonial />
      <FinalCTA />
      <Footer />
    </div>
  );
}
