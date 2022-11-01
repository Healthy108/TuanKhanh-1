import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
// const TOKEN =
//   JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser
//     .accessToken || "";

const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
const currentUser = user && JSON.parse(user).currentUser;
const TOKEN = currentUser?.accessToken;

// const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYzU0YmUzYjExZGQyYjk4MDFlYWQ3YiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0NDYzMjgwMSwiZXhwIjoxNjQ0ODkyMDAxfQ.6TkHB3kX6gzWzinlosBaqgACNvUdKMLOEoql-6rR_Yg"

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
