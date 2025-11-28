import React from "react";

const ProjectDescription = ({ subtitle, description }) => {
  const text = subtitle || description;

  const paragraphs = text
    .split(".")
    .map(p => p.trim())
    .filter(p => p.length > 0);

  return (
    <section className="projectDescriptionSection">
      <div className="projectDescriptionContent">
        {paragraphs.map((p, index) => (
          <p key={index}>{p}.</p>
        ))}
      </div>
    </section>
  );
};

export default ProjectDescription;
