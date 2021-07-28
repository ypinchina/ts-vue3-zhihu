在线后端 API 查询和使用站点：http://api.vikingship.xyz/
项目在线文档：http://docs.vikingship.xyz/

本项目有三个部分组成
1. typescript基础学习项目
2. vue新特性学习项目
3. 实战项目



二. vue3新特性学习笔记：
1. 性能提升，重写了虚拟dom,优化
2. composition api {
  1. ref 和 reactive
  2. computed 和 watch
  3. 新的生命周期函数
  4. 自定义函数 - Hooks
}
三. 更好的tyscript的接入

Vue3基础学习课程session2:
为什么要使用VUE3,为了解决什么问题
1.vue2代码在复杂的组件内会变得难以维护，一个功能在一个vue文件里过于分散，
vue2解决方式是mixin，但是mixin会带来变量、方法命名重复冲突等一系列问题。
这时候需要使用到vue3的composition API出马了
2.vue3对于typescript支持很好

session3:
只有vue/cli 在4.5.0版本以上才会有 vue3基础项目安装配置的可选项

session7:
vue2与vue3的双向数据绑定实现对比：
1.vue2使用es5的Object.defindProporty(obj, "需要修改的属性", "值")进行set(),与get(),
对于新增对象的值的监听和数组的某些方法无力，需要使用this.$set方法
2.vue3使用es6的new Proxy(obj, {}),对象代理进行监听，解决了vue2双向数据绑定的缺陷