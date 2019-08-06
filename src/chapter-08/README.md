# 函子

### 定义

- 函子是一个普通对象（在其他语言中，可能是一个类），它实现了 map 函数，在遍历每个对象值的时候生成一个新的对象（函子是一个持有值的容器/函子是一个实现了 map 契约的对象）

### map 函数

- map 函数从 Container 中取出值，将传入的函数应用于其上，并将结果放回 Container

```
// map函数定义
Container.prototype.map = function(fn) {
  return Container.of(fn(this.val));
}
```

### 函子的实现

- MayBe
- Either
- Pointed
