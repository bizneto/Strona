'use strict';

/**
 * conversation-digital service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::conversation-digital.conversation-digital');
