"use client";

import Link from "next/link";

export default function Home() {
  return (
    <main style={mainStyle}>
      <div style={containerStyle}>
        
        {/* Header */}
        <h1 style={{ fontSize: "2.5rem", marginBottom: "10px" }}>
          Jason Leung
        </h1>

        <p style={{ color: "gray", marginBottom: "30px" }}>
          Designer • Developer • UCSD Student
        </p>

        {/* Navigation */}
        <div style={{ display: "flex", gap: "10px", marginBottom: "40px" }}>
          
          <Link href="/about" style={{ textDecoration: "none" }}>
  <span className="btn">About</span>
</Link>

<Link href="/projects" style={{ textDecoration: "none" }}>
  <span className="btn">Projects</span>
</Link>

          <Link href="/contact" style={{ textDecoration: "none" }}>
  <span className="btn">Contact</span>
</Link>

<Link href="/playground" style={{ textDecoration: "none" }}>
  <span className="playgroundBtn">Playground ✨</span>
</Link>

        </div>

        {/* About */}
        <section style={sectionStyle}>
          <h2>About Me</h2>

          <p>
            I’m a student at UCSD interested in design, innovation,
            and building meaningful digital experiences.
          </p>
        </section>

        {/* Projects Preview */}
        <section style={sectionStyle}>
          <h2>Featured Projects</h2>

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
            <p>This site was built using Next.js and deployed on Vercel.</p>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" style={sectionStyle}>
          <h2>Contact</h2>
          <p>Email: jaleung@ucsd.edu</p>
        </section>

      </div>

      {/* Hover Effects */}
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

        .playgroundBtn {
  padding: 10px 18px;
  border-radius: 10px;
  font-size: 14px;
  display: inline-block;
  text-decoration: none;
  color: white;

  background: linear-gradient(
    135deg,
    #111 0%,
    #444 35%,
    #ffffff 50%,
    #444 65%,
    #111 100%
  );

  background-size: 250% 250%;

  transition: all 0.3s ease;

  animation: shine 6s linear infinite;

  box-shadow: 0 4px 20px rgba(0,0,0,0.15);
}

.playgroundBtn:hover {
  transform: translateY(-2px) scale(1.03);
  box-shadow: 0 8px 28px rgba(0,0,0,0.2);
}

@keyframes shine {
  0% {
    background-position: 0% 50%;
  }

  100% {
    background-position: 200% 50%;
  }
}

/* Dark mode version */
body.dark .playgroundBtn {
  color: black;

  background: linear-gradient(
    135deg,
    #ffffff 0%,
    #cccccc 35%,
    #111111 50%,
    #cccccc 65%,
    #ffffff 100%
  );

  background-size: 250% 250%;
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
  padding: "40px",
  borderRadius: "12px",
  boxShadow: "0 4px 20px rgba(0,0,0,0.08)"
};

const sectionStyle = {
  marginBottom: "30px"
};

const cardStyle = {
  background: "var(--card-bg)",
  padding: "15px",
  borderRadius: "8px",
  marginTop: "10px",
  border: "1px solid #eee"
};