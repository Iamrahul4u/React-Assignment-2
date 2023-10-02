const url = "http://localhost:5000/cities";
const getCarsData = async () => {
  const res = await fetch(url);
  const data = await res.json();
  return data;
};

export { getCarsData };
