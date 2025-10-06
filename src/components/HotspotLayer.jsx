import { useState, useRef, useEffect } from "react";

export default function HotspotLayer({
  hotspots = [],
  onHotspotActivate,
  onHoldChange,
  onProgressChange,
  onCursorMove,
}) {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [progress, setProgress] = useState(0);
  const [activeHotspot, setActiveHotspot] = useState(null);
  const [hoveredHotspot, setHoveredHotspot] = useState(null); // 🆕
  const intervalRef = useRef(null);

  const updateCursor = (e) => {
    const pos = { x: e.clientX, y: e.clientY };
    setCursorPos(pos);
    onCursorMove?.(pos);
  };

  const handleMouseDown = (e, hotspot) => {
    updateCursor(e);
    setActiveHotspot(hotspot);
    setProgress(0);
    onHoldChange?.(true);
    onProgressChange?.(0);

    intervalRef.current = setInterval(() => {
      setProgress((prev) => {
        const next = prev + 3;
        onProgressChange?.(next);

        if (next >= 100) {
          clearInterval(intervalRef.current);
          onHoldChange?.(false);
          onProgressChange?.(0);
          onHotspotActivate(hotspot.next);
          return 100;
        }
        return next;
      });
    }, 30);
  };

  const handleMouseUp = () => {
    clearInterval(intervalRef.current);
    setProgress(0);
    setActiveHotspot(null);
    onHoldChange?.(false);
    onProgressChange?.(0);
  };

  useEffect(() => {
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("mousemove", updateCursor);
    return () => {
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("mousemove", updateCursor);
    };
  }, []);

  return (
    <>
      {hotspots.map((spot) => (
        <div
          key={spot.id}
          onMouseDown={(e) => handleMouseDown(e, spot)}
          onMouseEnter={() => setHoveredHotspot(spot)}
          onMouseLeave={() => setHoveredHotspot(null)}
          style={{
            position: "absolute",
            left: spot.x,
            top: spot.y,
            width: spot.width,
            height: spot.height,
            transform: "translate(-90%, -50%)",
            cursor: "pointer",
            border:
              hoveredHotspot === spot
                ? "2px solid rgba(255,255,255,0.6)"
                : "2px solid transparent",
            transition: "border 0.2s ease",
          }}
        >
          {/* 🆕 Подсказка при наведении */}
          {hoveredHotspot === spot && spot.label && (
            <div
              style={{
                position: "absolute",
                bottom: "110%",
                left: "50%",
                transform: "translateX(-50%)",
                background: "rgba(0,0,0,0.75)",
                color: "#fff",
                padding: "6px 10px",
                borderRadius: "8px",
                fontSize: "14px",
                whiteSpace: "nowrap",
                pointerEvents: "none",
                zIndex: 9999,
              }}
            >
              {spot.label}
            </div>
          )}
        </div>
      ))}

      {activeHotspot && progress > 0 && (
        <div
          className="fixed pointer-events-none"
          style={{
            left: cursorPos.x - 25,
            top: cursorPos.y - 25,
            width: 50,
            height: 50,
            borderRadius: "50%",
            border: "3px solid rgba(255,255,255,0.6)",
            background: `conic-gradient(#00ffcc ${progress * 3.6}deg, transparent 0deg)`,
            zIndex: 9999,
          }}
        />
      )}
    </>
  );
}