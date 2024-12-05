import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MessageCard from "@/components/MessageCard";
import Services from "@/components/Services";
import SideProjects from "@/components/SideProjects";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <MessageCard />
      <Gallery />
      <Services />
      {/* <SideProjects /> */}
      {/* <Footer /> */}
    </>
  );
}
