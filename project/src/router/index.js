export default new VueRouter({
  // mode: 'history',
  routes: [{
      path: '/',
      name: 'lovechat',
      component: resolve => (require(["@/components/lovechat"], resolve)),
      meta: {
        title: 'LoveChat-爱聊天  即时聊天通讯软件'
      }
    },
    {
      path: '/download',
      name: 'download',
      component: resolve => (require(["@/components/download"], resolve)),
      meta: {
        title: '【LoveChat-爱聊天官方下载】聊天软件下载'
      }
    },
    {
      path: '/price',
      name: 'price',
      component: resolve => (require(["@/components/price"], resolve)),
      meta: {
        title: '【LoveChat-爱聊天】 第四季度优惠价格方案'
      }
    },
  ]
})
