import axios from 'axios'

const KEY = 'AIzaSyCPTU0dfx3IwS4RGgBnxk_SAjLxYbapvVE';

export const baseParams = {
  part: "snippet",
  maxResults: 5,
  key: KEY
};

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3"
});