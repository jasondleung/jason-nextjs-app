"use client";

import Link from "next/link";

export default function Home() {
  return (
    <main style={{
      fontFamily: "Arial, sans-serif",
      backgroundColor: "#f5f5f5",
      minHeight: "100vh",
      padding: "40px"
    }}>
      <div style={{
        maxWidth: "900px",
        margin: "0 auto",
        background: "white",
        padding: "40px",
        borderRadius: "12px",
        boxShadow: "0 4px 20px rgba(0,0,0,0.08)"
      }}>
        
        {/* Header */}
        <h1 style={{ fontSize: "2.5rem", marginBottom: "10px" }}>
          Jason Leung
        </h1>
        <p style={{ color: "gray", marginBottom: "30px" }}>
          Designer • Developer • UCSD Student
        </p>

        {/* Navigation Buttons */}
        <div style={{ display: "flex", gap: "10px", marginBottom: "40px" }}>
          <Link href="/about">
            <span className="btn">About</span>
          </Link>
          <a href="#projects" className="btn">Projects</a>
          <a href="#contact" className="btn">Contact</a>
        </div>

        {/* About */}
        <section style={sectionStyle}>
          <h2>About Me</h2>
          <p>
            I’m a student at UCSD interested in design, innovation, and building
            meaningful digital experiences.
          </p>
        </section>

        {/* Projects */}
        <section id="projects" style={sectionStyle}>
          <h2>Projects</h2>

          <div style={cardStyle}>
            <h3>Window Decal Prototyping</h3>
            <p>Explored materials and rapid prototyping techniques.</p>
          </div>

          <div style={cardStyle}>
            <h3>College Life UX Website</h3>
            <p>Conducted user research and improved usability.</p>
          </div>

          <div style={cardStyle}>
            <h3>Next.js Portfolio</h3>
            <p>This site built using Next.js and deployed on Vercel.</p>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" style={sectionStyle}>
          <h2>Contact</h2>
          <p>Email: jaleung@ucsd.com</p>
        </section>

      </div>

      {/* Hover Styles */}
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
      `}</style>
    </main>
  );
}

// Styles
const sectionStyle = {
  marginBottom: "30px"
};

const cardStyle = {
  background: "#fafafa",
  padding: "15px",
  borderRadius: "8px",
  marginTop: "10px",
  border: "1px solid #eee"
};