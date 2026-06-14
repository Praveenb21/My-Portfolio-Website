import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const projects = [
  {
    title: "AI Trading Algorithm System",
    category: "Full Stack",
    tools: "Node.js, Express.js, MongoDB, Gemini AI, Groq SDK",
    image: "/images/AI_trade2.jpeg",
    video: "trading-demo.mp4",   // put video in src/assets/
    link: "https://github.com/Praveenb21/Ai_Trading_Algorithm_System",
  },
  {
    title: "StrokeSense",
    category: "Web App",
    tools: "React, TypeScript, Node.js, PostgreSQL",
    image: "/images/strokesense.webp",
    video: "strokesense-demo.mp4",
    link: "https://github.com/Praveenb21/StrokeSense-Stroke_Prediction",
  },
  {
    title: "Campus Notification Platform",
    category: "Full Stack",
    tools: "Next.js, TypeScript, Express, Redis, Material UI",
    image: "/images/campus.webp",
    video: "campus-demo.mp4",
    link: "https://github.com/Praveenb21",
  },
];

const Work = () => {
  useGSAP(() => {
    let translateX: number = 0;

    function setTranslateX() {
      const box = document.getElementsByClassName("work-box");
      const rectLeft = document
        .querySelector(".work-container")!
        .getBoundingClientRect().left;
      const rect = box[0].getBoundingClientRect();
      const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
      let padding: number =
        parseInt(window.getComputedStyle(box[0]).padding) / 2;
      translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
    }

    setTranslateX();

    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: `+=${translateX}`,
        scrub: true,
        pin: true,
        id: "work",
      },
    });

    timeline.to(".work-flex", {
      x: -translateX,
      ease: "none",
    });

    return () => {
      timeline.kill();
      ScrollTrigger.getById("work")?.kill();
    };
  }, []);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {projects.map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>
                  <div>
                    <h4>{project.title}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools and Features</h4>
                <p>{project.tools}</p>
              </div>
              <WorkImage image={project.image} alt={project.title} video={project.video} link={project.link}/>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;