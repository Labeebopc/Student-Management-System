var express = require('express');
var router = express.Router();
// const { render } = require('../app');

const studentHelpers = require('../helpers/student-helpers')
const adminHelpers = require('../helpers/admin-helpers')


/* GET users listing. */
router.get('/', function (req, res, next) {
  studentHelpers.getAllStudents().then((students) => {
    console.log(students)
    res.render('admin/view-students', { students });

  })


});



router.get('/view-students', (req, res) => {
  res.render('admin/view-students')
});

router.get('/add-students', (req, res) => {
  res.render('admin/add-students')
});


router.post('/add-students', (req, res) => {
  console.log(req.body);
  studentHelpers.addStudent(req.body, (result) => {
    res.render("admin/view-students")
  })
});

// Sign Up page

router.get('/signup', (req, res) => {
  res.render('admin/signup')
})

router.get('/signin', (req, res) => {
  res.render('admin/signin')
})



router.post('/signup', (req, res) => {
  console.log(req.body)
  adminHelpers.doSignup(req.body).then((response) => {
    console.log(response);

  })

})

router.post('/signin', (req, res) => {
  adminHelpers.doSignin(req.body)


})


module.exports = router;
