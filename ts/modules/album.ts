import * as Promise from "bluebird";
import * as Sequelize from "sequelize";
import sequalizeManager from './sequalize';

interface AlbumAttribute {
    id: number
    name: string
    genre: string,
    date: string
}

interface AlbumInstance extends Sequelize.Instance<AlbumAttribute>, AlbumAttribute {}

interface AlbumModel extends Sequelize.Model<AlbumInstance, AlbumAttribute> {
    get(id: number): Promise<AlbumInstance>
    build(options: any): Promise<AlbumInstance>
    create(options: any): Promise<AlbumInstance>
    findAll(options: any): Promise<AlbumInstance>
}



const Album: AlbumModel = sequalizeManager.define<AlbumInstance, AlbumAttribute>(
    'Album',
    {
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
    },
    {
        tableName: 'album',
        timestamps: false
    }
) as AlbumModel

function save(): Promise<AlbumModel> {
    return Album
    .create({name: "Exercise in futility", genre: "Black Metal"})
    .then(savedTask => savedTask)
    .catch(error => {
        sequalizeManager.close()
    })
}

save()
.then(
    album => album.update({name: 'Exercise in futility!!!'})
)
.then(
    album => { console.log('updated') }
);
console.log('123');