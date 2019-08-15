export const fetchVideos = async ({ query }) => {
  let response = await youtube.search.list({
    q: query,
    type: "video",
    part: "snippet"
  });
  return response.items;
};

export const fetchUrl = ({ id: { videoId: id } }) =>
  `https://youtube.com/watch?v=${id}`;
