const categorys = require('../categorys.json');

module.exports = {
    async up() {
        await strapi.db.transaction(async () => {
            for (const category of categorys) {
                await strapi.documents('api::category.category').create({
                    data: category,
                });
            }
        });
    },
};