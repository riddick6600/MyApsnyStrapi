declare module '@strapi/strapi' {
    export type ContentType = string;
    export const factories: {
      createCoreController: (uid: ContentType) => any;
      createCoreRouter: (uid: ContentType) => any;
      createCoreService: (uid: ContentType) => any;
    };
  }