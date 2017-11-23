var Group = /** @class */ (function () {
    function Group(name, genre) {
        this.name = name;
        this.genre = genre;
    }
    Group.prototype.getGroupName = function () {
        return this.name;
    };
    return Group;
}());
var Album = /** @class */ (function () {
    function Album(group, name) {
        this.group = group;
        this.name = name;
        //console.log(name);
    }
    Album.prototype.getAlbumName = function () {
        return this.name;
    };
    Album.prototype.getGroupName = function () {
        return this.group.getGroupName();
    };
    return Album;
}());
var album = new Album(new Group('Mgla', 'Black Metal'), 'Exercises in futility');
console.log(album.getGroupName());
