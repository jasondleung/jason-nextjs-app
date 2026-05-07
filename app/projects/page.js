"use client";

import Link from "next/link";

const projects = [
  {
    slug: "window-decals",
    title: "Window Decal Prototyping",
    description: "Explored rapid prototyping techniques."
  },
  {
    slug: "college-life",
    title: "College Life UX Website",
    description: "Conducted user research and usability testing."
  },
  {
    slug: "nextjs-portfolio",
    title: "Next.js Portfolio",
    description: "Built and deployed a portfolio site using Next.js."
  }
];

export default function ProjectsPage() {
  return (
    <main style={mainStyle}>
      <div style={containerStyle}>

        <h1>Projects</h1>

        <div style={gridStyle}>
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              style={{ textDecoration: "none" }}
            >
              <div className="card">
                <h2>{project.title}</h2>
                <p>{project.description}</p>
              </div>
            </Link>
          ))}
        </div>

        <div style={{ marginTop: "30px" }}>
          <Link href="/" className="btn">
            ← Back Home
          </Link>
        </div>

      </div>

      <style jsx>{`
        .btn {
          padding: 10px 16px;
          background: #111;
          color: white;
          border-radius: 8px;
          text-decoration: none;
          font-size: 14px;
          transition: all 0.2s ease;
          display: inline-block;
        }

        .btn:hover {
          background: #333;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(0,0,0,0.15);
        }

        .btn:active {
          transform: scale(0.97);
        }

        .card {
          background: var(--card-bg);
          padding: 20px;
          border-radius: 12px;
          border: 1px solid #eee;
          color: var(--text-color);
          text-decoration: none;
          transition: all 0.2s ease;
          cursor: pointer;
        }

        .card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 24px rgba(0,0,0,0.12);
          background: var(--card-bg);
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
  maxWidth: "1000px",
  margin: "0 auto",
  background: "var(--card-bg)",
  padding: "40px",
  borderRadius: "12px",
  boxShadow: "0 4px 20px rgba(0,0,0,0.08)"
};

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
  gap: "20px",
  marginTop: "30px"
};