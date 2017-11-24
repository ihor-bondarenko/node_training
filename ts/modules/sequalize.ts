import * as Promise from "bluebird";
import * as Sequelize from "sequelize";

interface SequelizeStorageConfig {
    database:string;
    username:string;
    password:string,
    pool?:Object
}

function getInstance(config: SequelizeStorageConfig): Sequelize {
    return new Sequelize(config.database, config.username, config.password, { dialect: "mysql" });
}

const sequelize = getInstance(
    {
        'database': 'node_test', 
        'username': 'root',
        'password': '1987',
        pool: {
            min: 1,
            idle: 10000
          }
    }
);

export default sequelize;