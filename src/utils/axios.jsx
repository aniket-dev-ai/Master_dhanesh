import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3", // Corrected `baseUrl` to `baseURL`
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMWZiOWMxNjk5NmRiNDFiZjM1ZWNjZTFkNjRlZWQyYSIsIm5iZiI6MTczNzY0MzYzNC40NTQwMDAyLCJzdWIiOiI2NzkyNTY3MjdjMmRhMjFjMDZiNThiY2QiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.1MV-HqVS0YFWQJheUkssKU4aijoSY7wj0Mi1KCRqxhQ",
  },
});

export default instance;
