const Pool = require('pg').Pool;
var commonModule = require('../common.js');
var dbConfig = require('../../db_config.json');
const pool = new Pool(dbConfig);


module.exports.createSinhVien = function (sinhvienInfo, callback) {
    const { sv_ma, sv_ten, sv_gioitinh, sv_ngaysinh, sv_cmnd, sv_diachi , sv_email , sv_sdt, sv_matkhau , sv_xoa , l_ma , svl_xoa } = sinhvienInfo;

    pool.query('INSERT INTO sinhvien (sv_ma, sv_ten, sv_gioitinh, sv_ngaysinh, sv_cmnd, sv_diachi , sv_email , sv_sdt, sv_matkhau , sv_xoa) VALUES ($1, $2, $3, $4, $5, $6, $7 , $8 , $9 , $10)', [sv_ma, sv_ten, sv_gioitinh, sv_ngaysinh, sv_cmnd, sv_diachi , sv_email , sv_sdt, sv_matkhau , sv_xoa], (error, result) => {
        // callback(error, result);
        if (error) {
            callback(error, result);
        }
        pool.query('INSERT INTO sinhvien_lop (svl_xoa, sv_ma , l_ma ) VALUES ($1, $2 ,$3)', [svl_xoa, sv_ma , l_ma], (error2, result2) => {
            // callback(error, result);
            callback(error2, result2);
        });
    });
    
};


module.exports.getSinhVienList = function (callback) {
    pool.query('SELECT * FROM sinhvien as sv , sinhvien_lop as svl , lop as l WHERE sv.sv_ma = svl.sv_ma and l.l_ma = svl.l_ma', (error, results) => {
        callback(error, results.rows);
    });
};

