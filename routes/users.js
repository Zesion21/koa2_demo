const router = require('koa-router')()
const sql = require('../utils/query');
const opera = require('../utils/sql');


router.prefix('/users')

router.get('/', function (ctx, next) {
  ctx.body = 'this is a users response!'
})

router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})

router.get('/all', async (ctx, next) => {
  await sql.query(opera.QUERY_TABLE('test')).then(data => {
    ctx.body = data;
  })
})
router.post('/add', async (ctx, next) => {

  // ctx.body = ctx.request.body;

  let str = (ctx.request.body);
  ctx.body = str;
})
// 增加用户(POST请求)
// router.post('/add', async (ctx, next) => {
// let arr = [];

// arr.push(ctx.request.body['name']);
// arr.push(ctx.request.body['pass']);
// arr.push(ctx.request.body['auth']);

// await userService.addUserData(arr)
//   .then((data) => {
//     let r = '';
//     if (data.affectedRows != 0) {
//       r = 'ok';
//     }
//     ctx.body = {
//       data: r
//     }
//   }).catch(() => {
//     ctx.body = {
//       data: 'err'
//     }
//   })
// let str = ctx.request.body;
// ctx.body = 'str';
// })

module.exports = router