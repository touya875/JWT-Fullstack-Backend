import express from "express";
import apiController from "../controller/apiController";
import userController from "../controller/userController";

const router = express.Router();
/**
 *
 * @param {*} app
 */


const initApiRoutes = (app) => {

    //API
    router.get("/test-api", apiController.testApi);
    router.post("/register", apiController.handleRegister);
    router.post("/login", apiController.handleLogin);

    //REST API
    router.post("/user/create", userController.createFunc);
    router.get("/user/read", userController.readFunc);
    router.put("user/update", userController.updateFunc);
    router.delete("user/delete", userController.deleteFunc);

    return app.use("/api/v1/", router);
}

export default initApiRoutes;