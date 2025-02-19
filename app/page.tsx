
import { FloatingNav } from "./components/ui/Navbar";
import Videos from "./components/Videos";
import Organization from "./components/Organization";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Post from "./components/Post";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#222222] text-gray-300 flex flex-col items-center w-full relative z-[3]">
      {/* Navigation */}
      <FloatingNav
        navItems={[
          { name: "Home", link: "#home" },
          { name: "Post", link: "#post" },
          { name: "Videos", link: "#videos" },
          { name: "Project", link: "#projects" },
          { name: "Contact", link: "#contact" },
        ]}
      />
      <Hero />
      <Organization />
      <Videos />
      <Projects />
      <Post />
      <Footer />
    </div>
  );
}
