const articles = require('../articles.json');

module.exports = {
    async up() {
        await strapi.db.transaction(async () => {
            for (const article of articles) {
                await strapi.documents('api::article.article').create({
                    data: article,
                });
            }
        });
    },
};