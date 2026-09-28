"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

import "./Navbar.css";

const navLinks = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Services",
    href: "/services",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const isActive = (href) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname.startsWith(href);
  };

  return (
    <header className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <motion.a
          href="/"
          className="navbar-logo"
          onClick={closeMenu}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src="/brand/logo.png"
            alt="RUDD Private Limited"
            width={190}
            height={80}
            priority
            className="navbar-logo-image"
          />
        </motion.a>

        {/* Desktop Navigation */}
        <nav className="navbar-desktop">
          {navLinks.map((link, index) => {
            const active = isActive(link.href);

            return (
              <motion.a
                key={link.href}
                href={link.href}
                className={active ? "active" : ""}
                initial={{
                  opacity: 0,
                  y: -10,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.4,
                  delay: 0.1 * index,
                }}
                whileHover={{
                  y: -2,
                }}
              >
                {link.label}
              </motion.a>
            );
          })}
        </nav>

        {/* Get in Touch */}
        <motion.a
          href="/contact"
          className="navbar-cta"
          initial={{
            opacity: 0,
            scale: 0.95,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.4,
            delay: 0.4,
          }}
          whileHover={{
            scale: 1.03,
          }}
        >
          <span>Get in Touch</span>
          <span className="navbar-cta-arrow">→</span>
        </motion.a>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="navbar-menu-button"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={25} /> : <Menu size={25} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            className="navbar-mobile"
            initial={{
              opacity: 0,
              height: 0,
            }}
            animate={{
              opacity: 1,
              height: "auto",
            }}
            exit={{
              opacity: 0,
              height: 0,
            }}
            transition={{
              duration: 0.3,
            }}
          >
            {navLinks.map((link) => {
              const active = isActive(link.href);

              return (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className={active ? "active" : ""}
                  initial={{
                    opacity: 0,
                    x: -15,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    duration: 0.25,
                  }}
                >
                  {link.label}
                </motion.a>
              );
            })}

            {/* Mobile Get in Touch */}
            <motion.a
              href="/contact"
              onClick={closeMenu}
              initial={{
                opacity: 0,
                x: -15,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.25,
                delay: 0.1,
              }}
              className="navbar-mobile-cta"
            >
              Get in Touch →
            </motion.a>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}