"use client";

import { type RefObject, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

export type ScrollProgressPosition =
  | "left"
  | "right"
  | "bottom-left"
  | "bottom-right";

const POSITION_CLASSES: Record<ScrollProgressPosition, string> = {
  left: "left-2 sm:left-4 top-1/2 -translate-y-1/2",
  right: "right-2 sm:right-4 top-1/2 -translate-y-1/2",
  "bottom-left": "left-2 bottom-2",
  "bottom-right": "right-2 bottom-2",
};

const LABEL_SIDE: Record<ScrollProgressPosition, "left" | "right"> = {
  left: "right",
  right: "left",
  "bottom-left": "right",
  "bottom-right": "left",
};

function getProgress(el: HTMLElement | null): number {
  const scrollTop = el ? el.scrollTop : window.scrollY;
  const scrollable = el
    ? el.scrollHeight - el.clientHeight
    : document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
  if (scrollable <= 0) return 0;
  return Math.min(100, Math.max(0, (scrollTop / scrollable) * 100));
}

function Ticks({ count, tone }: { count: number; tone: "solid" | "muted" }) {
  return (
    <div className="flex h-full flex-col justify-between">
      {Array.from({ length: count }, (_, i) => (
        <span
          aria-hidden="true"
          className={cn(
            "block h-px w-full transition-colors",
            tone === "solid" ? "bg-[#DC2626]" : "bg-zinc-300/80"
          )}
          key={i}
        />
      ))}
    </div>
  );
}

export type ScrollProgressProps = {
  position?: ScrollProgressPosition;
  tickCount?: number;
  height?: number;
  width?: number;
  showLabel?: boolean;
  container?: RefObject<HTMLElement | null>;
  className?: string;
};

export function ScrollProgress({
  position = "right",
  tickCount = 36,
  height = 180,
  width = 12,
  showLabel = true,
  container,
  className,
}: ScrollProgressProps) {
  const fillRef = useRef<HTMLDivElement>(null);
  const labelWrapRef = useRef<HTMLDivElement>(null);
  const labelTextRef = useRef<HTMLSpanElement>(null);
  const labelSide = LABEL_SIDE[position];

  useEffect(() => {
    const target: HTMLElement | Window = container?.current ?? window;

    const update = () => {
      const pct = getProgress(container?.current ?? null);
      const pctStr = `${pct}%`;
      if (fillRef.current) fillRef.current.style.height = pctStr;
      if (labelWrapRef.current) labelWrapRef.current.style.top = pctStr;
      if (labelTextRef.current)
        labelTextRef.current.textContent = String(Math.round(pct));
    };

    update();
    target.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update, { passive: true });

    return () => {
      target.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [container]);

  return (
    <div
      className={cn(
        "pointer-events-none z-50 select-none hidden md:block",
        container ? "absolute" : "fixed",
        POSITION_CLASSES[position],
        className
      )}
      data-position={position}
      data-slot="scroll-progress"
    >
      <div className="relative" style={{ height, width }}>
        <Ticks count={tickCount} tone="muted" />

        <div
          className="absolute inset-x-0 top-0 overflow-hidden"
          ref={fillRef}
          style={{ height: "0%" }}
        >
          <div style={{ height, width: "100%" }}>
            <Ticks count={tickCount} tone="solid" />
          </div>
        </div>

        {showLabel && (
          <div
            className={cn(
              "absolute flex items-center gap-1.5",
              labelSide === "right"
                ? "left-full -translate-y-1/2 pl-2"
                : "right-full -translate-y-1/2 flex-row-reverse pr-2"
            )}
            ref={labelWrapRef}
            style={{ top: "0%" }}
          >
            <span aria-hidden="true" className="h-px w-2.5 bg-[#DC2626]" />
            <span
              className="font-mono font-semibold text-[#991B1B] text-[11px] tabular-nums bg-white/90 px-1.5 py-0.5 rounded shadow-xs border border-red-200/60"
              ref={labelTextRef}
            >
              0
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
