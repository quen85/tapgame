let mongoose = require('mongoose'),
    Taps = mongoose.model('Taps');

exports.listAll = function(req, res) {
    Taps.find({}, function(err, task) {
        if (err)
            res.send(err);
        res.json(task);
    });
};

exports.create = function(req, res) {
    let newTap = new Taps(req.body);
    newTap.save(function(err, task) {
        if (err)
            res.send(err);
        res.json(task);
    });
};