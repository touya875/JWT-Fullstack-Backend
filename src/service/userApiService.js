import db from '../models/index';

// const createUser = async (data) => {
//     try {
//         await db.Users.create({

//         })
//     } catch (error) {
//         console.log(error);

//     }
// }

const getAllUser = async () => {
    try {
        let users = await db.Users.findAll({
            attributes: ["id", "username", "email", "phone", "sex"],
            include: { model: db.Groups, attributes: ["name", "description"], },
            nest: true
        })
        if (users) {
            // console.log(">>Check user: ", users);
            return {
                EM: 'get data success',
                EC: 0,
                DT: users
            }
        } else {
            return {
                EM: 'get data success',
                EC: 0,
                DT: []
            }
        }
    } catch (error) {
        console.log(error);
        return {
            EM: 'something wrong with services',
            EC: 1,
            DT: []
        }
    }
}

const getUserWithPagination = async (page, limit) => {
    try {
        let offset = (page - 1) * limit;

        const { count, rows } = await db.Users.findAndCountAll({
            offset: offset,
            limit: limit,
            attributes: ["id", "username", "email", "phone", "sex"],
            include: { mode: db.Groups, attributes: ["name", "description"] },
        })

        let totalPages = Math.ceil(count / limit);
        let data = {
            totalRows: count,
            totalPages: totalPages,
            users: rows
        }

        return {
            EM: 'fetch ok',
            EC: 0,
            DT: data
        }

    } catch (error) {
        console.log(error);
        return {
            EM: 'something wrong with services',
            EC: 1,
            DT: []
        }
    }
}

const createNewUser = async (data) => {
    try {
        await db.User.create({

        })
    } catch (e) {
        console.log(e);
    }
}

const updateUser = async (data) => {
    try {
        let user = await db.Users.findOne({
            where: { id: data.id }
        })
        if (user) {
            //update
            user.save({

            })
        } else {
            //not found
        }
    } catch (error) {
        console.log(error);

    }
}

const deleteUser = async (id) => {
    try {
        let user = await db.Users.findOne({
            where: { id: id }
        })
        if (user) {
            await user.destroy();
            return {
                EM: 'User successfully deleted ',
                EC: 0,
                DT: []
            }
        } else {
            return {
                EM: 'User does not exist',
                EC: 2,
                DT: []
            }
        }
    } catch (error) {
        console.log(error);
        return {
            EM: 'Error from service',
            EC: 1,
            DT: []
        }
    }
}

module.exports = {
    // createUser, getAllUser, createNewUser, updateUser, deleteUser
    getAllUser, createNewUser, updateUser, deleteUser, getUserWithPagination
}