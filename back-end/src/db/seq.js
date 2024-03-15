const { MYSQL_HOST, MYSQL_PORT, MYSQL_USER, MYSQL_PWD, MYSQL_DB } = require('../config/config.default');
const { Sequelize } = require('sequelize');

const seq = new Sequelize(MYSQL_DB, MYSQL_USER, MYSQL_PWD, {
    host: MYSQL_HOST,
    port: MYSQL_PORT,
    dialect: 'mysql',
    // logging: console.log
});

// seq.authenticate()
//     .then(() => {
//         console.log('数据库连接成功');
//     })
//     .catch((err) => {
//         console.error('数据库连接失败', err);
//         throw err; 
//     });

module.exports = seq;
