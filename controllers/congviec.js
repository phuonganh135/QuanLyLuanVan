var dbQuries = require('./modules/congviec/db_queries');


module.exports.createCongViec = function (req, res, next) {
    var congviecInfo = req.body;
    dbQuries.createCongViec(congviecInfo, function(error, result) {
        if (error) {
            res.status(501).json({
                message: "Error create new congviec!",
                error: error
            });
        }
        res.status(201).send("Congviec is added successfully!");
    });
};

module.exports.getCongViecList = function (req, res, next) {
    dbQuries.getCongViecList(function(error, results) {
        if (error) {
            res.status(501).json({
                message: "Error get congviec list!",
                error: error
            });
        }
        res.status(200).json(results);
    });
};