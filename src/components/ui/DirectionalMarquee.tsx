import React, { useRef, useEffect } from "react";
import gsap from "gsap";

interface MarqueeProps {
  items: string[];
  direction?: "left" | "right";
  speed?: number; // pixels per second
}

const DirectionalMarquee: React.FC<MarqueeProps> = ({ items, direction = "left", speed = 60 }) => {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!marqueeRef.current || !innerRef.current) return;
    const marqueeWidth = innerRef.current.offsetWidth;
    const containerWidth = marqueeRef.current.offsetWidth;
    const totalDistance = marqueeWidth + containerWidth;
    const duration = totalDistance / speed;

    const anim = gsap.fromTo(
      innerRef.current,
      {
        x: direction === "left" ? 0 : -marqueeWidth,
      },
      {
        x: direction === "left" ? -marqueeWidth : 0,
        duration,
        ease: "none",
        repeat: -1,
      }
    );
    return () => {
      anim.kill();
    };
  }, [direction, speed, items]);

  return (
    <div
      ref={marqueeRef}
      style={{ overflow: "hidden", width: "100%", position: "relative" }}
      className="marquee-outer"
    >
      <div
        ref={innerRef}
        style={{ display: "flex", gap: "2rem", whiteSpace: "nowrap" }}
        className="marquee-inner"
      >
        {items.concat(items).map((item, i) => (
          <div
            key={i}
            className="bg-card border border-border px-8 py-4 rounded-lg text-lg font-semibold shadow-sm flex items-center min-w-[220px] max-w-[320px] justify-center overflow-hidden text-ellipsis whitespace-nowrap"
            title={item}
          >
            <span className="block w-full text-center truncate">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DirectionalMarquee;
