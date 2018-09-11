
  const proxy = [
    {
      context: '/hk',
      target: 'https://secure-fjord-49277.herokuapp.com',
      pathRewrite: {'^/hk' : ''}
    }
  ];
  module.exports = proxy;