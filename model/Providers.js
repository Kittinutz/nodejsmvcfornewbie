const models = {};
const config = require('../config/sequelize');
const User = require('../model/User')(config.sequelize,config.Sequelize);

models.User = User;

module.exports = models;
