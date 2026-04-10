export default [
  'strapi::logger',
  'strapi::errors',
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "connect-src": ["'self'", "https:","http"],
          "img-src": [
            "'self'",
            "data:",
            "blob:",
            "*.amazonaws.com",
          ],
          "media-src": ["'self'", "data:", "blob:"],
           'frame-src': ['*'],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  {
    name: 'strapi::cors',
    config: {
      origin: ['http://localhost:4200', 'http://localhost:4000','https://iwa-web-frontend-2b10ec218199.herokuapp.com','https://www.iwa-network.org','https://iwa-network.org','http://iwa-network.org','http://www.iwa-network.org'], 
      methods: ['GET', 'POST', 'PUT', 'DELETE'],
      allowedHeaders: ['Content-Type', 'Authorization'],
    },
  },
 
    'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
