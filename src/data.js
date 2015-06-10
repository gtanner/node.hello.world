var data = {
  name: 'Gord',
  title: 'Welcome to node',
  version: process.version
};

module.exports = {
  get: function () {
    return data;
  }
};
