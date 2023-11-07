# CSS

#### 单行多行显示省略号

```css
.aa {
	overflow:hidden;
	text-overflow:ellipsis;
	white-space:nowrap;
}
.bb {
  height:65px;
  overflow:hidden;
  text-overflow:ellipsis;

  display:-webkit-box;
  -webkit-box-orient:vertical;
  -webkit-line-clamp:3;
  overflow:hidden;
}
```

#### **清除浮动的方式如下：**

- 给父级div定义`height`属性

- 最后一个浮动元素之后添加一个空的div标签，并添加`clear:both`样式

- 包含浮动元素的父级标签添加`overflow:hidden`或者`overflow:auto`

- 使用 :after 伪元素。由于IE6-7不支持 :after，使用 zoom:1 触发 hasLayout**

  ```css
  .clearfix:after{
      content: "\200B";
      display: table; 
      height: 0;
      clear: both;
    }
  .clearfix{
    *zoom: 1;
  }
  ```

  ### 一、CSS基础

  #### 一. CSS选择器及其优先级

  1. id选择器 #id  100
  2. 类选择器 #classname 10
  3. 属性选择器 a[ref="eee"] 10
  4. 伪类选择器 li:last-child 10
  5. 标签选择器 div 1
  6. 伪元素选择器 li:after
  7. 相邻兄弟选择器 h1+p   0
  8. 子选择器  ul>li   0
  9. 后代选择器 li a   0
  10. 通配符选择器 * 0

  对于选择器的优先级

  - 内联样式 1000
  - id选择器 100
  - 类选择器 伪类选择器 标签选择器 10
  - 伪元素选择器 标签选择器 1

  注意事项

  - !important声明的样式的优先级最高
  - 如果优先级相同，则最后出现的样式生效
  - 继承得到的样式的优先级最低
  - 通用选择器、子选择器和相邻同胞选择器并不在这四个等级中，所以它们的权值都为0
  - 样式表的来源不同时，优先级顺序为：内联样式 内部样式 外部样式 浏览器用户自定义样式 浏览器默认样式

#### 二、display的属性值及其作用

```css
none   元素不显示，并且会从文档流中移除
block  块类型。默认宽度为父元素宽度，可设置宽高，换行显示
inline 行内元素类型。默认宽度为内容宽度，不可设置宽高 同行显示
inline-block 默认宽度为内容宽度，可以设置宽高，同行显示。
list-item 像块类型元素一样显示，并添加样式列表标记
table 此元素会作为块级表格来显示
inherit 规定应该从父元素继承display属性的值
行内元素：
设置宽高无效
可以设置水平方法方向的margin和padding属性，不能设置垂直方向的padding和margin
不会自动换行
块级元素：
可以设置宽高
设置marign和padding都有效
可以自动换行
多个块状，默认排列从上到下。
```

#### 三、隐藏元素的方法有哪些

```
display:none: 渲染树不会包含该渲染对象，因此该元素不会在页面中占据位置，也不会响应绑定的监听事件
visibility:hidden 元素在页面中仍占据空间，但是不会响应绑定的监听事件。
opacity:0 将元素的透明度设置为0，以此来实现元素的隐藏。元素在页面中仍然占据空间，并且能够响应元素绑定的监听事件。
position: absolute 通过使用绝对定位将元素移除可视区域内，以此来实现元素的隐藏。
z-index: 负值 来使其他元素遮盖住该元素，以此来实现隐藏
clip/clip-path: 使用元素裁剪的方法来实现元素的隐藏，这种方法下，元素仍在页面中占据位置，但是不会响应绑定的监听事件
trabsform: scale(0,0) 将元素缩放为0，来实现元素的隐藏。这种方法下元素仍在页面中占据位置，但是不会响应绑定的监听事件。
```

#### 四、link和@import的区别

两者都是外部引用CSS的方式，它们的区别如下：

link是XHTML标签，除了加载CSS外，还可以定义RSS等其他事物；@import属于CSS范畴，只能加载CSS

link引用CSS时,在页面载入时同时加载；@import需要页面网页完全载入以后加载

link是XHTML标签，无兼容问题；@import是在CSS2.1提出的，低版本的浏览器不支持

