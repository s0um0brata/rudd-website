"use client";

import { useEffect, useRef } from "react";

export default function HeaderAnimation({ active }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas || !active) return;

    const ctx = canvas.getContext("2d");

    if (!ctx) return;

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let width = 0;
    let height = 0;
    let dpr = 1;

    let nodes = [];
    let streaks = [];

    const lanes = [0.28, 0.55, 0.8];

    let animationFrame = 0;
    let lastTime = performance.now();

    const random = (min, max) =>
      min + Math.random() * (max - min);

    const createStreak = (initial = false) => ({
      lane: Math.floor(Math.random() * lanes.length),
      x: initial
        ? random(0, width)
        : random(-300, -40),
      speed: random(260, 620),
      length: random(60, 160),
    });

    const resize = () => {
      const rect = canvas.getBoundingClientRect();

      dpr = Math.min(window.devicePixelRatio || 1, 2);

      width = rect.width;
      height = rect.height;

      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const nodeCount = Math.max(
        18,
        Math.round(width / 38)
      );

      nodes = Array.from(
        { length: nodeCount },
        () => ({
          x: random(0, width),
          y: random(4, Math.max(4, height - 4)),
          vx: random(-14, 14),
          vy: random(-6, 6),
          radius: random(0.8, 2),
        })
      );

      streaks = Array.from(
        {
          length: Math.max(
            4,
            Math.round(width / 260)
          ),
        },
        () => createStreak(true)
      );
    };

    const draw = (deltaTime) => {
      ctx.clearRect(0, 0, width, height);

      /*
       * Data lanes
       */
      ctx.lineWidth = 1;

      lanes.forEach((lane) => {
        ctx.strokeStyle =
          "rgba(70, 150, 255, 0.10)";

        ctx.beginPath();

        ctx.moveTo(
          0,
          lane * height
        );

        ctx.lineTo(
          width,
          lane * height
        );

        ctx.stroke();
      });

      /*
       * Moving network nodes
       */
      for (const node of nodes) {
        node.x += node.vx * deltaTime;
        node.y += node.vy * deltaTime;

        if (node.x < -10) {
          node.x = width + 10;
        }

        if (node.x > width + 10) {
          node.x = -10;
        }

        if (
          node.y < 2 ||
          node.y > height - 2
        ) {
          node.vy *= -1;
        }
      }

      /*
       * Connecting lines
       */
      const maxDistance = 120;

      for (
        let i = 0;
        i < nodes.length;
        i++
      ) {
        for (
          let j = i + 1;
          j < nodes.length;
          j++
        ) {
          const a = nodes[i];
          const b = nodes[j];

          const dx = a.x - b.x;
          const dy = a.y - b.y;

          const distance = Math.hypot(
            dx,
            dy
          );

          if (distance < maxDistance) {
            ctx.strokeStyle = `rgba(
              80,
              180,
              255,
              ${0.28 * (
                1 - distance / maxDistance
              )}
            )`;

            ctx.beginPath();

            ctx.moveTo(
              a.x,
              a.y
            );

            ctx.lineTo(
              b.x,
              b.y
            );

            ctx.stroke();
          }
        }
      }

      /*
       * Glowing nodes
       */
      for (const node of nodes) {
        const gradient =
          ctx.createRadialGradient(
            node.x,
            node.y,
            0,
            node.x,
            node.y,
            node.radius * 4
          );

        gradient.addColorStop(
          0,
          "rgba(190, 240, 255, 0.95)"
        );

        gradient.addColorStop(
          1,
          "rgba(40, 150, 255, 0)"
        );

        ctx.fillStyle = gradient;

        ctx.beginPath();

        ctx.arc(
          node.x,
          node.y,
          node.radius * 4,
          0,
          Math.PI * 2
        );

        ctx.fill();
      }

      /*
       * Light streaks
       */
      for (const streak of streaks) {
        streak.x +=
          streak.speed * deltaTime;

        const y =
          lanes[streak.lane] * height;

        const gradient =
          ctx.createLinearGradient(
            streak.x - streak.length,
            y,
            streak.x,
            y
          );

        gradient.addColorStop(
          0,
          "rgba(30, 140, 255, 0)"
        );

        gradient.addColorStop(
          0.7,
          "rgba(90, 200, 255, 0.55)"
        );

        gradient.addColorStop(
          1,
          "rgba(235, 250, 255, 1)"
        );

        ctx.strokeStyle = gradient;

        ctx.lineWidth = 2;
        ctx.lineCap = "round";

        ctx.beginPath();

        ctx.moveTo(
          streak.x - streak.length,
          y
        );

        ctx.lineTo(
          streak.x,
          y
        );

        ctx.stroke();

        /*
         * Streak head glow
         */
        const headGradient =
          ctx.createRadialGradient(
            streak.x,
            y,
            0,
            streak.x,
            y,
            9
          );

        headGradient.addColorStop(
          0,
          "rgba(255, 255, 255, 0.95)"
        );

        headGradient.addColorStop(
          1,
          "rgba(60, 170, 255, 0)"
        );

        ctx.fillStyle = headGradient;

        ctx.beginPath();

        ctx.arc(
          streak.x,
          y,
          9,
          0,
          Math.PI * 2
        );

        ctx.fill();

        if (
          streak.x - streak.length >
          width
        ) {
          Object.assign(
            streak,
            createStreak()
          );
        }
      }
    };

    const animationLoop = (time) => {
      const deltaTime = Math.min(
        0.05,
        (time - lastTime) / 1000
      );

      lastTime = time;

      draw(deltaTime);

      animationFrame =
        requestAnimationFrame(
          animationLoop
        );
    };

    resize();

    if (reduced) {
      draw(0);
    } else {
      animationFrame =
        requestAnimationFrame(
          animationLoop
        );
    }

    const handleVisibility = () => {
      cancelAnimationFrame(
        animationFrame
      );

      if (
        !document.hidden &&
        !reduced
      ) {
        lastTime = performance.now();

        animationFrame =
          requestAnimationFrame(
            animationLoop
          );
      }
    };

    window.addEventListener(
      "resize",
      resize
    );

    document.addEventListener(
      "visibilitychange",
      handleVisibility
    );

    return () => {
      cancelAnimationFrame(
        animationFrame
      );

      window.removeEventListener(
        "resize",
        resize
      );

      document.removeEventListener(
        "visibilitychange",
        handleVisibility
      );
    };
  }, [active]);

  return (
    <canvas
      ref={canvasRef}
      className="navbar-header-animation"
      aria-hidden="true"
    />
  );
}