export default () => ({
  seo: { enabled: true },
  documentation: {
    enabled: true,
    config: {
      openapi: "3.0.0",
      info: {
        version: "1.0.1",
        title: "MyApsny API данных сайта",
        description: "Сервис хранения данных для сайта myapsny.ru",
        termsOfService: null,
        contact: {
          name: "MyApsny",
          email: null,
          // email: "riddick6600@mail.ru",
          url: "https://new.myapsny.ru",
        },
        license: null,
      },
      "x-strapi-config": {
        // Leave empty to ignore plugins during generation
        // plugins: ["upload", "users-permissions"],
        plugins: ["upload"],
        path: "/documentation/",
      },
      servers: [
        { url: "http://localhost:1337/api", description: "Development server" },
        {
          url: "http://strapi.myapsny.ru:1337/api",
          description: "Pred server",
        },
      ],
      externalDocs: null,
      security: [{ bearerAuth: [] }],
    },
  },
});
