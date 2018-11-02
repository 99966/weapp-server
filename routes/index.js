const router = require('koa-router')()

const print = require('../models/print_stamp_log')
const ajxx = require('../models/pub_ajxx_log')
const bgbapt = require('../models/pub_bgbapt_log')
const dsjyypt = require('../models/pub_dsjyypt_log')

router.get('/', async (ctx, next) => {
  ctx.redirect('')
})
router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})
router.get('/json', async (ctx, next) => {
  let data;
  switch (ctx.query.xtbh) {
    // 0 法官自助服务终端
    case '0':
      data = await print.findAll(ctx.query.date, ctx.query.xtbh)
      break;
    // 1 应用数据平台
    case '1':
      data = await dsjyypt.findAll(ctx.query.date, ctx.query.xtbh)
      break;
    // 2 办公办案平台
    case '2':
      data = await bgbapt.findAll(ctx.query.date, ctx.query.xtbh)
      break;
    // 3 案件信息管理
    case '3':
      data = await ajxx.findAll(ctx.query.date, ctx.query.xtbh)
      break;
  }

  if ((data.data).length == 0) {
    ctx.body = {
      "message": "没有该记录"
    }
  } else {
    ctx.body = JSON.stringify(data);
  }
})
module.exports = router