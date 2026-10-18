"use client";

import { useRef } from "react";
import Phone from "./Phone";
import { SCREENS } from "@/lib/config";

const byId = (id: string) => SCREENS.find((s) => s.id === id)!;

export default function HeroPhones() {
  const groupRef = useRef<HTMLDivElement>(null);

  const onMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "mouse") return;
    const group = groupRef.current;
    if (!group) return;
    const r = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    group.style.setProperty("--ry", `${-16 + x * 12}deg`);
    group.style.setProperty("--rx", `${8 - y * 10}deg`);
  };

  const onLeave = () => {
    const group = groupRef.current;
    if (!group) return;
    group.style.removeProperty("--ry");
    group.style.removeProperty("--rx");
  };

  const main = byId("home");
  const left = byId("community");
  const right = byId("profile");

  return (
    <div className="stage" onPointerMove={onMove} onPointerLeave={onLeave}>
      <div className="stage-group" ref={groupRef}>
        <div className="slot slot--left">
          <Phone src={left.src} alt={left.alt} priority sizes="(max-width: 800px) 30vw, 240px" />
        </div>
        <div className="slot slot--right">
          <Phone src={right.src} alt={right.alt} priority sizes="(max-width: 800px) 30vw, 240px" />
        </div>
        <div className="slot slot--main">
          <Phone src={main.src} alt={main.alt} priority sizes="(max-width: 800px) 30vw, 240px" />
        </div>
      </div>
    </div>
  );
}
