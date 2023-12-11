import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID 5LLT5i5QEzlQIwQ08fTzcCOpMcbiwnuQWAeUYxQl35w",
  },
});
