import AboutSection from "@/components/About/About";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import FeaturedTenders from "@/components/FeaturedTenders";
import Hero from "@/components/Hero";
import { Metadata } from "next";
import Features from "@/components/Features";

export const metadata: Metadata = {
  title: "Tendr",
  description: "Automated tendering process",
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <FeaturedTenders />
      <Features />
      <AboutSection />
      <Contact />
    </>
  );
}
