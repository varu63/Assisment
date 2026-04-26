const BASE_URL = "https://assisment-ke6h.onrender.com/api/cells";

export const fetchCells = async () => {
  const res = await fetch(BASE_URL);
  return res.json();
};