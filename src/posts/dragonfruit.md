---
date: 2023-10-13
category:
  - Java基础
tag:
  - 面试
  - 基础语法
---

# double类型的值可以赋给long变量吗？

在不进行强制转换的情况下，double类型的值可以赋给long变量吗？

**不可以**。即使double类型的值是1，这个值也不能赋给long变量。

比如下面这两种写法，都是错的，编译器会报错：

```java
double a = 0.1
long b = a; // 编译报错
long b = 0.1; // 编译报错
```

```java
double a = 1;
long b = a; // 编译报错
long b = 1; // 这个可以
```