"use client";

import Link from "next/link";

export default function AboutPage() {
  return (
    <main style={mainStyle}>
      <div style={containerStyle}>

        {/* Header */}
        <h1 style={titleStyle}>About Me</h1>

        <p style={subtitleStyle}>
          Designer • Developer • UCSD Student
        </p>

        {/* Intro Card */}
        <div className="card">
          <h2>Who I Am</h2>

          <p>
            I’m a UCSD student interested in UX design,
            prototyping, and web development.
          </p>

          <p>
            I enjoy building digital experiences and exploring
            creative design solutions.
          </p>
        </div>

        {/* Skills */}
        <div className="card">
          <h2>Skills</h2>

          <div style={skillsContainer}>
            <span className="tag">Next.js</span>
            <span className="tag">React</span>
            <span className="tag">Figma</span>
            <span className="tag">UX Research</span>
            <span className="tag">Prototyping</span>
            <span className="tag">JavaScript</span>
          </div>
        </div>

        {/* Experience */}
        <div className="card">
          <h2>Experience</h2>

          <div style={timelineItem}>
            <h3>College Life UX Website</h3>
            <p>
              Conducted interviews and usability testing for a student ministry website redesign.
            </p>
          </div>

          <div style={timelineItem}>
            <h3>Window Decal Prototyping</h3>
            <p>
              Explored low-fidelity prototyping materials and installation concepts.
            </p>
          </div>
        </div>

        {/* Fun Facts */}
        <div className="card">
          <h2>Fun Facts</h2>

          <ul style={listStyle}>
            <li>I enjoy design systems and clean UI layouts.</li>
            <li>I like experimenting with interactive web experiences.</li>
            <li>I’m currently learning more about full-stack development.</li>
          </ul>
        </div>

        {/* Buttons */}
        <div style={{ display: "flex", gap: "12px", marginTop: "30px" }}>
          
          <Link href="/" style={{ textDecoration: "none" }}>
            <span className="btn">← Back Home</span>
          </Link>

          <Link href="/projects" style={{ textDecoration: "none" }}>
            <span className="btn">View Projects</span>
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
          background: "var(--card-bg)";
          padding: 24px;
          border-radius: 12px;
          border: 1px solid #eee;
          margin-top: 20px;
          transition: all 0.2s ease;
        }

        .card:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 24px rgba(0,0,0,0.08);
          background: "var(--card-bg)";
        }

        .tag {
          background: #111;
          color: white;
          padding: 8px 14px;
          border-radius: 999px;
          font-size: 14px;
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
  maxWidth: "900px",
  margin: "0 auto",
  background: "var(--card-bg)",
  padding: "50px",
  borderRadius: "20px",
  boxShadow: "0 4px 20px rgba(0,0,0,0.08)"
};

const titleStyle = {
  fontSize: "3rem",
  marginBottom: "10px"
};

const subtitleStyle = {
  color: "gray",
  marginBottom: "30px",
  fontSize: "18px"
};

const skillsContainer = {
  display: "flex",
  flexWrap: "wrap",
  gap: "10px",
  marginTop: "15px"
};

const timelineItem = {
  marginTop: "20px"
};

const listStyle = {
  paddingLeft: "20px",
  lineHeight: "1.8"
};