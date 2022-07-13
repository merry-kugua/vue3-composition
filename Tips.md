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