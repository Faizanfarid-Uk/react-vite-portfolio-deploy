import { useEffect, useState } from "react";

function Hero({ startTyping }) {
  const introText =
    "Data Scientist & Mern Stack Developer"
"I build AI chatbots and automation systems that handle customer support, qualify leads, and save time. Using LangChain, RAG pipelines, and prompt engineering, I deliver practical AI solutions that integrate with your systems and improve business operations."

  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  const [typedIntro, setTypedIntro] = useState(
    prefersReducedMotion ? introText : ""
  );
  const [showSub, setShowSub] = useState(prefersReducedMotion);

  useEffect(() => {
    if (!startTyping || prefersReducedMotion) return;

    let index = 0;

    const interval = setInterval(() => {
      setTypedIntro(introText.slice(0, index + 1));
      index++;

      if (index === introText.length) {
        clearInterval(interval);
        setShowSub(true);
      }
    }, 40); // smooth typing, no lag

    return () => clearInterval(interval);
  }, [startTyping, prefersReducedMotion]);

  return (
    <section className="hero hero-video">
      {/* Background Video */}
      {!prefersReducedMotion && (
        <video
          className="hero-bg-video"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          disablePictureInPicture
          controlsList="nodownload nofullscreen noremoteplayback"
        >
          <source src="/hero-bg.mp4" type="video/mp4" />
        </video>
      )}

      {/* Dark overlay */}
      <div className="hero-overlay" />

      {/* Content */}
      <div className="hero-content">
        <img
          src="/profile.jpeg"
          alt="Faizan Farid"
          className="profile-pic"
        />

        <h1 className="hero-name show">
          Hi, I’m <span>Faizan  Farid</span>
        </h1>

        <p className="hero-intro typing">{typedIntro}</p>

        {showSub && (
          <p className="hero-sub fade show">
            I specialize in <strong>Machine Learning & Deep Learning </strong> and{" "}
            <strong>Python,React ,Node.js</strong>, with strong interests in{" "}
            <strong>Data Science, Mern Stack Development</strong>, <strong>Generative Ai</strong>, and{" "}
            <strong>SAAS & Ecommerence</strong>.
          </p>
        )}
      </div>
    </section>
  );
}

export default Hero;
