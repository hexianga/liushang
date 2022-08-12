## 目录

## @rule

[@rule 文档](https://developer.mozilla.org/en-US/docs/Web/CSS/At-rule)

- nested rule: 可以在条件组中使用的 @rule。(除了 @import @charset @namespace 的 @ 规则都是可以嵌套的)
- 条件组: 可以构建条件组的 @rule: @media @surpports @document(不推荐)

## media query

[media query 文档](https://developer.mozilla.org/en-US/docs/Web/CSS/@media)

[media types](https://drafts.csswg.org/mediaqueries/#media-types)：screen print(打印预览) all

## 常用 media query code

- 不同设备不同样式

```css
@media screen {
  .normal-text {
    font-size: 20px;
  }
}
@media print {
  .normal-text {
    font-size: 80px;
  }
}
```

- 尺寸的常见分类:

breakpoint: 分割尺寸的临界值。

- tailwind: sm md lg xl 2xl

tailwind 默认移动优先（media 设置 `min-width`)，所以要适配大屏幕就使用上述前缀。

sm，md 等前缀不要理解成小屏，中屏。而要理解为 breakpoint。

如果用 tailwind 来设计 PC 页面，那么我们希望大屏优先，要适配小屏的时候添加前缀。这时使用 `max-width`

> By default, Tailwind uses a mobile first breakpoint system, similar to what you might be used to in other frameworks like Bootstrap.

> What this means is that unprefixed utilities (like uppercase) take effect on all screen sizes, while prefixed utilities (like md:uppercase) only take effect at the specified breakpoint and above.

- 小屏优先，适配大屏: bootstrap，sketch，adobe
- 大屏优先，适配小屏: apple，figma，microsoft,腾讯文档，

到底是要适配大屏还是适配小屏，就看我们的 media 写的是 `min-width` 还是 `max-width`。

```json
{
  "sm": ">640px",
  "md": ">768px",
  "lg": ">1024px",
  "xl": ">1280px",
  "2xl": ">1536px"
}
```

- ant design: xs sm md lg xl xxl

大屏优先，默认设计的是大屏，当要适配小屏的时候添加前缀。

```json
{
  "xs": "<480px",
  "sm": "576px",
  "md": "768px",
  "lg": "992px",
  "xl": "1200px",
  "xxl": "1600px"
}
```

- bootcss: xs sm md lg

```json
{
  "xs": "<768px",
  "sm": ">768px",
  "md": ">992px",
  "lg": ">1200px"
}
```

- 常见的适配不同不同屏幕尺寸的表达式

大屏优先，要适配小屏添加前缀。尺寸从大到小

```css
@media screen and (max-width: 1200px) {
  .box-border {
    border-color: yellow;
  }
}
@media screen and (max-width: 1000px) {
  .box-border {
    border-color: blue;
  }
}
@media screen and (max-width: 800px) {
  .box-border {
    border-color: green;
  }
}
@media screen and (max-width: 400px) {
  .box-border {
    border-color: red;
  }
}
```

小屏优先，要适配大屏添加前缀。尺寸从小到大

```css
@media screen and (min-width: 400px) {
  .box-border {
    border-color: red;
  }
}
@media screen and (min-width: 800px) {
  .box-border {
    border-color: green;
  }
}
@media screen and (min-width: 1000px) {
  .box-border {
    border-color: blue;
  }
}
@media screen and (min-width: 1200px) {
  .box-border {
    border-color: yellow;
  }
}
```

如果想要在小屏时没有多个样式同时匹配，不存在覆盖，也不用考虑 `@media` 的顺序的话。那可以设置 range 实现精准匹配。

```css
@media screen and (min-width: 1000px) {
  .box-border {
    border-color: yellow;
  }
}
@media screen and (max-width: 1000px) and (min-width: 800px) {
  .box-border {
    border-color: blue;
  }
}
@media screen and (max-width: 800px) and (min-width: 400px) {
  .box-border {
    border-color: green;
  }
}
@media screen and (max-width: 400px) {
  .box-border {
    border-color: red;
  }
}
```

## 应用

页面布局至少要准备三个尺寸(figma 官网)：小 中 大

各个部分(header, footer)可能有自己的 breakpoint，这些再进行单独设置。
