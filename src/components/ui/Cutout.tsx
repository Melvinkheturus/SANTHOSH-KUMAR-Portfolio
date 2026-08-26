import React from "react";

/**
 * Inverted fillet SVG component for concave rounded corners.
 * Renders an exact circular arc cutout where a convex corner meets an adjacent edge.
 */

interface ConcaveFilletProps {
  position: "top-right" | "top-left" | "bottom-right" | "bottom-left";
  size?: number;
  color?: string;
  className?: string;
}

export function ConcaveFillet({
  position,
  size = 20,
  color = "#ffffff",
  className = "",
}: ConcaveFilletProps) {
  // SVG paths for the 4 corner orientations of concave fillet
  const paths = {
    // Notch at bottom-right, fillet at top-right of notch (meets right edge)
    "top-right": `M${size} 0 A ${size} ${size} 0 0 0 0 ${size} L ${size} ${size} Z`,
    // Notch at bottom-right, fillet at bottom-left of notch (meets bottom edge)
    "bottom-left": `M0 ${size} A ${size} ${size} 0 0 0 ${size} 0 L ${size} ${size} Z`,
    // Notch at top-right, fillet at top-left of notch (meets top edge)
    "top-left": `M0 0 A ${size} ${size} 0 0 0 ${size} ${size} L ${size} 0 Z`,
    // Notch at top-right, fillet at bottom-right of notch (meets right edge)
    "bottom-right": `M${size} ${size} A ${size} ${size} 0 0 0 0 0 L ${size} 0 Z`,
  };

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill={color}
      className={`pointer-events-none ${className}`}
      aria-hidden="true"
    >
      <path d={paths[position]} />
    </svg>
  );
}
