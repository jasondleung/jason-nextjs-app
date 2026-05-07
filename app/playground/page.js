"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function PlaygroundPage() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [theme, setTheme] = useState(generateTheme());
  const [ripples, setRipples] = useState([]);

  useEffect(() => {
    const handleMove = (e) => {
      setMouse({
        x: e.clientX,
        y: e.clientY
      });
    };

    window.addEventListener("mousemove", handleMove);

    return () => {
      window.removeEventListener("mousemove", handleMove);
    };
  }, []);

  function randomColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, "0")}`;
  }

  function generateTheme() {
    const c1 = randomColor();
    const c2 = randomColor();

    return {
      bg: `radial-gradient(circle at top, ${c1} 0%, ${c2} 80%)`,
      glow: `${c1}55`,
      accent: c1
    };
  }

  function handleCoreClick() {
    setTheme(generateTheme());

    const id = Date.now();

    setRipples((prev) => [...prev, { id }]);

    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== id));
    }, 1200);
  }

  return (
    <main
      style={{
        ...mainStyle,
        background: theme.bg
      }}
    >
      {/* Background Grid */}
      <div className="grid" />

      {/* Mouse Glow */}
      <div
        className="mouseGlow"
        style={{
          transform: `translate(${mouse.x - 200}px, ${mouse.y - 200}px)`,
          background: `radial-gradient(circle, ${theme.glow}, transparent 70%)`
        }}
      />

      {/* Ripple Animation */}
      {ripples.map((ripple) => (
        <div
          key={ripple.id}
          className="ripple"
          style={{
            borderColor: theme.accent
          }}
        />
      ))}

      {/* Floating Particles */}
      {[...Array(18)].map((_, i) => (
        <div
          key={i}
          className="particle"
          style={{
            left: `${(i * 11) % 100}%`,
            top: `${(i * 17) % 100}%`,
            background: theme.accent,
            animationDelay: `${i * 0.3}s`
          }}
        />
      ))}

      {/* Center Content */}
      <div style={containerStyle}>
        <div className="core" onClick={handleCoreClick}>
          <div className="ring ring1" />
          <div className="ring ring2" />
          <div className="ring ring3" />

          <div className="centerOrb">
            <span className="coreText">CLICK ME!</span>
          </div>
        </div>

        <div style={{ marginTop: "60px" }}>
          <Link href="/" className="btn">
            ← Back Home
          </Link>
        </div>
      </div>

      <style jsx>{`
        .grid {
          position: fixed;
          inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px);
          background-size: 40px 40px;
        }

        .mouseGlow {
          position: fixed;
          width: 400px;
          height: 400px;
          border-radius: 50%;
          pointer-events: none;
          z-index: 1;
          will-change: transform;
        }

        .particle {
          position: fixed;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          opacity: 0.7;
          animation: float 8s ease-in-out infinite;
        }

        @keyframes float {
          0% {
            transform: translateY(0px);
            opacity: 0.3;
          }

          50% {
            transform: translateY(-40px);
            opacity: 1;
          }

          100% {
            transform: translateY(0px);
            opacity: 0.3;
          }
        }

        .core {
          position: relative;
          width: 280px;
          height: 280px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }

        .ring {
          position: absolute;
          border-radius: 50%;
          border: 2px solid black;
        }

        .ring1 {
          width: 140px;
          height: 140px;
          animation: spin 10s linear infinite;
        }

        .ring2 {
          width: 200px;
          height: 200px;
          animation: spinReverse 16s linear infinite;
        }

        .ring3 {
          width: 260px;
          height: 260px;
          animation: spin 24s linear infinite;
        }

        .centerOrb {
          width: 100px;
          height: 100px;
          border-radius: 50%;
          background: black;
          display: flex;
          align-items: center;
          justify-content: center;
          animation: pulse 4s ease-in-out infinite;
          z-index: 2;
          transition: all 0.5s ease;
          box-shadow:
            0 0 30px rgba(0,0,0,0.5),
            0 0 80px rgba(0,0,0,0.35);
        }

        .coreText {
          color: white;
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 1px;
        }

        @keyframes pulse {
          0% {
            transform: scale(1);
          }

          50% {
            transform: scale(1.1);
          }

          100% {
            transform: scale(1);
          }
        }

        @keyframes spin {
          from {
            transform: rotate(0deg);
          }

          to {
            transform: rotate(360deg);
          }
        }

        @keyframes spinReverse {
          from {
            transform: rotate(360deg);
          }

          to {
            transform: rotate(0deg);
          }
        }

        .ripple {
          position: fixed;
          left: 50%;
          top: 50%;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          border: 2px solid;
          transform: translate(-50%, -50%);
          animation: explode 1.2s ease-out forwards;
          pointer-events: none;
        }

        @keyframes explode {
          from {
            width: 50px;
            height: 50px;
            opacity: 1;
          }

          to {
            width: 2500px;
            height: 2500px;
            opacity: 0;
          }
        }

        .btn {
          padding: 12px 20px;
          background: black;
          color: white;
          border-radius: 12px;
          text-decoration: none;
          transition: all 0.25s ease;
          display: inline-block;
          font-weight: 600;
          border: 1px solid rgba(255,255,255,0.15);
        }

        .btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 24px rgba(0,0,0,0.35);
          background: #111;
        }

        .btn:active {
          transform: scale(0.97);
        }
      `}</style>
    </main>
  );
}

const mainStyle = {
  minHeight: "100vh",
  overflow: "hidden",
  position: "relative",
  color: "white",
  fontFamily: "Arial, sans-serif",
  transition: "background 0.8s ease"
};

const containerStyle = {
  position: "relative",
  zIndex: 5,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "100vh",
  textAlign: "center",
  padding: "40px"
};