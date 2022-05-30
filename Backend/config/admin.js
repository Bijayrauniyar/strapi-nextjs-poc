module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '61bf7afeec2f7669d2de502c22e7e074'),
  },
});
