module.exports = {
    // ...
    plugins: [
      // ...
      {
        name: 'users-permissions',
        config: {
          authentication: {
            secret: 'votre_secret_ici',
            token: {
              expiresIn: '1h',
            },
          },
        },
      },
    ],
  };
  
  module.exports = {
    // ...
    plugins: [
      {
        name: 'strapi-plugin-users-permissions',
        config: {
          // ...
          registration: {
            enabled: true,
          },
        },
      },
    ],
  };