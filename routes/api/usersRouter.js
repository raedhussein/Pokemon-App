const express = require('express');

const {createUser} = require('../../controllers/api/userController');

const router = express.Router();

function handleErrorResponse(res, err){
    console.log(err);
    res.status(500).json({message: 'failure', payload: err});
}


router.post('/', async function(req, res){
    try {
        const user = await createUser(req.body);
        user.password = undefined;
        res.status(201).json({message: 'sucess', payload: user});
    } catch (error) {
        handleErrorResponse(res, error);
    }
})




module.exports = router;


