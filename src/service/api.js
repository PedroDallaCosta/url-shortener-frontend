const DOMAIN = import.meta.env.REACT_APP_DOMAIN || "localhost:5173";
const PROTOCOL_APP = import.meta.env.REACT_APP_PROTOCOL || "http";

export const createShortUrl = async (data) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // Simulate API call to create a short URL
  const response = {
    url: "/url/u512n312mas",
    shortUrl: `${PROTOCOL_APP}://${DOMAIN}/details/u512n312mas`,
    sucess: true,
    error: {
      message: "API is not defined",
      status: 401
    }
  }

  if (!response.sucess) return response;
  return { success: true, shortUrl: response.shortUrl, url: response.url };
};

export const getUrlDetails = async (shortId) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // Simulate API call to get URL details
  const response = {
    url: `${PROTOCOL_APP}://${DOMAIN}/u512n312mas`,
    shortId: shortId,
    totalClicks: 100,
    uniqueClicks: 75,
    referrer: "dopenuis.com",
    createdAt: "2023-10-01T12:00:00Z",
    expiresAt: "2024-10-01T12:00:00Z",
    passwordProtected: false,
  };

  return { success: true, data: response };
};

export const loginUser = async(user) => {
  // Simulate API call to login
  const response = {
    success: true,
    error: {
      status: 401,
      message: "Invalid credentials"
    }
  }

  return response
}