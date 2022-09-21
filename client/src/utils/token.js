const token = {
  get: () => localStorage.getItem('adminToken'),
  set: (key, value) => localStorage.setItem(key, value),
  remove: () => localStorage.removeItem('adminToken'),
};

export default token;
