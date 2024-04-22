export const logout = (): void => {
  localStorage.clear();
  window.history.pushState(null, null, "/login");
};
