const Pool = require('pg').Pool;
var commonModule = require('../common.js');
var dbConfig = require('../../db_config.json');
const pool = new Pool(dbConfig);

module.exports.createDeTai = function (detaiInfo, callback) {
    const { dt_ten, dt_mieuta, dt_trangthai, dt_soluong, dt_xoa , gv_ma , nh_ma , hk_ma , ldt_ma  } = detaiInfo;

    pool.query('INSERT INTO detai (dt_ten, dt_mieuta, dt_trangthai, dt_soluong, dt_xoa , gv_ma , nh_ma , hk_ma , ldt_ma) VALUES ($1, $2, $3, $4, $5, $6, $7, $8,$9)', [dt_ten, dt_mieuta, dt_trangthai, dt_soluong, dt_xoa , gv_ma , nh_ma , hk_ma , ldt_ma], (error, result) => {
        callback(error, result);
    });
};

module.exports.getDeTaiList = function (callback) {
    pool.query('SELECT * FROM detai as dt, gianvien as gv, hocki as hk, loai_detai as ldt where dt.gv_ma = gv.gv_ma and dt.hk_ma = hk.hk_ma and dt.ldt_ma = ldt.ldt_ma', (error, results) => {
        callback(error, results.rows);
    });
};