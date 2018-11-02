/* jshint indent: 2 */

const Sequelize = require('sequelize');
const SequelizeInstance = require('../db');

const Ajxx = SequelizeInstance.define('pub_ajxx_log', {
  ID: {
    type: Sequelize.INTEGER(11),
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  BM: {
    type: Sequelize.STRING(20),
    allowNull: true
  },
  KTCS: {
    type: Sequelize.INTEGER(11),
    allowNull: true
  },
  WSQPCS: {
    type: Sequelize.INTEGER(11),
    allowNull: true
  },
  HJ: {
    type: Sequelize.INTEGER(11),
    allowNull: true
  },
  TIME: {
    type: Sequelize.STRING(20),
    allowNull: true
  }
}, {
  tableName: 'pub_ajxx_log',
  timestamps: false
});

exports.findAll = async function (time, xtbh) {
  let dataList = {}
  let data = await Ajxx.findAll({
    where: {TIME: time},
    attributes: { exclude: ['ID', 'TIME'] }
  });
  dataList = {
    "title": ["部门", "开庭次数", "文书签批次数", "合计"],
    "data": data,
    "type": xtbh
  };
  return dataList;
}
