# JavaScript 练习

四个循序渐进的前端练习，覆盖 DOM 事件、闭包、异步、定时器与 AJAX。每个目录都是独立的 HTML 页面，不依赖构建工具。

## 目录

| 目录 | 主题 | 要点 |
|------|------|------|
| `te1/` | DOM 事件与闭包 | 按钮点击监听；闭包实现计数器；查看原型链 |
| `te2/` | 事件委托与异步 | 点击方块切换黑/红背景（事件委托）；Promise、`async/await` 与 `try...catch` |
| `te3/` | 定时器与 `this` | `setTimeout` / `setInterval` / `clearTimeout`；`bind` / `call` 改变 `this`；方块定时移动动画 |
| `te4/` | AJAX | `XMLHttpRequest` 读取本地 JSON 并解析 |

每个练习由 `test.html` 和 `scripts/test.js` 组成，`te4` 额外带一个 `scripts/test.json`。

## 运行

直接双击对应的 `test.html` 即可（纯静态页面）。

`te4` 用 XHR 读取本地 JSON，部分浏览器会因 `file://` 的同源策略拦截请求。建议在该目录下起一个静态服务器：

```bash
cd te4
python -m http.server 8000
# 浏览器打开 http://localhost:8000/test.html
```

## 说明

- 代码以验证 API 用法为主，保留了注释掉的实验片段（Promise、异常、`window.open` 等），方便对照复习。
- `te2/scripts/test.js` 中的 `async` 函数 `a()` 只定义未调用。