link支持使用Javascript控制DOM去改变样式；而@import不支持

#### 五、transition和animation的区别

transiton是过度属性，强调过度，它的实现需要触发一个事件(比如鼠标移动上去，焦点，点击等)才执行动画。它类似于flash的补间动画，设置一个开始关键帧 一个结束关键帧

Animation 是动画属性 它的实现不需要触发时间，设定很高时间之后可以自己执行， 且可以循环一个动画。它也类似于flash的补间动画，但是它可以设置多个关键帧（用@keyframe定义）完成动画。

#### 六、display:none与visibility:hidden的区别

这两个属性都是让元素隐藏，不可见。两者区别如下

1. 在渲染树种

   display:none 会让元素完全从渲染树中小时，渲染时不会占据任何空间

   Visibility:hidden 不会让元素从渲染树中消失，渲染的元素还会占据相应的空间，只是内容不可见

2. 是否是继承属性

   display:none 是非继承属性，子孙加点会随着父节点从渲染树消失，通过修改子孙节点的属性也无法显示

   Visibility: hidden 是继承属性，子孙节点消失是由于继承了hidden 通过设置visibility: visible 可以让子孙节点显示

3. 修改常规文档流中元素的display通过会造成文档的重排，但是修改visibility属性只会造成本元素的重绘；
4. 如果使用读屏器，设置为display:none 的内容不会被读取，设置为visibility:hidden的内容会被读取。

#### 七、伪元素和伪类的区别和作用

  伪元素：在内容元素的前后插入额外的元素或者样式，但是这些元素实际上并不在文档中生成，它们只在外部显示可见，但是不会在文档的源代码中找到它们，因此，称为“伪”元素。例如

```css
p::before{content:"第一章"}
p::after{content:"Hot!"}
p::first-line{background:red}
p::first-letter{font-size:30px}
```

伪类：将特殊的效果添加到特定选择器上。它是已有元素上添加类别的，不会产生新的元素

#### 八、对requestAnimationFrame的理解

> window.requestAnimationFrame告诉浏览器--你希望执行一个动画，并且要求浏览器在下次重绘之前调用指定的回调函数更新动画。该方法需要传入一个回调函数作为参数，该回调函数会在浏览器下一次重绘之前执行。

该方法属于宏任务；使用cancelAnimationFrame来取消执行动画

优势：

CPU节能：

函数节流

减少DOM操作

#### 九、对盒模型的理解

Box-sizing: content-box标准盒模型

box-sizing：border-box IE盒模型(怪异盒模型)

#### 十、为什么有时候用translate来改变位置而不是定位？

trannslate是transform属性的一个值。改变transform或opacity不会触发浏览器重新布局(reflow)或重绘，只会触发复合。而改变绝对定会触发重新布局，进而触发重绘和复合。transform使浏览器为元素创建一个GPU图层，但改变绝对定位会使用CPU。因此translate更高效，可以缩短平滑动画的绘制时间。而translate改变位置时，元素依然会占据其原始空间，绝对定位就不会发生这种情况。

#### 十一、li与li之间有看不见的空不间隔是什么原因引起的？如何解决？

浏览器会把inline内联元素键的空白字符（空格、换行、Tab）渲染成一个空格。为了美观，通常是一个li放在一行，这导致li换行后产生换行字符，它变成一个空格，占用了一个字符的宽度。

1 为li设置float:left  不足：有些容器不能设置浮动

2 将所有li写在同一行 不足 代码不美观

3 将ul内的字符尺寸直接设置为0 即font-size 0 不足：ul中的其他字符尺寸也被设置为0

4消除 ul的字符间隔letter-spacing：-8px 不足：这也设置了 li内的字符间隔，因此需要将li内的字符间隔设置为默认letter-spacing：normal

#### 十二、CSS3中有哪些新特性

新增各种CSS选择器（：not（.input））: 所有从class不是input的节点

圆角  border-radius

多列布局 multi-column layout

阴影和反射 Shadow reflect

文字特性 text-shadow

线性渐变 gradient

旋转 transform

增加了旋转 缩放 定位 倾斜 动画 多背景

