'use strict';

/**
 *  page controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::page.page');
// const entry = await strapi.entityService.findMany(
//   "api::available-today.available-today",
//   {
//     populate: {
//       top: true,
//       bottom: true,
//       ["available-today.mousse-cake"]: {
//         fields: ["catalogImage", "detailedImages"],
//         populate: true,
//       },
//     },
//   }
// );