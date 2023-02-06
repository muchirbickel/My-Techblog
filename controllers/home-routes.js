const router = require('express').Router();
const { Instructor, Activity, MemberActivity, Member } = require('../models');
const withAuth = require('../utils/auth');

router.get('/test', (req, res) => {
  res.send('working',
    { logged_in: req.session.logged_in });
})

//routing to homepage
router.get('/', async (req, res) => {
  res.render('index', {
    logged_in: req.session.logged_in
  });
})


//routing to contact us page
router.get('/contact-us', (req, res) => {
  res.render('page5-contactus', {
    logged_in: req.session.logged_in
  });
})



//routing to login/signup page
router.get('/login', (req, res) => {
  console.log("AM I LOGGED IN??", req.session.logged_in)
  if (req.session.logged_in) {
    res.redirect('/')
    return
  }
  res.render('login');
});

module.exports = router;
