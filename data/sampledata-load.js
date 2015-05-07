var app = require('../server/server');
var business = app.models.business;

var sampleData = require('./sampledata.json');

business.create(sampleData, function(err, models) {
    if (err) {
        console.log(err);
    }

    console.log(models);
});
