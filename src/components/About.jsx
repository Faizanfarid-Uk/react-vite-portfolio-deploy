import { useEffect, useState } from "react";

function About() {
  const paragraphs = [
    "I'm a Generative AI Modeler who designs, trains, and deploys AI systems that work reliably in production. I focus on building scalable solutions that solve real business problems, not just demos or experiments. I specialize in LLM development and fine-tuning (GPT-4, Claude, LLaMA, Mistral), Retrieval-Augmented Generation (RAG) pipelines, and AI agents that automate complex workflows.",

    "My expertise spans the full AI development lifecycle: data cleaning and preprocessing, model training and optimization, vector database management (Pinecone, Qdrant, FAISS), prompt engineering for cost reduction, and deployment on AWS, Azure, and GCP. I build production-ready systems using FastAPI, Docker, and Kubernetes, with comprehensive monitoring, logging, and observability. I've delivered RAG systems handling millions of documents, reduced hallucinations and API costs, and automated hundreds of hours of manual work.",

    "I work across diverse industries—Finance (fraud detection), Healthcare (clinical decision support), SaaS (customer support bots), Legal (contract review), E-commerce (recommendations), and Real Estate (valuations). My tech stack includes Python, PyTorch, TensorFlow, LangChain, LangGraph, CrewAI, and MLOps tools like MLflow and Weights & Biases. I'm driven by building impactful, business-driven AI solutions with clean, maintainable code and realistic timelines."
  ];

  const [currentPara, setCurrentPara] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [completedParas, setCompletedParas] = useState([]);

  useEffect(() => {
    if (currentPara >= paragraphs.length) return;

    let index = 0;
    const text = paragraphs[currentPara];

    const interval = setInterval(() => {
      setTypedText(text.slice(0, index + 1));
      index++;

      if (index === text.length) {
        clearInterval(interval);
        setCompletedParas((prev) => [...prev, text]);
        setTypedText("");
        setCurrentPara((prev) => prev + 1);
      }
    }, 22); // smooth & professional speed

    return () => clearInterval(interval);
  }, [currentPara]);

  return (
    <section className="about" id="about">
      <h2 className="stagger">About Me</h2>

      {/* Completed paragraphs */}
      {completedParas.map((para, i) => (
        <p key={i} className="about-line">
          {para}
        </p>
      ))}

      {/* Currently typing paragraph */}
      {currentPara < paragraphs.length && (
        <p className="about-line typing">{typedText}</p>
      )}
    </section>
  );
}

export default About;
