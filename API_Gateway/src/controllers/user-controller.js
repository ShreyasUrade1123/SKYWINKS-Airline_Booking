const { StatusCodes } = require('http-status-codes');

const { UserService } = require('../services');
const { SuccessResponse, ErrorResponse } = require('../utils/common');

/**
 * POST : /signup 
 * req-body {email: 'a@b.com', password: '1234'}
 */
async function signup(req, res) {
    try {
        const user = await UserService.create({
            email: req.body.email,
            password: req.body.password
        });
        // FIX: Use a new object instead of mutating the global SuccessResponse
        return res
                .status(StatusCodes.CREATED)
                .json({ ...SuccessResponse, data: user });
    } catch(error) {
        console.log(error);
        // FIX: Use a new object and handle potential missing status codes
        return res
                .status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR)
                .json({ ...ErrorResponse, error: error });
    }
}

async function signin(req, res) {
    try {
        const user = await UserService.signin({
            email: req.body.email,
            password: req.body.password
        });
        // FIX: Use StatusCodes.OK for signin (not CREATED) and use a new object
        return res
                .status(StatusCodes.OK)
                .json({ ...SuccessResponse, data: user });
    } catch(error) {
        console.log(error);
        return res
                .status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR)
                .json({ ...ErrorResponse, error: error });
    }
}

async function addRoleToUser(req, res) {
    try {
        const user = await UserService.addRoletoUser({
            role: req.body.role,
            id: req.body.id
        });
        // FIX: Use StatusCodes.OK and use a new object
        return res
                .status(StatusCodes.OK)
                .json({ ...SuccessResponse, data: user });
    } catch(error) {
        console.log(error);
        return res
                .status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR)
                .json({ ...ErrorResponse, error: error });
    }
}

module.exports = {
    signup,
    signin,
    addRoleToUser
}