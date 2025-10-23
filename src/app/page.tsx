import HeroSection from "./components/heroSection";
import WorkSection from "./components/workSection";
import ProjectsSection from "./components/projectSection";
import BlogSection from "./components/blogSection";
import LinkSection from "./components/linkSection";


export default function Home() {
  return (
    <div className="flex items-center pt-10">
      <div className="max-w-5xl">
        <HeroSection />
        <WorkSection />
        <ProjectsSection />
        <BlogSection />
        <LinkSection/>

      </div>
    </div>
  );
}
