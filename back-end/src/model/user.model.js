const { DataTypes } = require('sequelize')


const seq = require('../db/seq')


// 创建模型a

const User = seq.define("User", {
    //id自动创建
    user_email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        comment: "用户邮箱"
    },
    password: {
        type: DataTypes.CHAR(64),
        allowNull: false,
        comment: "密码"
    }
},{
    // 是否自动添加时间戳 createAt ， updateAt
    timestamps:true
})

//强制同步数据库（创建数据表格）
// User.sync({force:true}) 

module.exports = User
