### CSS

Inline-block:间隙问题

```javascript
inline-block块之间的不可见符号会被保留父层字体的1/3大小的空间
```

1. 给元素增加div并且设置font-size等于0

2. 改变书写方法写在一行或者打包到一行。

3. 去除闭合标签

4. 设置margin为负值

5. css hack

   知道间隙的产生原因和间隙的大小后，动手写一个css hack也是一种很好的方法
   1、将父容器的字体大小设置为0，可解决绝大多数浏览器（老版本safari不支持）
   2、针对不支持上条的浏览器设置字块或字符间间隙letter-spacing／word-spacing，推荐letter-spacing，因为此属性不会产生负间隙，但需要注意，要在子元素上设置letter-spacing:0
   3、如果你转化但是块对象，那需要为低版本浏览器设置inline兼容，不让样式会乱掉
   总结以上几点给出以下代码

```css
.parent {
    letter-spacing: -.3333em;
    font-size: 0;
}
.child {
    display: inline;
    display: inline-block;
}
```

### 浏览器最小显示12px字体的解决方法

谷歌浏览器上显示字体最小为12px，css设置font-size：10px，显示的时候还是12px大小

可以利用css中的transform属性来缩小：

transform:scale(0.5,1)

第一个参数是X轴比例，第二个参数是Y轴比例，第二个参数可省略，若缺省则等于第一个参数。

缩小方向：

默认是往中间缩小，可以添加 transform-origin:left ，往左侧缩

注意：

①transform只有块级元素有这属性，一开始我把这个属性设置在span上，怎么都不出效果，换div就有效果了

②如果你是因为字体太大，放div中会自动换行，想用这方法来压缩字体，去除换行，那就省省吧，我刚踩过这个坑。这种方式并不是在压缩字体，而是在压缩整个div。

举个例子：

有一个div，想写10个字，但它太窄了，写到第8个字之后，就换行了。这时想加上transform:scale(0.5,1)，来实现不换行。最终的效果是：最后2个字仍然在下面一行，整个div变窄了。

最后我的方法是，把div宽度加长，右margin设为负数，再进行压缩
————————————————
版权声明：本文为CSDN博主「Geoff俊」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/weixin_40673464/article/details/79911532

### 4种通过iframe跨域与其他页面通信的方式

1. Location.hash
2. Window.name
3. postMessage
4. document.domain降域

