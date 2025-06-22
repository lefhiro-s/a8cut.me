let adSnippetsCache = null;

/**
 * Carga ads.json solo una vez
 */
export const loadAdSnippets = async () => {
  if (adSnippetsCache) return;

  try {
    const res = await fetch("/ads.json");
    const data = await res.json();
    adSnippetsCache = data;
  } catch (err) {
    console.error("Error cargando ads.json:", err);
    adSnippetsCache = {};
  }
};

/**
 * Devuelve el objeto de anuncios
 */
export const adSnippets = () => {
  if (!adSnippetsCache) {
    console.warn("❗ adSnippets aún no ha sido cargado. ¿Llamaste a loadAdSnippets()?");
    return {};
  }
  return adSnippetsCache;
};
