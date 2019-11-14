var dbQuries = require('./modules/sinhvien/db_queries');

module.exports.createSinhVien = function (req, res, next) {
    var sinhvienInfo = req.body;
    dbQuries.createSinhVien(sinhvienInfo, function(error, result) {
        if (error) {
            res.status(501).json({
                message: "Error create new sinhvien!",
                error: error
            });
        }
        res.status(201).send("Sinhvien is added successfully!");
    });
};


module.exports.getSinhVienList = function (req, res, next) {
    dbQuries.getSinhVienList(function(error, results) {
        if (error) {
            res.status(501).json({
                message: "Error get sinhvien list!",
                error: error
            });
        }
        res.status(200).json(results);
    });
};