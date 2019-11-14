var dbQuries = require('./modules/bomon_chuyennganh/db_queries');

module.exports.createBoMonChuyenNganh = function (req, res, next) {
    var bomon_chuyennganhInfo = req.body;
    dbQuries.createBoMonChuyenNganh(bomon_chuyennganhInfo, function(error, result) {
        if (error) {
            res.status(501).json({
                message: "Error create new bomon_chuyennganh!",
                error: error
            });
        }
        res.status(201).send("bomon_chuyennganh is added successfully!");
    });
};

module.exports.getBoMonChuyenNganhList = function (req, res, next) {
    dbQuries.getBoMonChuyenNganhList(function(error, results) {
        if (error) {
            res.status(501).json({
                message: "Error get bomon_chuyennganh list!",
                error: error
            });
        }
        res.status(200).json(results);
    });
};
