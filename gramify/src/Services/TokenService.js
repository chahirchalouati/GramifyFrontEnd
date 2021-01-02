export const tokenStore = {
  getToken: () => {
    return localStorage.getItem("token");
  },
  storeToken: (token) => {
    return localStorage.setItem("token", token);
  },
  removeToken: () => {
    return localStorage.removeItem("token");
  },
};
