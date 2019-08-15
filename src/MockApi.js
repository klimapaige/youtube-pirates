//import YouTubeSample from "../example-youtube-response.json";

const wait = async (stallTime = 1500) =>
  await new Promise(resolve => setTimeout(resolve, stallTime));

export const fetchVideos = async ({ query }) => {
  await wait();
  console.log(query);
};

export const fetchUrl = ({ id: { videoId: id } }) =>
  `https://youtube.com/watch?v=${id}`;
