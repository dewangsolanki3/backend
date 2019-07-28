const express = require('express');
const router = express.Router();

router.get('/api/v1/here/users', require('../controllers/user/get-users'));
router.get('/api/v1/here/user/:_id', require('../controllers/user/get-user'));
router.post('/api/v1/here/user', require('../controllers/user/create-user'));
router.delete('/api/v1/user/:_id' , require('../controllers/user/delete-user'));


router.post('/api/v1/here/feedback', require('../controllers/feedback/create-feedback'));
router.get('/api/v1/here/feedback', require('../controllers/feedback/get-feedback'));

router.post('/api/v1/here/filter', require('../controllers/filter/create-filter'));
router.get('/api/v1/here/filter', require('../controllers/filter/get-filter'));

router.post('/api/v1/here/locations', require('../controllers/locations/create-locations'));
router.get('/api/v1/here/locations', require('../controllers/locations/get-locations'));
router.get('/api/v1/here/locations1', require('../controllers/locations/get-locations1'));


router.post('/api/v1/here/pictures', require('../controllers/pictures/create-pictures'));
router.get('/api/v1/here/pictures', require('../controllers/pictures/get-pictures'));

//router.post('/api/v1/here/sort', require('../controllers/sort/create-sort'));
//router.get('/api/v1/here/sort', require('../controllers/sort/get-sort'));

module.exports = router;