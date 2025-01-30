const User = require('../../models/User');


const bcrypt = require('bcrypt');


async function createUser(userData){

    try {
        const salt = await bcrypt.genSalt(14);
        const encryptedPassword = await bcrypt.hash(userData.password, salt)
        const newUserData = {
            username: userData.username,
            password: encryptedPassword,
            favoritePokemon: [],
        }

        const newUser = await User.create(newUserData);

        return newUser;

    } catch (error) {
        
        throw error;


    }



}


module.exports = {

    createUser, 
}