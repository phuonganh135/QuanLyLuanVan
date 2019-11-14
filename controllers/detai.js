var dbQuries = require('./modules/detai/db_queries');

module.exports.createDeTai = function (req, res, next) {
    var detaiInfo = req.body;
    dbQuries.createDeTai(detaiInfo, function(error, result) {
        if (error) {
            res.status(501).json({
                message: "Error create new detai!",
                error: error
            });
        }
        res.status(201).send("Detai is added successfully!");
    });
};


module.exports.getDeTaiList = function (req, res, next) {
    dbQuries.getDeTaiList(function(error, results) {
        if (error) {
            res.status(501).json({
                message: "Error get detai list!",
                error: error
            });
        }
        res.status(200).json(results);
    });
};