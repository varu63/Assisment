const BASE_URL = "http://localhost:3000/api/cells";

export const fetchCells = async () => {
  const res = await fetch(BASE_URL);
  return res.json();
};