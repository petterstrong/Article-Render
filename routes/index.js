const router = require('koa-router')()
const fetch = require('../_utils/graphql')

router.use('/:aid', async (ctx, next) => {
  const {aid} = ctx.params
  try {
    ctx.data = await fetch.fetchArticle({id: aid})
    ctx.state = ctx.data.data
  } catch (err) {
    console.log(err)
  }
  await next()
})

router.get('/:aid', async (ctx, next) => {
  if (!ctx.state.article) {
    await ctx.render('404')  
    return
  }

  await ctx.render('index', ctx.state)
})


router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  ctx.type = 'application/json'
  ctx.body = {
    title: 'koa2 json'
  }
})

module.exports = router
