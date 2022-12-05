const jsonfile = require('jsonfile')
const userdb = 'db/roles.json'

function getUserDatabase(callback) {
    jsonfile.readFile(userdb, function(err, obj) {
        if (err) console.error(err)
        callback(obj);
    })
}

function addNewUser(data, callback) {
    const obj = data;

    jsonfile.writeFile(userdb, obj, { spaces: 2 }, function(err) {
        if (err) {
            console.error(err);
            callback(false);
        };
        callback(true);
    })
}

module.exports = {
    getDB: function(callback) {
        getUserDatabase(callback);
    },
    changeDB: function(data, callback) {
        addNewUser(data, callback);
    }
};
