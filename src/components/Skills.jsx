import { useEffect, useState } from "react";

/* ================= CORE LANGUAGES ================= */
import python from "../assets/skills/Python.png";
import javascript from "../assets/skills/JavaScript.png";
import java from "../assets/skills/Java.png";
import c from "../assets/skills/C.png";
import cpp from "../assets/skills/C++ (CPlusPlus).png";
import xml from "../assets/skills/XML.png";

/* ================= FRONTEND ================= */
import html from "../assets/skills/HTML5.png";
import css from "../assets/skills/CSS3.png";
import react from "../assets/skills/React.png";
import nextjs from "../assets/skills/Next.js.png";
import vue from "../assets/skills/Vue.js.png";
import threejs from "../assets/skills/Three.js.png";
import tailwind from "../assets/skills/Tailwind CSS.png";

/* ================= BACKEND ================= */
import nodejs from "../assets/skills/Node.js.png";
import express from "../assets/skills/Express.png";
import flask from "../assets/tools-libs/Flask.png";
import graphql from "../assets/tools-libs/GraphQL.png";

/* ================= DATABASES ================= */
import mysql from "../assets/databases/MySQL.png";
import mongodb from "../assets/databases/MongoDB.png";
import postgres from "../assets/databases/PostgresSQL.png";
import sqlite from "../assets/databases/SQLite.png";
import rdb from "../assets/databases/R.png";

/* ================= TOOLS & PLATFORMS ================= */
import git from "../assets/tools-libs/Git.png";
import github from "../assets/tools-libs/GitHub.png";
import gitlab from "../assets/tools-libs/GitLab.png";
import docker from "../assets/tools-libs/Docker.png";
import postman from "../assets/tools-libs/Postman.png";
import linux from "../assets/tools-libs/Linux.png";
import jira from "../assets/tools-libs/Jira.png";
import slack from "../assets/tools-libs/Slack.png";

/* ================= IDEs ================= */
import vscode from "../assets/tools-libs/vsc.png";
import visualstudio from "../assets/tools-libs/vs.png";
import pycharm from "../assets/tools-libs/PyCharm.png";
import intellij from "../assets/tools-libs/IntelliJ IDEA.png";

function Skills() {
  const introText =
    "I have a strong and well-rounded technical skill set spanning core programming languages, frontend and backend frameworks, databases, and professional development tools. My expertise is shaped through academic excellence, real-world projects, and industry experience, with a strong focus on scalability, clean architecture, and problem-solving.";

  const [typedIntro, setTypedIntro] = useState("");
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setTypedIntro(introText.slice(0, index + 1));
      index++;

      if (index === introText.length) {
        clearInterval(interval);
        setTimeout(() => setShowContent(true), 300);
      }
    }, 20);

    return () => clearInterval(interval);
  }, []);

  const Skill = ({ src, alt, level }) => (
    <div className="skill-item">
      <img src={src} alt={alt} />
      <span className={`tooltip ${level.toLowerCase()}`}>{level}</span>
    </div>
  );

  return (
    <section className="skills reveal" id="skills">
      <h2>Skills</h2>

      <p className="skills-intro typing">{typedIntro}</p>

      {showContent && (
        <>
          {/* ===== Core Languages ===== */}
          <h3 className="fade show">Core Programming Languages</h3>
          <div className="skills-grid">
            <Skill src={python} alt="Python" level="Advanced" />
            <Skill src={javascript} alt="JavaScript" level="Advanced" />
            <Skill src={java} alt="Java" level="Intermediate" />
            <Skill src={c} alt="C" level="Intermediate" />
            <Skill src={cpp} alt="C++" level="Intermediate" />
            <Skill src={xml} alt="XML" level="Intermediate" />
          </div>

          {/* ===== Frontend ===== */}
          <h3 className="fade show">Frontend Development</h3>
          <div className="skills-grid">
            <Skill src={html} alt="HTML5" level="Advanced" />
            <Skill src={css} alt="CSS3" level="Advanced" />
            <Skill src={react} alt="React" level="Advanced" />
            <Skill src={nextjs} alt="Next.js" level="Intermediate" />
            <Skill src={vue} alt="Vue.js" level="Beginner" />
            <Skill src={threejs} alt="Three.js" level="Beginner" />
            <Skill src={tailwind} alt="Tailwind CSS" level="Advanced" />
          </div>

          {/* ===== Backend ===== */}
          <h3 className="fade show">Backend & APIs</h3>
          <div className="skills-grid">
            <Skill src={nodejs} alt="Node.js" level="Intermediate" />
            <Skill src={express} alt="Express.js" level="Intermediate" />
            <Skill src={flask} alt="Flask" level="Advanced" />
            <Skill src={graphql} alt="GraphQL" level="Intermediate" />
          </div>

          {/* ===== Databases ===== */}
          <h3 className="fade show">Databases & Data</h3>
          <div className="skills-grid">
            <Skill src={mysql} alt="MySQL" level="Advanced" />
            <Skill src={mongodb} alt="MongoDB" level="Intermediate" />
            <Skill src={postgres} alt="PostgreSQL" level="Intermediate" />
            <Skill src={sqlite} alt="SQLite" level="Intermediate" />
            <Skill src={rdb} alt="R" level="Beginner" />
          </div>

          {/* ===== Tools ===== */}
          <h3 className="fade show">Tools, Platforms & DevOps</h3>
          <div className="skills-grid">
            <Skill src={git} alt="Git" level="Advanced" />
            <Skill src={github} alt="GitHub" level="Advanced" />
            <Skill src={gitlab} alt="GitLab" level="Intermediate" />
            <Skill src={docker} alt="Docker" level="Intermediate" />
            <Skill src={postman} alt="Postman" level="Advanced" />
            <Skill src={linux} alt="Linux" level="Intermediate" />
            <Skill src={jira} alt="Jira" level="Beginner" />
            <Skill src={slack} alt="Slack" level="Intermediate" />
          </div>

          {/* ===== IDEs ===== */}
          <h3 className="fade show">IDEs & Development Environments</h3>
          <div className="skills-grid">
            <Skill src={vscode} alt="VS Code" level="Advanced" />
            <Skill src={visualstudio} alt="Visual Studio" level="Intermediate" />
            <Skill src={pycharm} alt="PyCharm" level="Advanced" />
            <Skill src={intellij} alt="IntelliJ IDEA" level="Intermediate" />
          </div>
        </>
      )}
    </section>
  );
}

export default Skills;
