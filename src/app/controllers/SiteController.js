const Course = require('../models/Course');
const { multipleMongooseToObject } = require('../../util/mongoose');
class SiteController {
    //[GET] /news
    index(req, res, next) {
        Course.find({})
            .then(courses => res.render('news', { 
                courses : multipleMongooseToObject(courses)
            }))
            .catch(next);

        //res.render('news');
    }
}

module.exports = new SiteController();