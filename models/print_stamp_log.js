/* jshint indent: 2 */

const Sequelize = require('sequelize');
const SequelizeInstance = require('../db');

const Print = SequelizeInstance.define('print_stamp_log', {
  ID: {
    type: Sequelize.INTEGER(11),
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  FYMC: {
    type: Sequelize.STRING(20),
    allowNull: true
  },
  EMSDY: {
    type: Sequelize.INTEGER(11),
    allowNull: true
  },
  WSDY: {
    type: Sequelize.INTEGER(11),
    allowNull: true
  },
  ZCS: {
    type: Sequelize.INTEGER(11),
    allowNull: true
  },
  DLCS: {
    type: Sequelize.INTEGER(11),
    allowNull: true
  },
  YYCS: {
    type: Sequelize.INTEGER(11),
    allowNull: true
  },
  TIME: {
    type: Sequelize.STRING(20),
    allowNull: true
  }
}, {
  tableName: 'print_stamp_log',
  timestamps: false
});

exports.findAll =async function (time, xtbh) {
  let dataList = {}
  let data = await Print.findAll({
    where: {TIME: time},
    attributes: { exclude: ['ID', 'TIME'] }
  });

  let sum1 = 0;
  let sum2 = 0;
  let sum3 = 0;
  let sum4 = 0;
  let sum5 = 0;
  for (let i = data.length - 1; i >= 0; i--) {
    sum1 += data[i].EMSDY;
    sum2 += data[i].WSDY;
    sum3 += data[i].ZCS;
    sum4 += data[i].DLCS;
    sum5 += data[i].YYCS;
  }

  if(!data){
    data.push({
      "FYMC": "合计",
      "EMSDY": sum1,
      "WSDY": sum2,
      "ZCS": sum3,
      "DLCS": sum4,
      "YYCS": sum5,
    })
  }
  
  dataList = {
    "title": ["法院", "EMS打印", "文书打印", "总次数", "登陆次数", "预约次数"],
    "data": data,
    "type": xtbh
  };
  // console.log(dataList);
  return dataList;
}