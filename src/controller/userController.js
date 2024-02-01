import userApiService from '../service/userApiService';

const createFunc = async (req, res) => {
    try {

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            EM: 'Error from server', //error message
            EC: '-1', //error code,
            DT: '', //data
        })
    }
}

const readFunc = async (req, res) => {
    try {
        if (req.query.page && req.query.limit) {
            let page = req.query.page;
            let limit = req.query.limit;
            let data = await userApiService.getUserWithPagination(+page, +limit);
            return res.status(200).json({
                EM: data.EM, //error message
                EC: data.EC, //error code,
                DT: data.DT, //data
            })
        } else {
            let data = await userApiService.getAllUser();
            return res.status(200).json({
                EM: data.EM, //error message
                EC: data.EC, //error code,
                DT: data.DT, //data
            })
        }

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            EM: 'Error from server', //error message
            EC: '-1', //error code,
            DT: '', //data
        })
    }
}

const updateFunc = (req, res) => {
    try {

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            EM: 'Error from server', //error message
            EC: '-1', //error code,
            DT: '', //data
        })
    }
}

const deleteFunc = async (req, res) => {
    try {
        let data = await userApiService.deleteUser(req.body.id);
        return res.status(200).json({
            EM: data.EM,
            EC: data.EC,
            DT: data.DT,
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            EM: 'Error from server', //error message
            EC: '-1', //error code,
            DT: '', //data
        })
    }
}

module.exports = {
    createFunc, readFunc, updateFunc, deleteFunc
}