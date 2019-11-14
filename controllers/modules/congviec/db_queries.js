const Pool = require('pg').Pool;
var commonModule = require('../common.js');
var dbConfig = require('../../db_config.json');
const pool = new Pool(dbConfig);


module.exports.createCongViec = function (congviecInfo, callback) {
    const { cv_ten, cv_noidung, cv_thoigian_db, cv_thoigian_kt, cv_xoa, ttcv_ma, sv_ma, dt_ma } = congviecInfo;

    pool.query('INSERT INTO congviec (cv_ten, cv_noidung, cv_thoigian_db, cv_thoigian_kt, cv_xoa, ttcv_ma, sv_ma, dt_ma) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)', [cv_ten, cv_noidung, cv_thoigian_db, cv_thoigian_kt, cv_xoa, ttcv_ma, sv_ma, dt_ma], (error, result) => {
        callback(error, result);
    });
};


module.exports.getCongViecList = function (callback) {
    pool.query('SELECT * FROM congviec', (error, results) => {
        callback(error, results.rows);
    });
};