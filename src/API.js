export const fetchGiphs = async (query, page, updateGiphs) => {
  const res = await fetch(
    `https://api.giphy.com/v1/gifs/search?api_key=${
      process.env.REACT_APP_GIPHY_KEY
    }&limit=10&q=${query}&offset=${page * 10 - 10}`
  );
  const response = await res.json();
  console.log(response.data);
  updateGiphs(response.data);
};
