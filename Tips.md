使用动态注册组件时,可能会出现元素位置限制,例如 ul ol table 和select, 只有当元素放在制定的元素中才会显示 例如 li tr 和option中
当使用动态注册组件时就会出现内容被忽略掉
for example : <blog-post-row />
<ul>
<blog-post-row /> // Tip: 这时候组件会被忽略
</ul>
正确用法
<ul>
 <li is="vue:blog-post-row"></li>
</ul>

当使用在原生 HTML 元素上时，is 的值必须加上前缀 vue: 才可以被解析为一个 Vue 组件。这一点是必要的，为了避免和原生的自定义内置元素相混淆。

在组合式api中 组件声明触发的事件 可以显式地通过 defineEmits() 宏来声明。
如果你没有使用 <script setup>，则事件需要通过 emits 选项来定义，emit 函数也被暴露在 setup() 的上下文对象上：
example: 
export default {
  emits: ['inFocus', 'submit'],
  setup(props, ctx) {
    ctx.emit('submit')
  }
}