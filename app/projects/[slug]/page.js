"use client";

import Link from "next/link";

const projectData = {
  "window-decals": {
    title: "Window Decal Prototyping",
    description:
      "This project explored materials and low-fidelity prototyping methods."
  },

  "college-life": {
    title: "College Life UX Website",
    description:
      "Focused on user research, interviews, and improving usability."
  },

  "nextjs-portfolio": {
    title: "Next.js Portfolio",
    description:
      "Built a portfolio using Next.js and deployed it using Vercel."
  }
};

export default function ProjectPage({ params }) {
  const project = projectData[params.slug];

  if (!project) {
    return <h1>Project not found.</h1>;
  }

  return (
    <main style={mainStyle}>
      <div style={containerStyle}>

        <h1>{project.title}</h1>

        <p>{project.description}</p>

        <Link href="/projects" className="btn">
          ← Back to Projects
        </Link>

      </div>

      <style jsx>{`
  .btn {
    margin-top: 30px;
    padding: 10px 16px;
    background: #111;
    color: white;
    border-radius: 8px;
    text-decoration: none;
    display: inline-block;
    transition: all 0.2s ease;
  }

  .btn:hover {
    background: #333;
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0,0,0,0.15);
  }

  .btn:active {
    transform: scale(0.97);
  }
`}</style>
    </main>
  );
}

const mainStyle = {
  fontFamily: "Arial, sans-serif",
  backgroundColor: "transparent",
  minHeight: "100vh",
  padding: "40px"
};

const containerStyle = {
  maxWidth: "800px",
  margin: "0 auto",
  background: "var(--card-bg)",
  padding: "40px",
  borderRadius: "12px",
  boxShadow: "0 4px 20px rgba(0,0,0,0.08)"
};