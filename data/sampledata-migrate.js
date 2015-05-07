var app = require('../server/server');
var ds = app.datasources.arangodb;

ds.automigrate('business', function(err) {
    console.log(err);
});
