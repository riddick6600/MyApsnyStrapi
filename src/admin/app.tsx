import type { StrapiApp } from "@strapi/strapi/admin";
import ru from "./extensions/translations/ru.json";

export default {
    config: {
        locales: ["ru"],
        translations: {
            ru: ru,
        },
    },
    bootstrap(app: StrapiApp) {
        console.log(app);
    },
};
