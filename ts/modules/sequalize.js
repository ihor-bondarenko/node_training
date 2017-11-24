"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sequelize = require("sequelize");
function getInstance(config) {
    return new Sequelize(config.database, config.username, config.password, { dialect: "mysql" });
}
var sequelize = getInstance({
    'database': 'node_test',
    'username': 'root',
    'password': '1987',
    pool: {
        min: 1,
        idle: 10
    }
});
exports.default = sequelize;
