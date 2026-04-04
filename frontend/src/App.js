import React from "react";
import "./App.css";
import { Toaster } from "./components/ui/sonner";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Highlights from "./components/Highlights";
import Services from "./components/Services";
import Tours from "./components/Tours";
import Fleet from "./components/Fleet";
import Testimonials from "./components/Testimonials";
import About from "./components/About";
import Contact from "./components/Contact";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";
import MobileFloatingCTA from "./components/MobileFloatingCTA";

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <Highlights />
      <Services />
      <Tours />
      <Fleet />
      <Testimonials />
      <About />
      <Contact />
      <CTASection />
      <Footer />
      <MobileFloatingCTA />
      <Toaster />
    </div>
  );
}

export default App;
