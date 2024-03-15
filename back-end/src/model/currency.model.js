const { DataTypes } = require('sequelize');
const seq = require('../db/seq');

// 创建模型 Currency
const Currency = seq.define("Currency", {
    currency_code: {
        type: DataTypes.STRING(3),
        allowNull: false,
        unique: true 
    },
    currency_description: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    flag_url: {
        type: DataTypes.STRING(255),
        allowNull: false
    }
}, {
    // 是否自动添加时间戳 createdAt，updatedAt
    timestamps: false
});

// 同步数据库（创建数据表格）
// Currency.sync({ force: true });

module.exports = Currency;
