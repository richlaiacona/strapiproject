module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'eb6bd1117554c1efd31c1bc1d0a613d4'),
  },
});
