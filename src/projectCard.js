import "./styles/projectCard.css";
export default function ProjectCard({ dataObject }) {
  return (
    <div className="projectCard">
      <div className="projectCard-image-container">
        <div className="image-container">
          <img src={dataObject.image}></img>
        </div>
      </div>
      <div className="flex-justify-space-between">
        <div className="date">{dataObject.timePeriod}</div>
        <a className="hyperlink-underline-blue-small" href={dataObject.link}>
          Website
        </a>
      </div>
      <a className="hyperlink-underline-blue-big" href="/">
        {dataObject.title}
      </a>
      <div className="project-miniIntro">{dataObject.miniIntro}</div>
    </div>
  );
}
