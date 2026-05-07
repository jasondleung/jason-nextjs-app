"use client";

import Link from "next/link";

export default function ContactPage() {
  return (
    <main style={mainStyle}>
      <div style={containerStyle}>

        {/* Header */}
        <h1 style={titleStyle}>Contact</h1>

        <p style={subtitleStyle}>
          Let’s connect — feel free to reach out.
        </p>

        {/* Contact Cards */}
        <div style={gridStyle}>

          <div className="card">
            <h2>Email</h2>
            <p style={infoStyle}>jaleung@ucsd.edu</p>
          </div>

          <div className="card">
            <h2>Location</h2>
            <p style={infoStyle}>San Diego, California</p>
          </div>

          <div className="card">
            <h2>LinkedIn</h2>
            <p style={infoStyle}>linkedin.com/in/jasonleung</p>
          </div>

          <div className="card">
            <h2>GitHub</h2>
            <p style={infoStyle}>github.com/jasondleung</p>
          </div>

        </div>

        {/* Message Box */}
        <div className="card" style={{ marginTop: "30px" }}>
          <h2>Currently Interested In</h2>

          <ul style={listStyle}>
            <li>UX/UI Design</li>
            <li>Frontend Development</li>
            <li>Creative Technology</li>
            <li>Interactive Experiences</li>
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
          transition: all 0.2s ease;
        }

        .card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 24px rgba(0,0,0,0.08);
          background: "var(--card-bg)";
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
  maxWidth: "950px",
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
  marginBottom: "35px",
  fontSize: "18px"
};

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
  gap: "20px"
};

const infoStyle = {
  marginTop: "10px",
  color: "#444",
  lineHeight: "1.6"
};

const listStyle = {
  paddingLeft: "20px",
  lineHeight: "1.9"
};