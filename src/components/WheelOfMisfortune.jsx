import React, { useRef, useState, useEffect } from "react";
import * as Icons from "react-icons/fa";
import { fatiguePhrases } from "../data/fatiguePhrases"; // <- esto sí existe
import AdEmbed from "./AdEmbed";



const SmartWheel = ({ size = 300 }) => {
  const radius = size / 2;
  const center = radius;
  const [slices, setSlices] = useState([]);
  const anglePerSlice = 360 / (slices.length || 1);
  const [fatigueMsg, setFatigueMsg] = useState("");
  const [isSpinning, setIsSpinning] = useState(false);
  const [spinCount, setSpinCount] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [protest, setProtest] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [allowedExtraSpin, setAllowedExtraSpin] = useState(false);
  const wheelRef = useRef();

  useEffect(() => {
    fetch("/wheelSlices.json")
      .then((res) => res.json())
      .then((data) => setSlices(data))
      .catch(() => {
        console.warn("No se pudo cargar el archivo JSON de la ruleta. Probablemente lo olvidaste.");
      });
  }, []);

  const polarToCartesian = (cx, cy, r, angle) => {
    const rad = ((angle - 90) * Math.PI) / 180;
    return {
      x: cx + r * Math.cos(rad),
      y: cy + r * Math.sin(rad),
    };
  };

  const describeSlice = (start, end) => {
    const startPos = polarToCartesian(center, center, radius, end);
    const endPos = polarToCartesian(center, center, radius, start);
    const largeArc = end - start <= 180 ? 0 : 1;
    return [
      `M ${center} ${center}`,
      `L ${startPos.x} ${startPos.y}`,
      `A ${radius} ${radius} 0 ${largeArc} 0 ${endPos.x} ${endPos.y}`,
      "Z",
    ].join(" ");
  };

  const spin = () => {
    if (isSpinning || slices.length === 0) return;

    const index = Math.floor(Math.random() * slices.length);
    const totalRotation = 360 * 3 + anglePerSlice * index + anglePerSlice / 2;
    const duration = Math.min(4 + spinCount * 1.8, 12);

    wheelRef.current.style.transition = "none";
    wheelRef.current.style.transform = `rotate(0deg) scale(1)`;
    void wheelRef.current.offsetWidth;

    wheelRef.current.style.transition = `transform ${duration}s cubic-bezier(0.33, 1, 0.68, 1)`;
    wheelRef.current.style.transform = `rotate(-${totalRotation}deg) scale(1.1)`;

    setIsSpinning(true);

    // Fatiga emocional
    let fatiguePool = fatiguePhrases.low;
    if (spinCount >= 3 && spinCount < 7) fatiguePool = fatiguePhrases.medium;
    if (spinCount >= 7) fatiguePool = fatiguePhrases.high;
    const msg = fatiguePool[Math.floor(Math.random() * fatiguePool.length)];
    setFatigueMsg(msg);

    setTimeout(() => {
      wheelRef.current.style.transform = `rotate(-${totalRotation}deg) scale(1)`;
      setIsSpinning(false);
      setSelectedIndex(index);
      setShowModal(true);

      const reward = slices[index].action;
      setAllowedExtraSpin(reward === "spin_again");
      setSpinCount((prev) => prev + 1);
    }, duration * 1000 + 200);
  };

  const handleClose = () => setShowModal(false);
  const handleResetProtest = () => {
    setProtest(false);
    setTimeout(() => setSpinCount(0), 4000);
  };

  const renderAction = (slice) => {
    switch (slice.action) {
      case "image_sfw":
      case "image_nsfw":
        return <div><img src={slice.content} alt="imagen" className="rounded mx-auto max-w-full max-h-40 mt-4" /><AdEmbed type="simpleScriptExoclick" /></div>;
      case "link":
        return (
          <div>
          <a
            href={slice.content}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline mt-2 block"
          >
            Visitá este enlace
          </a>
          <AdEmbed type="simpleScriptExoclick" /></div>
        );
      case "search":
        return (
          <div>
          <a
            href={`https://www.google.com/search?q=${encodeURIComponent(slice.content)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline mt-2 block"
          >
            Buscar: {slice.content}
          </a>
          <AdEmbed type="simpleScriptExoclick" /></div>
        );
      case "ad":
        return <div><AdEmbed type="simpleScriptExoclick" /></div>;
      case "spin_again":
        return<div> <p className="text-green-600 font-medium mt-4">{slice.content}</p> <AdEmbed type="simpleScriptExoclick" /></div>;
        
      case "text":
        return <div><p className="text-sm mt-2 text-zinc-600">{slice.content}</p><AdEmbed type="simpleScriptExoclick" /></div>;
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="relative" style={{ width: `${size}px`, height: `${size}px` }}>
        <div
          ref={wheelRef}
          className="absolute transition-transform duration-500 ease-in-out"
          style={{ width: size, height: size, transformOrigin: "50% 50%" }}
        >
          <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
          {slices.map((slice, i) => {
              const start = i * anglePerSlice;
              const end = start + anglePerSlice;
              const path = describeSlice(start, end);
              const iconPos = polarToCartesian(center, center, radius * 0.65, (start + end) / 2);
              const Icon = Icons[slice.icon] || Icons.FaQuestion;
              return (
                <g key={i}>
                  <path d={path} fill={slice.color} stroke="#fff" strokeWidth="2" />
                  <foreignObject
                    x={iconPos.x - 12}
                    y={iconPos.y - 12}
                    width="24"
                    height="24"
                  >
                    <div className="flex items-center justify-center text-white text-lg">
                      <Icon />
                    </div>
                  </foreignObject>
                </g>
              );
            })}
          </svg>
        </div>

        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 text-pink-500 text-2xl">▲</div>
      </div>

      <button
        onClick={protest ? handleResetProtest : spin}
        className="mt-6 px-6 py-2 bg-pink-600 text-white rounded-full shadow hover:bg-pink-700 transition"
      >
        {protest ? "Dale, ruleta... porfa" : isSpinning ? "Girando..." : "Girar la ruleta"}
      </button>

      {fatigueMsg && (
        <p className="text-sm text-slate-400 mt-3 italic text-center max-w-xs">{fatigueMsg}</p>
      )}

      {protest && (
        <p className="text-sm text-slate-400 mt-2 italic max-w-xs text-center">
          Necesito vacaciones. Y respeto.
        </p>
      )}

      {showModal && selectedIndex !== null && slices[selectedIndex] && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white text-zinc-800 p-6 rounded-xl shadow-xl max-w-sm text-center">
            <h3 className="text-lg font-bold mb-2">Resultado:</h3>
            <p className="text-pink-600 text-xl mb-4 font-semibold">
              {slices[selectedIndex].label}
            </p>
            
            {renderAction(slices[selectedIndex])}

            <button
              onClick={handleClose}
              className="mt-4 px-4 py-2 bg-zinc-800 text-white rounded hover:bg-zinc-700 transition"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SmartWheel;
