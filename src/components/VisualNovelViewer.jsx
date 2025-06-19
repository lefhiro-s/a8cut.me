import React, { useState, useEffect, useRef } from "react";
import novelData from "../data/visualNovelData";
import { loadNovelData } from "../utils/loadNovelData";

/**
 * VisualNovelViewer
 *
 * Props:
 * - data: object or { scenes: [] } of scene data
 * - modeOptions: ["scroll", "pagination"]
 * - initialMode: "scroll" | "pagination"
 * - parallaxIntensity: multiplier for scroll parallax
 * - mouseParallaxIntensity: multiplier for mouse parallax
 * - enableScrollParallax: boolean
 * - enableMouseParallax: boolean
 * - renderControls: boolean to show mode toggles
 * - customClasses: overrides for wrapper, scrollContainer, bubble
 */
export default function VisualNovelViewer({
  data = novelData,
  modeOptions = ["scroll", "pagination"],
  initialMode = "scroll",
  parallaxIntensity = 0.3,
  mouseParallaxIntensity = 0.1,
  enableScrollParallax = true,
  enableMouseParallax = false,
  renderControls = true,
  customClasses = {}
}) {
  const [mode, setMode] = useState(initialMode);
  const [page, setPage] = useState(0);
  const [novel, setNovel] = useState(
    typeof data === "string" ? null : data
  );
  const containerRef = useRef(null);

  useEffect(() => {
    if (typeof data === "string") {
      loadNovelData(data)
        .then(setNovel)
        .catch((err) => console.error(err));
    } else {
      setNovel(data);
    }
  }, [data]);

  // Normalize scenes array when data available
  const scenes = Array.isArray(novel?.scenes)
    ? novel.scenes
    : novel
    ? Object.values(novel)
    : [];
  const currentScene = scenes[page];

  // Parallax: scroll + mouse
  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;
    const handleScroll = (e) => {
      if (!enableScrollParallax || mode !== "scroll") return;
      const scrollTop = node.scrollTop;
      const bubbles = node.querySelectorAll("[data-parallax-speed]");
      bubbles.forEach(el => {
        const speed = parseFloat(el.dataset.parallaxSpeed) || parallaxIntensity;
        // preserve any mouse offset stored
        const [mouseX = 0, mouseY = 0] = el._mouseOffset || [0, 0];
        const y = scrollTop * speed + mouseY;
        el.style.transform = `translate(${mouseX}px, ${y}px)`;
      });
    };

    const handleMouse = (e) => {
      if (!enableMouseParallax) return;
      const rect = node.getBoundingClientRect();
      const relX = (e.clientX - rect.left) / rect.width - 0.5;
      const relY = (e.clientY - rect.top) / rect.height - 0.5;
      const bubbles = node.querySelectorAll("[data-mouse-parallax-speed]");
      bubbles.forEach(el => {
        const mSpeed = parseFloat(el.dataset.mouseParallaxSpeed) || mouseParallaxIntensity;
        const x = relX * mSpeed * rect.width;
        const y = relY * mSpeed * rect.height;
        // store mouse offset for scroll calculations
        el._mouseOffset = [x, y];
        // also apply scroll if needed
        const scrollTop = (mode === "scroll" && enableScrollParallax) ? node.scrollTop : 0;
        const speed = parseFloat(el.dataset.parallaxSpeed) || parallaxIntensity;
        const scrollY = scrollTop * speed;
        el.style.transform = `translate(${x}px, ${scrollY + y}px)`;
      });
    };

    node.addEventListener("scroll", handleScroll);
    node.addEventListener("mousemove", handleMouse);
    return () => {
      node.removeEventListener("scroll", handleScroll);
      node.removeEventListener("mousemove", handleMouse);
    };
  }, [mode, parallaxIntensity, mouseParallaxIntensity, enableScrollParallax, enableMouseParallax]);

  if (!novel) {
    return <div>Loading...</div>;
  }

  const goNext = () => setPage(p => Math.min(p + 1, scenes.length - 1));
  const goPrev = () => setPage(p => Math.max(p - 1, 0));

  return (
    <div ref={containerRef} className={`${customClasses.wrapper || "bg-zinc-900 text-white rounded-xl shadow-lg overflow-hidden"}`} style={{ position: 'relative' }}>
      {renderControls && (
        <div className="flex gap-2 p-4 justify-center">
          {modeOptions.map(m => (
            <button
              key={m}
              onClick={() => setMode(m)}
              className={`py-2 px-4 rounded ${mode === m ? "bg-pink-600 text-white" : "bg-gray-700 text-gray-300"}`}
            >
              {m === "scroll" ? "Infinite Scroll" : "Pagination"}
            </button>
          ))}
        </div>
      )}

      {/* Scroll Mode */}
      {mode === "scroll" && (
        <div className={`${customClasses.scrollContainer || "h-[80vh] overflow-auto space-y-8 p-4"}`}>
          {scenes.map((scene, idx) => (
            <div key={scene.id || idx} className="relative border-b border-gray-700 pb-8">
              <img
                src={`/sprites/novel/${scene.image}`}
                alt={scene.id}
                loading="lazy"
                className="w-full  h-full  object-cover rounded-md"
              />
              {scene.texts.map((bubble, bi) => (
                <div
                  key={bi}
                  data-parallax-speed={bubble.parallaxSpeed ?? parallaxIntensity}
                  data-mouse-parallax-speed={bubble.mouseParallaxSpeed ?? mouseParallaxIntensity}
                  style={{
                    position: 'absolute',
                    left: `${bubble.x}%`,
                    top: `${bubble.y}%`,
                    transform: 'translate(0,0)',
                    transition: 'transform 0.1s ease-out'
                  }}
                  className={`${customClasses.bubble || ''} p-2 bg-black bg-opacity-50 rounded-lg text-lg`}
                >
                  <p>{bubble.content}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      )}

      {/* Pagination Mode */}
      {mode === "pagination" && (
        <div className="p-4 flex flex-col items-center justify-center space-y-4">
          <div className="relative w-full  overflow-hidden">
            <img
              src={`/sprites/novel/${currentScene.image}`}
              alt={currentScene.id}
              loading="lazy"
              className="w-full h-full object-cover rounded-md border-b-2 border-pink-500"
            />
            {currentScene.texts.map((bubble, bi) => (
              <div
                key={bi}
                data-parallax-speed={bubble.parallaxSpeed ?? parallaxIntensity}
                data-mouse-parallax-speed={bubble.mouseParallaxSpeed ?? mouseParallaxIntensity}
                style={{
                  position: 'absolute',
                  left: `${bubble.x}%`,
                  top: `${bubble.y}%`,
                  transform: 'translate(0,0)',
                  transition: 'transform 0.1s ease-out'
                }}
                className={`${customClasses.bubble || ''} p-2 bg-black bg-opacity-50 rounded-lg text-lg`}
              >
                <p>{bubble.content}</p>
              </div>
            ))}
          </div>
          <div className="flex gap-4">
            <button onClick={goPrev} disabled={page === 0} className="px-4 py-2 bg-gray-700 rounded disabled:opacity-50">
              Prev
            </button>
            <button onClick={goNext} disabled={page === scenes.length - 1} className="px-4 py-2 bg-gray-700 rounded disabled:opacity-50">
              Next
            </button>
          </div>
          <p className="text-sm text-gray-400">Page {page + 1} of {scenes.length}</p>
        </div>
      )}
    </div>
  );
}
