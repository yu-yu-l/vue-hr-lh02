import Layout from '@/layout'
// Layout组件中包含
export default {
  path: '/attendances', // 路径
  component: Layout, // 组件
  children: [{
    name: 'attendances', // 给路由规则加一个name
    path: '', // 这里当二级路由的path什么都不写的时候 表示当前路由为默认路由直接渲染对应组件
    component: () => import('@/views/attendances/attendances.vue'),
    // 路由元信息  其实就是存储数据的对象 我们可以在这里放置一些信息
    meta: { title: '考勤', icon: 'skill' }
  }]
}
