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
slot 插槽的使用
插槽内容可以访问刀父组件的数据作用域,因为插槽内容本身是在父组件模板中定义的
例如 
<span>{{message}}</span>
<base-buttton>{{message}}</base-buttton>
这里两个{{message}}插值表达式渲染的内容是一样的
tips:
 插槽内容无法访问子组件的数据,
   任何父组件模版中的东西都只被编译到父组件作用域中,而任何子组件模板中的东西都只被编译到子组件的作用域中
插槽默认值: 
  当我们不设置默认值时,并且在父组件中不进行赋值时,这是slot为空
  当我们设置默认值时,不对slot进行赋值时会显示默认值,如果进行赋值后会显示传递的值
具名插槽
  slot 会有一个特殊的attribute 即name,用来给插槽分配唯一的ID,用来确定每一处要分配的渲染内容
  例如常见的
  <template #header></template>
  v-slot 有对应的简写 #，因此 <template v-slot:header> 可以简写为 <template #header>。其意思就是“将这部分模板片段传入子组件的 header 插槽中”
什么是依赖注入?
  Prop的逐层传递
  任何后代的组件树，无论层级有多深，都可以注入由父组件提供给整条链路的依赖。
    🔗 [https://staging-cn.vuejs.org/guide/components/provide-inject.html]
    Provide
    要为组件后代供给数据，需要使用到 provide() 函数：
      example: 
        <script setup>
          import { provide } from 'vue'
          provide(/* 注入名 */ 'message', /* 值 */ 'hello!')
        </script>
    provide() 函数接收两个参数。第一个参数被称为注入名，可以是一个字符串或是一个 Symbol。后代组件会用注入名来查找期望注入的值。一个组件可以多次调用 provide()，使用不同的注入名，注入不同的依赖值。
    第二个参数是供给的值，值可以是任意类型，包括响应式的状态，比如一个 ref：
应用层的Provide
  import { createApp } from 'vue'
  const app = createApp({})
  app.provide(/* 注入名 */ 'message', /* 值 */ 'hello!')
    Inject
    要注入祖先组件供给的数据，需使用 inject() 函数：
      example:
        <script setup>
          import { inject } from 'vue'
          const message = inject('message')
        </script>
    tips: 
    如果供给的值是一个 ref，注入进来的就是它本身，而不会自动解包。这使得被注入的组件保持了和供给者的响应性链接
    问题1:
     我们需要在injector组件中更改数据要如何实现?
     我们需要在injector组件中的数据要如何才能不被更改呢?
     详情请看 src/components/下的provide & inject 组件
      