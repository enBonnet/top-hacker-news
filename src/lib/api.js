const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": import.meta.env.VITE_XAPIKEY ?? "",
    "X-RapidAPI-Host": "community-hacker-news-v1.p.rapidapi.com",
  },
};

const urlParams = ".json?print=pretty";
const baseUrl = "https://community-hacker-news-v1.p.rapidapi.com";
const itemUrl = (id) => `${baseUrl}/item/${id}${urlParams}`;
const topstoriesUrl = `${baseUrl}/topstories${urlParams}`;

export const getTopstories = async () => {
  const res = await fetch(topstoriesUrl, options);
  const data = await res.json();
  return data;
};

export const getItem = async (id) => {
  const res = await fetch(itemUrl(id), options);
  const data = await res.json();
  return data;
};

export const getItems = async (start = 0, end = 25) => {
  const topstories = await getTopstories();
  const twentyFiveStories = topstories.slice(start, end);
  const itemsData = twentyFiveStories.map((itemId) => {
    const data = getItem(itemId);
    return data;
  });
  return Promise.all(itemsData);
};
