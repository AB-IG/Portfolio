import { motion } from "framer-motion";
import { meta } from "../../data/content";

import abrahamImg from "../../assets/abraham.jpeg";
import { useReducer } from "react";

/* ─── Page-load animation variants ──────────── */

const wordContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.35,
    },
  },
};
const wordItem = {
  hidden: { opacity: 0, y: 48 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: "easeOut",
    },
  },
};

const metaContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 1.4,
    },
  },
};
const metaItem = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const lines = [
  ["Engineering", "scalable"],
  ["systems", "that", "move"],
  ["real", "numbers."],
];

const metaCols = [
  { label: "WHO", value: meta.name },
  { label: "WHAT", value: meta.role },
  { label: "WHERE", value: meta.location },
  { label: "STACK", value: meta.stack },
  {
    label: "STATUS",
    value: "Available",
    isAvailable: true,
  },
];

function SocialRow() {
  const socials = [
    {
      label: "LinkedIn",
      href: meta.linkedinHref,
      icon: (
        <svg
          width="15"
          height="15"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect
            x="2"
            y="9"
            width="4"
            height="12"
          />
          <circle cx="4" cy="4" r="2" />
        </svg>
      ),
    },
    {
      label: "GitHub",
      href: meta.githubHref,
      icon: (
        <svg
          width="15"
          height="15"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
        </svg>
      ),
    },
    {
      label: "Email",
      href: `mailto:${meta.email}`,
      icon: (
        <svg
          width="15"
          height="15"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
      ),
    },
  ];

  return (
    <div className="flex items-center gap-5">
      {socials.map((s) => (
        <a
          key={s.label}
          href={s.href}
          target={
            s.href.startsWith("http")
              ? "_blank"
              : undefined
          }
          rel="noopener noreferrer"
          aria-label={s.label}
          className="flex items-center gap-1.5 cursor-none transition-all duration-150"
          style={{
            color: "var(--text-muted)",
            textDecoration: "none",
            fontSize: "0.82rem",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.color =
              "var(--text-primary)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.color =
              "var(--text-muted)")
          }
        >
          {s.icon}
          <span>{s.label}</span>
        </a>
      ))}
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="intro"
      className="relative min-h-screen flex flex-col justify-center section-pad"
    >
      <div className="container relative">
        {/* Photo — top right, absolute (desktop only) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.55,
            delay: 0.5,
            ease: "easeOut",
          }}
          className="absolute hidden lg:block"
          style={{ top: 0, right: 0 }}
        >
          <div
            className="rounded-full overflow-hidden"
            style={{
              width: 160,
              height: 160,
              border: "1.5px solid var(--border)",
            }}
          >
            <img
              src={abrahamImg}
              alt="Abraham Markus"
              loading="lazy"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.style.display = "none";
                e.target.parentElement.style.background =
                  "var(--bg-subtle)";
              }}
            />
          </div>
        </motion.div>

        {/* Section label — slides in from left */}
        <motion.span
          className="section-label"
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.55,
            delay: 0.1,
            ease: "easeOut",
          }}
        >
          00 / MMXXVI
        </motion.span>

        {/* Headline — word by word stagger */}
        <motion.h1
          variants={wordContainer}
          initial="hidden"
          animate="visible"
          className="font-bold leading-[1.08] tracking-[-0.03em] mt-5"
          style={{
            fontSize: "clamp(2.4rem, 6vw, 4rem)",
            color: "var(--text-primary)",
            maxWidth: 680,
            marginBottom: "2rem",
          }}
        >
          {lines.map((line, li) => (
            <span key={li} className="block">
              {line.map((word, wi) => (
                <motion.span
                  key={wi}
                  variants={wordItem}
                  style={{
                    display: "inline-block",
                    marginRight: "0.28em",
                  }}
                >
                  {word}
                </motion.span>
              ))}
            </span>
          ))}
        </motion.h1>

        {/* Availability badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.85,
            ease: "easeOut",
          }}
          className="mb-8"
        >
          <span
            className="inline-flex items-center gap-2"
            style={{
              border: "1px solid var(--border)",
              padding: "6px 16px",
              borderRadius: 999,
              fontSize: "0.82rem",
              color: "var(--text-secondary)",
            }}
          >
            <span
              style={{
                width: 7,
                height: 7,
                borderRadius: "50%",
                background: "#4ADE80",
                display: "inline-block",
                flexShrink: 0,
              }}
            />
            Available for Senior &amp; Lead
            Full-Stack Roles — Remote or On-site,
            Nigeria
          </span>
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.95,
            ease: "easeOut",
          }}
          className="flex flex-wrap gap-3 mb-6"
        >
          {/* View My Work — filled */}
          <button
            onClick={() =>
              document
                .getElementById("work")
                ?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                })
            }
            className="cursor-none inline-flex items-center gap-2 font-semibold rounded transition-all duration-200"
            style={{
              background: "var(--text-primary)",
              color: "var(--bg)",
              padding: "10px 24px",
              fontSize: "0.875rem",
              border:
                "1px solid var(--text-primary)",
              minHeight: 44,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.opacity =
                "0.85";
              e.currentTarget.style.transform =
                "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.opacity = "1";
              e.currentTarget.style.transform =
                "";
            }}
          >
            View My Work
          </button>

          {/* Download CV — outlined */}

          <a
            href={meta.cvUrl}
            download="Abraham_Markus_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-none inline-flex items-center gap-2 font-semibold rounded transition-all duration-200"
            style={{
              background: "transparent",
              color: "var(--text-secondary)",
              padding: "10px 24px",
              fontSize: "0.875rem",
              border: "1px solid var(--border)",
              textDecoration: "none",
              minHeight: 44,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor =
                "var(--text-secondary)";
              e.currentTarget.style.color =
                "var(--text-primary)";
              e.currentTarget.style.transform =
                "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor =
                "var(--border)";
              e.currentTarget.style.color =
                "var(--text-secondary)";
              e.currentTarget.style.transform =
                "";
            }}
          >
            Download CV ↓
          </a>
        </motion.div>

        {/* Social links row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.5,
            delay: 1.05,
          }}
          className="mb-12"
        >
          <SocialRow />
        </motion.div>

        {/* Metadata grid */}
        <motion.div
          variants={metaContainer}
          initial="hidden"
          animate="visible"
          className="grid"
          style={{
            gridTemplateColumns: "repeat(5, 1fr)",
            borderTop: "1px solid var(--border)",
            borderBottom:
              "1px solid var(--border)",
          }}
        >
          {metaCols.map((col) => (
            <motion.div
              key={col.label}
              variants={metaItem}
              style={{
                padding: "20px 16px 20px 0",
                borderRight:
                  "1px solid var(--border)",
              }}
              className="last:border-r-0 first:pl-0"
            >
              <div
                style={{
                  fontSize: "0.72rem",
                  fontWeight: 600,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "var(--text-muted)",
                  marginBottom: 5,
                }}
              >
                {col.label}
              </div>
              <div
                style={{
                  fontSize: "0.875rem",
                  lineHeight: 1.5,
                  fontWeight: col.isAvailable
                    ? 600
                    : 500,
                  color: col.isAvailable
                    ? "#4ADE80"
                    : "var(--text-primary)",
                  display: col.isAvailable
                    ? "flex"
                    : undefined,
                  alignItems: col.isAvailable
                    ? "center"
                    : undefined,
                  gap: col.isAvailable
                    ? 6
                    : undefined,
                }}
              >
                {col.isAvailable && (
                  <span
                    style={{
                      width: 7,
                      height: 7,
                      borderRadius: "50%",
                      background: "#4ADE80",
                      display: "inline-block",
                      flexShrink: 0,
                    }}
                  />
                )}
                {col.value}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 0.9,
            duration: 0.6,
          }}
          className="mt-16"
        >
          <span
            className="bounce"
            style={{
              display: "inline-block",
              fontSize: "0.75rem",
              letterSpacing: "0.05em",
              color: "var(--text-muted)",
            }}
          >
            Scroll ↓
          </span>
        </motion.div>
      </div>
    </section>
  );
}
