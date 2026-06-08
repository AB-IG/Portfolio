import { motion } from "framer-motion";
import SectionLabel from "../SectionLabel";

const techPills = [
  "React.js",
  "Node.js",
  "MongoDB",
  "Express.js",
  "Paystack",
  "JWT",
];

function TechPill({ label }) {
  return (
    <span
      style={{
        display: "inline-block",
        fontSize: "0.75rem",
        fontWeight: 500,
        padding: "4px 12px",
        borderRadius: 999,
        border: "1px solid var(--border)",
        color: "var(--text-secondary)",
      }}
    >
      {label}
    </span>
  );
}

export default function Featured() {
  return (
    <section
      id="featured"
      className="section-pad section-sep"
    >
      <div className="container">
        <SectionLabel>★ / FEATURED</SectionLabel>

        <motion.h2
          className="section-heading"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{
            once: true,
            margin: "-80px",
          }}
          transition={{
            duration: 0.5,
            delay: 0.08,
            ease: "easeOut",
          }}
        >
          The work in detail.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{
            once: true,
            margin: "-80px",
          }}
          transition={{
            duration: 0.6,
            delay: 0.18,
            ease: "easeOut",
          }}
          style={{
            border: "1px solid var(--border)",
            borderRadius: 12,
            padding: 0,
            background: "var(--bg-subtle)",
            overflow: "hidden",
          }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left — gradient placeholder (replace with real screenshot) */}
            <div
              className="flex items-center justify-center min-h-[260px] lg:min-h-[420px] select-none"
              style={{
                background:
                  "linear-gradient(135deg, #0F2520, #1A3A30)",
              }}
            >
              <span
                style={{
                  fontSize:
                    "clamp(1.8rem, 4vw, 3rem)",
                  fontWeight: 800,
                  color: "rgba(240,237,230,0.06)",
                  letterSpacing: "-0.04em",
                  textAlign: "center",
                  padding: "0 24px",
                  lineHeight: 1.1,
                }}
              >
                Multi-Vendor
                <br />
                E-Commerce
                <br />
                Platform
              </span>
            </div>

            {/* Right — content */}
            <div
              style={{ padding: 40 }}
              className="flex flex-col justify-between gap-8"
            >
              {/* Header */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span
                    style={{
                      fontSize: "0.68rem",
                      fontWeight: 700,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: "var(--text-muted)",
                      border:
                        "1px solid var(--border)",
                      padding: "3px 10px",
                      borderRadius: 999,
                    }}
                  >
                    E-Commerce · Full-Stack
                  </span>
                  <span
                    style={{
                      fontSize: "0.72rem",
                      color: "var(--text-muted)",
                    }}
                  >
                    2023–2024
                  </span>
                </div>

                <h3
                  style={{
                    fontSize:
                      "clamp(1.2rem, 2.5vw, 1.5rem)",
                    fontWeight: 700,
                    color: "var(--text-primary)",
                    letterSpacing: "-0.02em",
                    lineHeight: 1.2,
                    marginBottom: 28,
                  }}
                >
                  Multi-Vendor E-Commerce Platform
                </h3>

                <div className="flex flex-col gap-5">
                  {[
                    {
                      label: "Problem",
                      text: "Client needed a scalable e-commerce system supporting Stripe and Paystack payments, with real-time inventory and high transaction reliability under peak traffic.",
                    },
                    {
                      label: "My Role",
                      text: "Led end-to-end architecture — from database schema design to payment integration to frontend delivery. Made every technical decision.",
                    },
                    {
                      label: "Solution",
                      text: "Built on React + Node.js + MongoDB. Integrated Stripe and Paystack with webhook-based order confirmation. Optimised Express.js middleware reducing API response times by 30%.",
                    },
                  ].map(({ label, text }) => (
                    <div key={label}>
                      <span
                        style={{
                          display: "block",
                          fontSize: "0.68rem",
                          fontWeight: 700,
                          letterSpacing: "0.12em",
                          textTransform:
                            "uppercase",
                          color:
                            "var(--text-muted)",
                          marginBottom: 5,
                        }}
                      >
                        {label}
                      </span>
                      <p
                        style={{
                          fontSize: "0.9rem",
                          lineHeight: 1.75,
                          color:
                            "var(--text-secondary)",
                        }}
                      >
                        {text}
                      </p>
                    </div>
                  ))}

                  {/* Result — highlighted */}
                  <div>
                    <span
                      style={{
                        display: "block",
                        fontSize: "0.68rem",
                        fontWeight: 700,
                        letterSpacing: "0.12em",
                        textTransform:
                          "uppercase",
                        color:
                          "var(--text-muted)",
                        marginBottom: 5,
                      }}
                    >
                      Result
                    </span>
                    <p
                      style={{
                        fontSize: "0.9rem",
                        lineHeight: 1.75,
                        color:
                          "var(--text-primary)",
                        fontWeight: 600,
                      }}
                    >
                      25% increase in transaction
                      volume within Q1 of launch.
                      Cited directly in client
                      growth reports.
                    </p>
                  </div>
                </div>
              </div>

              {/* Tech + CTA */}
              <div className="flex flex-col gap-5">
                <div className="flex flex-wrap gap-2">
                  {techPills.map((t) => (
                    <TechPill key={t} label={t} />
                  ))}
                </div>

                <div className="flex flex-wrap gap-3">
                  {/* real live URL */}
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-none inline-flex items-center gap-1.5 font-semibold transition-all duration-150"
                    style={{
                      fontSize: "0.82rem",
                      color:
                        "var(--text-primary)",
                      textDecoration: "none",
                      border:
                        "1px solid var(--border)",
                      padding: "8px 18px",
                      borderRadius: 6,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor =
                        "var(--text-secondary)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor =
                        "var(--border)";
                    }}
                  >
                    View Live →
                  </a>
                  {/*  GitHub repo URL */}
                  <a
                    href="https://github.com/AB-IG/direct-rent"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-none inline-flex items-center gap-1.5 transition-all duration-150"
                    style={{
                      fontSize: "0.82rem",
                      color: "var(--text-muted)",
                      textDecoration: "none",
                      border:
                        "1px solid var(--border)",
                      padding: "8px 18px",
                      borderRadius: 6,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color =
                        "var(--text-secondary)";
                      e.currentTarget.style.borderColor =
                        "var(--text-muted)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color =
                        "var(--text-muted)";
                      e.currentTarget.style.borderColor =
                        "var(--border)";
                    }}
                  >
                    GitHub Repo →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
