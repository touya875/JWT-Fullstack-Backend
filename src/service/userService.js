import bcrypt from 'bcrypt';
// import bluebird from 'bluebird';
import db from '../models/index';

const salt = bcrypt.genSaltSync(10);

const hashUserPassword = (userPassword) => {
    let hashPassword = bcrypt.hashSync(userPassword, salt);
    return hashPassword;
}

const createNewUser = async (email, password, username) => {
    let hashPass = hashUserPassword(password);
    try {
        await db.Users.create({
            username: username,
            email: email,
            password: hashPass
        })
    } catch (error) {
        console.log(">>Check error: ", error)
    }
}

const getUserList = async () => {

    let users = [];
    users = await db.Users.findAll();
    return users;
}

const deleteUser = async (userId) => {
    await db.Users.destroy({
        where: {
            id: userId
        }
    });
}

const getUserById = async (id) => {
    let user = {};
    user = await db.Users.findOne({
        where: {
            id: id
        }
    })
    return user.get({ plain: true });
}

const updateInfor = async (email, username, id) => {
    db.Users.update(
        {
            email: email,
            username: username
        },
        {
            where: {
                id: id
            }
        }
    )

}

module.exports = {
    createNewUser, getUserList, deleteUser, getUserById, updateInfor
}