import React, { useEffect, useRef } from "react";
import { adSnippets } from "../config/adConfig";

const AdEmbed = ({ type = "simpleScriptExoclick" }) => {
  const containerRef = useRef();

  useEffect(() => {
    const snippets = adSnippets();
    const adHTML = snippets[type];

    if (!adHTML || !containerRef.current) return;

    containerRef.current.innerHTML = "";

    const temp = document.createElement("div");
    temp.innerHTML = adHTML;

    Array.from(temp.childNodes).forEach((node) => {
      if (node.tagName === "SCRIPT") {
        const script = document.createElement("script");
        Array.from(node.attributes).forEach((attr) =>
          script.setAttribute(attr.name, attr.value)
        );
        script.textContent = node.textContent;
        containerRef.current.appendChild(script);
      } else {
        containerRef.current.appendChild(node);
      }
    });
  }, [type]);

  return <div ref={containerRef} className="mt-4" />;
};

export default AdEmbed;
