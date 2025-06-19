export async function loadNovelData(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to load novel data: ${response.status}`);
  }
  return response.json();
}
