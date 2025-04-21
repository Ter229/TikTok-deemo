export const request = async ({ path, method = "GET", body }) => {
  const url = `https://tiktok-video-no-watermark2.p.rapidapi.com/${path}`;

  const options = {
    method,
    headers: {
      "x-rapidapi-key": "2218709bb9mshadcf1208c5634afp129c27jsn89b8ee87dae4",
      "x-rapidapi-host": "tiktok-video-no-watermark2.p.rapidapi.com",
    },
  };

  if (body) options.body = body;

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log("API Data:", result);
    console.log("Expected feed data:", result.data);
    return result;
  } catch (error) {
    console.error(error);
  }
};

export const formatCompactNum = (num) => {
  const formatter = Intl.NumberFormat("en", {
    notation: "compact",
  });
  return formatter.format(num);
};
