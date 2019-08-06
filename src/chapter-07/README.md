# 组合与管道

### Unix 理念

- 每个程序只做好一件事情，为了完成这一项新的任务，重新构建要好于在复杂的旧程序中添加新“属性”
- 每个程序的输出应该是另一个尚未可知的程序的输入
- 每一个基础函数都需要接受一个参数并返回数据

### 函数式组合

- 定义
  创建一个函数，通过把一个函数的输出作为输入发送给另一个函数的方式把两个函数结合起来
- Note
  compose 的数据流是从右至左的，最右侧的函数先执行，最左侧的函数后执行
- 特性

  - 1、组合满足结合律

  ```
    compose(f, compose(g, h)) <===> compose(compose(f, g), h)
  ```

  - 2、调试：利用 tap 函数

  ```
  const identify = it => {
    console.log(it);
    return it;
  }
  compose(A, B, C);
  // 将identify函数添加到数据流中可能出现错误的地方,将会打印出B的输出
  compose(A, B, identify, C)
  ```

### 管道/序列

- 定义
  从左至右处理数据流的过程称为管道(pipeline)或序列(sequence)
