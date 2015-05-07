var app = require('../server/server');
var business = app.models.business;

business.findById('4098405135', function(err, models) {
    if (err) {
        console.log(err);
    }

    console.log(models);
});
