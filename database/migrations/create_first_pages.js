const pages = require('../pages.json');

module.exports = {
    async up() {
        await strapi.db.transaction(async () => {
            for (const page of pages) {
                await strapi.documents('api::page.page').create({
                    data: page,
                });
            }
        });
    },
};