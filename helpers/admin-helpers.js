var db = require('../config/connection')
var collection = require('../config/collections')
const bcrypt = require('bcrypt')

module.exports = {
    doSignup: (userData) => {

        return new Promise(async (resolve, reject) => {

            userData.password = await bcrypt.hash(userData.password, 10)
            db.get().collection(collection.ADMIN_COLLECTION).insertOne(userData).then((data) => {
                resolve(data.insertedId)
            })





        })

    },

    doSignin: (userData) => {
        return new Promise(async (resolve, reject) => {
            let loginStatus = false
            let response = {}
            let user = await db.get().collection(collection.ADMIN_COLLECTION).findOne({ email: userData.email })
            if (user) {
                bcrypt.compare(userData.password, user.password).then((status) => {
                    if (status) {
                        console.log('Login success');
                    } else {
                        console.log('Login failed');
                    }
                })
            } else {
                console.log('Login failed');
            }

        })
    }

}