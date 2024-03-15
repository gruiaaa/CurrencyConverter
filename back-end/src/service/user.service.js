const User = require('../model/user.model');

class UserService {
    async createUser(user_email, password) {
        // await 表达式 promise 对象的值
        const res = await User.create({
            user_email: user_email,
            password: password,
        });
        return res.dataValues;
    }

    async getUserInfo({ id, user_email, password }) {
        const whereOpt = {};
        id && Object.assign(whereOpt, { id });
        user_email && Object.assign(whereOpt, { user_email });
        password && Object.assign(whereOpt, { password });
        const res = await User.findOne({
            attributes: ['id', 'user_email', 'password'],
            where: whereOpt,
        });
        return res ? res.dataValues : null

    }

    async updateByID({ id, user_email, password }) {
        const whereOpt = { id }
        const newUser = {}
        user_email && Object.assign(newUser, { user_email })
        password && Object.assign(newUser, { password })
        const res = await User.update(newUser, { where: whereOpt })
        return res[0] > 0 ? true : false
    }

}

module.exports = new UserService();
