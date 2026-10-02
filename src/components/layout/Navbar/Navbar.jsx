"use client";

import "@/lib/syncfusion";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import { SidebarComponent } from "@syncfusion/ej2-react-navigations";
import { ButtonComponent } from "@syncfusion/ej2-react-buttons";

import {
  ChevronRight,
  Mail,
  Menu,
  Phone,
  X,
} from "lucide-react";

import "./Navbar.css";
import HeaderAnimation from "./HeaderAnimation/HeaderAnimation";

const COMPACT_AT = 90;
const EXPAND_AT = 30;

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Why Us", href: "/why-us" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

const site = {
  name: "RUDD Private Limited",
  email: "info@ruddprivatelimited.com",
  phone: "+91 00000 00000",
  phoneHref: "+910000000000",
};

export default function Navbar() {
  const pathname = usePathname();

  const sidebarRef = useRef(null);
  const brandRef = useRef(null);
  const headerRef = useRef(null);

  const [compact, setCompact] = useState(false);

  useEffect(() => {
    let ticking = false;

    const onScroll = () => {
      if (ticking) return;

      ticking = true;

      requestAnimationFrame(() => {
        const y = window.scrollY;

        setCompact((current) =>
          current ? y > EXPAND_AT : y > COMPACT_AT
        );

        ticking = false;
      });
    };

    onScroll();

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    const measure = () => {
      const inner = brandRef.current?.parentElement;
      const header = headerRef.current;

      if (!inner || !header) return;

      const styles = getComputedStyle(inner);

      const left =
        inner.getBoundingClientRect().left +
        parseFloat(styles.paddingLeft || "0");

      const edge = window.innerWidth < 768 ? 16 : 28;

      header.style.setProperty(
        "--logo-shift",
        `${Math.max(0, left - edge)}px`
      );
    };

    measure();

    window.addEventListener("resize", measure);

    return () => {
      window.removeEventListener("resize", measure);
    };
  }, []);

  // Close sidebar whenever the route changes
  useEffect(() => {
    sidebarRef.current?.hide();
  }, [pathname]);

  const isActive = (href) =>
    href === "/"
      ? pathname === "/"
      : pathname.startsWith(href);

  const openSidebar = () => {
    sidebarRef.current?.show();
  };

  const closeSidebar = () => {
    sidebarRef.current?.hide();
  };

  return (
    <>
      {/* =========================
          MAIN HEADER
      ========================== */}
      <header
        ref={headerRef}
        className={`site-header ${
          compact ? "is-compact" : ""
        }`}
      >
        <div
          className="header-stage"
          aria-hidden="true"
        >
          <HeaderAnimation active={compact} />

          <span className="header-stage__glow" />

          <span className="header-stage__tagline">
            Building a{" "}
            <span>Smarter Tomorrow</span>
          </span>
        </div>

        <div className="container site-header__inner">
          {/* LOGO */}
          <Link
            href="/"
            ref={brandRef}
            className="brand"
            aria-label={`${site.name} home`}
          >
            <Image
              className="brand__dark"
              src="/brand/logo.png"
              alt={site.name}
              width={190}
              height={80}
              priority
            />
          </Link>

          {/* DESKTOP NAVIGATION */}
          <nav
            className="main-nav"
            aria-label="Main navigation"
            aria-hidden={compact || undefined}
          >
            {navLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                className={
                  isActive(link.href)
                    ? "is-active"
                    : ""
                }
                style={{
                  transitionDelay: `${
                    (compact
                      ? index
                      : navLinks.length - 1 - index) *
                    35
                  }ms`,
                }}
                tabIndex={
                  compact ? -1 : undefined
                }
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* DESKTOP CTA */}
          <div
            className="header-cta"
            aria-hidden={compact || undefined}
          >
            <Link
              href="/contact"
              className="header-cta__button"
            >
              <span>Get In Touch</span>
              <span className="header-cta__arrow">
                →
              </span>
            </Link>
          </div>

          {/* COMPACT MENU BUTTON */}
          <ButtonComponent
            cssClass="menu-toggle"
            aria-label="Open menu"
            onClick={openSidebar}
          >
            <Menu />
          </ButtonComponent>
        </div>
      </header>

      {/* HEADER SPACER */}
      <div
        className="header-spacer"
        aria-hidden="true"
      />

      {/* =========================
          RIGHT SIDEBAR
      ========================== */}
      <SidebarComponent
        ref={sidebarRef}
        className="mobile-nav"
        type="Over"
        position="Right"
        width="320px"
        showBackdrop={true}
        closeOnDocumentClick={true}
        // isOpen={false}
        created={() => {
    sidebarRef.current?.hide();
  }}
      >
        <div className="mobile-nav__inner">

          {/* SIDEBAR TOP */}
          <div className="mobile-nav__top">
            <Link
              href="/"
              className="mobile-nav__brand"
              aria-label={`${site.name} home`}
              onClick={closeSidebar}
            >
              <Image
                src="/brand/logo.png"
                alt={site.name}
                width={190}
                height={80}
              />
            </Link>

            <ButtonComponent
              cssClass="mobile-nav__close"
              aria-label="Close menu"
              onClick={closeSidebar}
            >
              <X size={21} />
            </ButtonComponent>
          </div>

          {/* SIDEBAR LINKS */}
          <nav
            className="mobile-nav__links"
            aria-label="Mobile navigation"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={
                  isActive(link.href)
                    ? "is-active"
                    : ""
                }
                onClick={closeSidebar}
              >
                <span>{link.label}</span>
                <ChevronRight />
              </Link>
            ))}
          </nav>

          {/* SIDEBAR CTA */}
          <div className="mobile-nav__cta">
            <Link
              href="/contact"
              onClick={closeSidebar}
            >
              <span>Get In Touch</span>
              <span>→</span>
            </Link>
          </div>

          {/* CONTACT */}
          <div className="mobile-nav__contact">
            <a
              href={`mailto:${site.email}`}
            >
              <Mail />
              <span>{site.email}</span>
            </a>

            <a
              href={`tel:${site.phoneHref}`}
            >
              <Phone />
              <span>{site.phone}</span>
            </a>
          </div>

        </div>
      </SidebarComponent>
    </>
  );
}