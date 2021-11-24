const axios = require('axios');
const { Solver, Question } = require('../../models');
const ErrorHandlerClass = require('../utils/errorHandlerClass');

const judge = async (req, res, next) => {
    try {
        const payload = {
            script: req.body.codeInput,
            language: req.body.language,
            stdin: req.body.input,
            versionIndex: '0',
            clientId: 'f070cff97970c2b74eaf79ef7b38dcfc',
            clientSecret: '7b0ff2ff29583e56f0375b2a754a6c15f687db034fc5cc505b5ca286c9c23ea8',
        };
        // console.log(payload)
        const response = await axios({
            method: 'post',
            url: 'https://api.jdoodle.com/v1/execute',
            headers: {
                'content-type': 'application/json',
                accept: 'application/json',
                // "useQueryString": true
            },
            data: JSON.stringify(payload),
        });
        // console.log(response)
        return res.status(200).json({
            success: true,
            data: response.data,
        });
    } catch (error) {
        return next(error);
    }
};

module.exports = {
    judge,
};
