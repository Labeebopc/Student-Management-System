var db = require('../config/connection')
var collection = require('../config/collections')

module.exports = {


    addStudent: (student, callback) => {
        console.log(student);
        db.get().collection('students').insertOne(student).then((data) => {
            console.log(data)
            callback(data)
        })
    },
    getAllStudents: () => {
        return new Promise(async (resolve, reject) => {
            let students = await db.get().collection(collection.STUDENT_COLLECTION).find().toArray()
            resolve(students)
        })
    }
}