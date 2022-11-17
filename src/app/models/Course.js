const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const Course = new Schema({
    _id: {type: Number},
    name: { type: String },
    description: { type: String },
    image: { type: String },
    videoId: { type: String },
    slug: { type: String, slug: 'name', unique: true },
    //Từ version 4. trở lên thì 2 field tự động được tạo
    // createAt: { type: Date, default: Date.now },
    // updateAt: { type: Date, default: Date.now }
}, {
    _id: false, //để mongoDB không tự động thêm trường id nữa
    timestamps: true,
});

Course.query.sortAble = function (req) {
    if (req.query.hasOwnProperty('_sort')) {
        const isValidType = ['asc', 'desc'].includes(req.query.type);
        return this.sort({
            [req.query.column]: isValidType ? req.query.type : 'desc',
        });
    }
    return this;
};

// Add plugins
mongoose.plugin(slug);
Course.plugin(AutoIncrement);
Course.plugin(mongooseDelete, {
    overrideMethods: 'all',
    deletedAt: true
});

module.exports = mongoose.model('Course', Course);
