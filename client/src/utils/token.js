const token = {
  get: () => localStorage.getItem('adminToken'),
  set: (key, value) => localStorage.setItem(key, value),
};

export default token;
