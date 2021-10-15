// 懒加载路由
const Main = () => import('./Main.vue')
export default {
    path: '/main',
    name: 'Main',
    component: Main,
    children: []
}
