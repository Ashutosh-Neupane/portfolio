import { ShootingStars } from "./components/ui/shooting-stars";
import { StarsBackground } from "./components/ui/stars-background";
import { FloatingNav } from "./components/ui/Navbar";
import Videos from "./components/Videos";
import Organization from "./components/Organization";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Post from "./components/Post";

export default function Home() {
  return (
    <div className="min-h-screen bg-transparent flex flex-col items-center w-full relative z-[3]">
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

      {/* Hero Section */}

      <Hero />

      {/* Organization Section */}

      <Organization />

      {/* Videos Section */}

      <Videos />

      {/* Projects Section */}

      <Projects />

      {/* Post Section */}

      <Post />

      {/* Footer Section */}

      <Footer />

      {/* Background Effects */}
      <ShootingStars className="absolute top-0 left-0 w-full h-full z-[-1]" />
      <StarsBackground className="absolute top-0 left-0 w-full h-full z-[-2]" />
    </div>
  );
}
