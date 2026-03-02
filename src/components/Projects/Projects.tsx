import "./Projects.css";
import BIpic from "./BIpic.png";
import BIpic2 from "./BIpic2.png";
import Netflix from "./netflix.png";

type Project = {
  title: string;
  tools: string[];
  imageSrc: string;
  githubUrl: string;
  liveUrl?: string;
};

const projects: Project[] = [
  {
    title: "Spotify - Data Analysis",
    tools: ["PostgreSQL", "Power BI"],
    imageSrc: BIpic,
    githubUrl: "https://github.com/YusifovNijat/spotify-data-analysis",
  },
  {
    title: "E-commerce — Data Analysis",
    tools: ["Python", "PostgreSQL", "Power BI"],
    imageSrc: BIpic2,
    githubUrl: "https://github.com/YusifovNijat/e-commerce-analytics",
  },
  {
    title: "Netflix clone",
    tools: ["React", "JavaScript", "API", "CSS", "HTML"],
    imageSrc: Netflix,
    githubUrl: "https://github.com/YusifovNijat/netflix-clone",
  },
];

export default function Projects() {
  return (
    <section className="projectsSection" id="projects">
      <div className="container">
        <h2 className="sectionTitle">Projects</h2>
        <p className="sectionSubtitle">
          A few things I’ve built — analytics work and small tools for learning.
        </p>

        <div className="projectsGrid">
          {projects.map((p) => (
            <article key={p.title} className="projectCard">
              <div className="projectImageWrap">
                <img className="projectImage" src={p.imageSrc} alt={p.title} />
              </div>

              <div className="projectBody">
                <h3 className="projectTitle">{p.title}</h3>

                <div className="toolChips">
                  {p.tools.map((t) => (
                    <span key={t} className="toolChip">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="projectLinks">
                  <a
                    className="btn btnPrimary"
                    href={p.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>

                  {p.liveUrl && (
                    <a
                      className="btn btnGhost"
                      href={p.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Live demo
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}