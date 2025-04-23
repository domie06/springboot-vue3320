import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'

     import users from '@/views/modules/users/list'
    import chat from '@/views/modules/chat/list'
    import dictionary from '@/views/modules/dictionary/list'
    import gonggao from '@/views/modules/gonggao/list'
    import lvyouluxian from '@/views/modules/lvyouluxian/list'
    import lvyouluxianCollection from '@/views/modules/lvyouluxianCollection/list'
    import lvyouluxianOrder from '@/views/modules/lvyouluxianOrder/list'
    import yonghu from '@/views/modules/yonghu/list'
    import config from '@/views/modules/config/list'
    import dictionaryChat from '@/views/modules/dictionaryChat/list'
    import dictionaryGonggao from '@/views/modules/dictionaryGonggao/list'
    import dictionaryLvyouluxian from '@/views/modules/dictionaryLvyouluxian/list'
    import dictionaryLvyouluxianCollection from '@/views/modules/dictionaryLvyouluxianCollection/list'
    import dictionaryLvyouluxianOrder from '@/views/modules/dictionaryLvyouluxianOrder/list'
    import dictionaryLvyouluxianOrderPayment from '@/views/modules/dictionaryLvyouluxianOrderPayment/list'
    import dictionarySex from '@/views/modules/dictionarySex/list'
    import dictionaryShangxia from '@/views/modules/dictionaryShangxia/list'
    import dictionaryZhuangtai from '@/views/modules/dictionaryZhuangtai/list'





//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    } ,{
        path: '/users',
        name: '管理信息',
        component: users
      }
    ,{
        path: '/dictionaryChat',
        name: '数据类型',
        component: dictionaryChat
    }
    ,{
        path: '/dictionaryGonggao',
        name: '公告类型',
        component: dictionaryGonggao
    }
    ,{
        path: '/dictionaryLvyouluxian',
        name: '旅游路线类型',
        component: dictionaryLvyouluxian
    }
    ,{
        path: '/dictionaryLvyouluxianCollection',
        name: '收藏表类型',
        component: dictionaryLvyouluxianCollection
    }
    ,{
        path: '/dictionaryLvyouluxianOrder',
        name: '订单类型',
        component: dictionaryLvyouluxianOrder
    }
    ,{
        path: '/dictionaryLvyouluxianOrderPayment',
        name: '订单支付类型',
        component: dictionaryLvyouluxianOrderPayment
    }
    ,{
        path: '/dictionarySex',
        name: '性别类型',
        component: dictionarySex
    }
    ,{
        path: '/dictionaryShangxia',
        name: '上下架',
        component: dictionaryShangxia
    }
    ,{
        path: '/dictionaryZhuangtai',
        name: '状态',
        component: dictionaryZhuangtai
    }
    ,{
        path: '/config',
        name: '轮播图',
        component: config
    }


    ,{
        path: '/chat',
        name: '客服聊天',
        component: chat
      }
    ,{
        path: '/dictionary',
        name: '字典',
        component: dictionary
      }
    ,{
        path: '/gonggao',
        name: '公告信息',
        component: gonggao
      }
    ,{
        path: '/lvyouluxian',
        name: '旅游路线',
        component: lvyouluxian
      }
    ,{
        path: '/lvyouluxianCollection',
        name: '旅游路线收藏',
        component: lvyouluxianCollection
      }
    ,{
        path: '/lvyouluxianOrder',
        name: '旅游路线订单',
        component: lvyouluxianOrder
      }
    ,{
        path: '/yonghu',
        name: '用户',
        component: yonghu
      }


    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;
