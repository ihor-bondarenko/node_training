"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sequelize = require("sequelize");
var sequalize_1 = require("./sequalize");
var Album = sequalize_1.default.define('Album', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: Sequelize.STRING
    },
    genre: {
        type: Sequelize.STRING
    }
}, {
    tableName: 'album',
    timestamps: false
});
function save() {
    return Album
        .create({ name: "Exercise in futility", genre: "Black Metal" })
        .then(function (savedTask) { return savedTask; })
        .catch(function (error) {
        sequalize_1.default.close();
    });
}
save()
    .then(function (album) { return album.update({ name: 'Exercise in futility!!!' }); })
    .then(function (album) {
    console.log('updated');
});
console.log('123');
