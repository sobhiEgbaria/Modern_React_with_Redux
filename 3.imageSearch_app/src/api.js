import axios from "axios";

export const SearchRequest = async (term) => {
  const URL = "https://api.unsplash.com/search/photos";
  const res = await axios.get(URL, {
    headers: {
      Authorization: "Client-ID 5LLT5i5QEzlQIwQ08fTzcCOpMcbiwnuQWAeUYxQl35w",
    },
    params: {
      query: term,
    },
  });
  return res.data.results;
};
