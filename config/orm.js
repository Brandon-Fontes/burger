const connection = require('../config/connection.js');
function printQuestionMarks(num) {
    var arr = [];
    for (var i = 0; i < num; i++){
        arr.push("?");
    }
    return arr.toString();
}
function objToSql(ob) {
    var arr = [];

    for (var key in ob) {
        var val = ob[key];
        if(Object.hasOwnProperty.call(ob, key)) {
            if(typeof val === "string" && val.indexOf(" ") >= 0) {
                val = "'" + val + "'";
            }
            arr.push(key + "=" + val);
        }

    }
    return arr.toString(); 
}


var orm = {
    selectAll: function(tableInput, cb) {
        var queryAll = "SELECT * FROM " + tableInput + ";";
        connection.query(queryAll, function (err, res) {
            if (err) throw err;
            cb(res); 
        });
    },

    insertOne: function (table, cols, vals, cb) {
        var queryAdd = "insert into " + table;

        queryAdd += " (`";
        queryAdd += cols.join("`, `");
        queryAdd += "`) ";
        queryAdd += "values ('";
        queryAdd += vals.join("', '");
        queryAdd += "') ";

        console.log(queryAdd);

        connection.query(queryAdd, vals, function (err, res) {
            if (err) throw err;
            cb(res);
        })
    },

    updateOne: function (table, objColVals, condition, cb) {
        var queryUpdate = "UPDATE " + table;

        queryUpdate += " set ";
        queryUpdate += objToSql(objColVals);
        queryUpdate += " WHERE ";
        queryUpdate += condition;

        console.log(queryUpdate);
        connection.query(queryUpdate, function (err, res) {
            if (err) throw err;
            console.log(res);
            cb(res);
        });
    }
};

module.exports = orm;