/* jshint indent: 2 */

const Sequelize = require('sequelize');
const SequelizeInstance = require('../db');

const Dsjyypt = SequelizeInstance.define('pub_dsjyypt_log', {
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
  LOGIN: {
    type: Sequelize.INTEGER(11),
    allowNull: true
  },
  SPTS: {
    type: Sequelize.INTEGER(11),
    allowNull: true
  },
  ZTFX: {
    type: Sequelize.INTEGER(11),
    allowNull: true
  },
  TIME: {
    type: Sequelize.STRING(20),
    allowNull: true
  }
}, {
  tableName: 'pub_dsjyypt_log',
  timestamps: false
});

exports.findAll = async function (time, xtbh) {
  let dataList = {}
  let data = await Dsjyypt.findAll({
    where: {TIME: time},
    attributes: { exclude: ['ID', 'TIME'] }
  });
  dataList = {
    "title": ["部门", "登陆", "审判态势", "专题分析"],
    "data": data,
    "type": xtbh
  };
  return dataList;
}

