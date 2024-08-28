import { ImageSection } from "./ImageSection";
import { AboutContent } from "./AboutContent";
const About = () => {
  return (
    <div className={`bg-hero bg-cover bg-no-repeat `}>
      <div className="container grid grid-cols-1 md:grid-cols-2   items-center">
        <ImageSection />
        <AboutContent />
      </div>
    </div>
  );
};

export default About;
