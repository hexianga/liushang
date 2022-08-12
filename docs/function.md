## 目录

## 函数式编程（FP）特点

- 作为一等公民可以传递
- 偏向于使用不可变变量

使用高度抽象的方式来解决问题会减少大量的重复代码甚至是重复模式，写得少就错的少。

FP 中的概念：高阶函数，函数的组合(compose 和 pipe)，partial（偏函数）和 curry（柯里化），PF，递归

## 函数式编程的场景

1. 递归
2. 排序

你不理解的代码，实际上就是不值得信任的代码。你不信任的代码，实际上就是你不理解的代码[1]。

函数式编程为提高代码的可读性提供了一种方案。

一些函数式编程中的概念学习成本不高，而且能极大的提高代码的可读性，比如 map,filter ，所以大部分人在刚刚开始接触函数式编程会觉得其还挺好的，但是比如对 reduce,compose,transduce，刚开始接触就会觉得不熟悉，不好理解，也就觉得可读性低。不过觉得不好理解还是不熟悉造成的，

## imperative 和 declarative

- 指令式编程（imperative）关注告诉计算机如何一步步的做某件事情，这也是大多数人习惯的代码风格；
- 声明式编程（declarative）则关注每一步的输出，函数式编程则从本质上更具声明式特点。
  声明式编程比指令式编程要容易理解。计算机擅长指令式，而我们擅长声明式。

函数中的 Arguments 和 parameters:

> Arguments are the values you pass in, and parameters are the named variables inside the function that receive those passed-in values.

函数式编程中我们应当尽量避免不确定个数参数的函数。更具体的说，函数式编程者更倾向于使用一元函数。

## the shape of function

下面是一个简单的例子：

```
getPerson(function onPerson(person) {
  return renderPerson(person)
})
```

通过等式推理（equational Reasoning），上面的函数可以写做下面这样：

```
getPerson(renderPerson)
```

函数具备相同的 shape 时是可互换的(interchangeable)，在学习函数式编程之前，我也曾在代码中写过这种风格的代码，只不过之前一直没有那么理解。

## partial（偏函数）和 curry（柯里化）

partial（偏函数）是一种减少函数元数（arity）的方法

partial（偏函数）:

```
function partial(fn,...presetArgs) {
    return function partiallyApplied(...laterArgs){
        return fn( ...presetArgs, ...laterArgs );
    };
}

function add(x,y) {
    return x + y;
}

[1,2,3,4,5].map( partial( add, 3 ) );
```

柯里化则可以看作偏函数的一种特例，其元数会被减少到 1 ，其通过一系列连续的函数调用实现，每个函数都接受一个参数，一旦所有的参数被这些函数调用具体化了，原始函数会基于收集到的所有参数执行。

```
function curry(fn,arity = fn.length) {
    return (function nextCurried(prevArgs) {
        return function curried(nextArg) {
            var args = [ ...prevArgs, nextArg ];

            if (args.length >= arity) {
                return fn( ...args );
            }
            else {
                return nextCurried( args );
            }
        };
    })( [] );
}

function sum(...nums) {
    var total = 0;
    for (let num of nums) {
        total += num;
    }
    return total;
}

var curriedSum = curry( sum, 5 );
curriedSum( 1 )( 2 )( 3 )( 4 )( 5 );
```

curriedSum 展开后实际上是下面这样的

```
function curriedSum(v1) {
    return function(v2){
        return function(v3){
            return function(v4){
                return function(v5){
                    return sum( v1, v2, v3, v4, v5 );
                };
            };
        };
    };
}

// 如果写作箭头函数还可以这样写
curriedSum = v1 => v2 => v3 => v4 => v5 => sum( v1, v2, v3, v4, v5 );
```

[参考](https://zhuanlan.zhihu.com/p/74777206)

IIFES：立即调用函数表达式

为了减少副作用，函数式变成鼓励我们尽可能的写纯函数 PF（pure function）。

## recursive

一般来说，递归需要满足以下两个条件：

- 基线条件（base case）：函数不再调用自己的条件
- 递归条件（recursive case）: 函数调用自己的条件

> 编程说穿了就是两个方面，data 和这些 data 上的 operation,
>
> - oop, 就是让 operation 围绕 data， 这样的好处是，当你要添加新的 data type 的时候，好方便! 原来写的代码都不用改。 但是你要给已经写好的 data type 添加方法怎么办？ 比如我要你给 java 自带的 string 加个 python 那种乘法。
> - functional programming 采取的是另一种思路，data 更多的围绕 operation， 所以添加新的方法很容易。
