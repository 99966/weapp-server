/* jshint indent: 2 */

const Sequelize = require('sequelize');
const SequelizeInstance = require('../db');

const Bgbapt = SequelizeInstance.define('pub_bgbapt_log', {
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
  HJ: {
    type: Sequelize.INTEGER(11),
    allowNull: true
  },
  TIME: {
    type: Sequelize.STRING(20),
    allowNull: true
  }
}, {
  tableName: 'pub_bgbapt_log',
  timestamps: false
})

exports.findAll = async function (time, xtbh) {
  let dataList = {}
  let data = await Bgbapt.findAll({
    where: {TIME: time},
    attributes: { exclude: ['ID', 'TIME'] }
  });
  dataList = {
    "title": ["部门", "CA登陆", "合计"],
    "data": data,
    "type": xtbh
  };
  return dataList;
}
