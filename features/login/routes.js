const express = require('express');

const router = express.Router();

const { wrap } = require('async-middleware');

const verifyRequestBody = require('./commands/verify-request-body');
const login = require('./commands/login');
const redirectToDashboard = require('./commands/redirect-to-dashboard');
const loadPage = require('./commands/load-page');
const googleAuth = require('./googleAuth/googleUtil');

router.post('/', wrap(verifyRequestBody), wrap(login), wrap(redirectToDashboard));
router.get('/', wrap(loadPage));
router.get('/googleAuth',(req,res) => { res.redirect(googleAuth.urlGoogle()) } ,wrap(redirectToDashboard));

module.exports = router;
