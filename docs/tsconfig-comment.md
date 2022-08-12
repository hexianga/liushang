```
export default {
  compilerOptions: {
    target: 'ESNext', // 指定生成的 js 代码的版本。
    // useDefineForClassFields 此时默认为 true。
    // "lib": ["DOM", "DOM.Iterable", "ESNext"],
    skipLibCheck: true, // 忽略 .d.ts 声明文件的类型检查
    /**
     * https://www.typescriptlang.org/tsconfig#noUncheckedIndexedAccess
     * 对象和数组上的属性访问的时候需要判断 undefined
     * 如果不需要索引，则可以使用 for–of 循环或 forEach 调用来遍历各个元素。
     */
    // "noUncheckedIndexedAccess": true,
    /**
     * https://www.typescriptlang.org/tsconfig#esModuleInterop
     * 在处理 commonjs/AMD/CMD 的时候在编译阶段和代码层面提供 shim 来确保兼容
     */
    esModuleInterop: false,
    /**
     * 允许合成的默认导出，也就是当没有默认导出的时候不会报错。
     * 比如 React： import * as React from "react"; => import React from "react";
     */
    allowSyntheticDefaultImports: true,
    strict: true, // https://www.typescriptlang.org/tsconfig#strict 此时有 8 个属性都默认为 true 了
    forceConsistentCasingInFileNames: true, // linux 对文件名大小写敏感，window，mac 不敏感。为了避免不同系统因为文件大小写产生问题，这里强制约束大小写敏感
    /**
     * node 中需要设置为 commonjs。
     * 默认是 CommonJS，如果 target 是ES3， ES5,,ES6/ES2015.
     */
    module: 'esnext', // 指定最终生成的代码的模块类型(amd,umd,commonjs)
    moduleResolution: 'Node',
    resolveJsonModule: true,
    isolatedModules: true,
    noEmit: true,
    jsx: 'react-jsx',
    baseUrl: '.',
    paths: {
      'src/*': ['src/*'],
    },
  },
  exclude: ['node_modules', 'api'],
};

// Compiler Options: https://www.typescriptlang.org/tsconfig/
// 配置文件: https://www.typescriptlang.org/docs/handbook/tsconfig-json.html

// files: 在文件数量小的时候使用，不支持 glob pattern。 和 include 类似，同时出现时优先级高于 include。
// include: ts 将只处理 include 中的文件，可以使用 glob pattern。files 不存在时默认 **。
// exclude: 这个配置只是将 include 中找到的文件忽略掉。是配合 include 使用的。Default: node_modules,bower_component

// babel、TS 编译器会将代码编译为 cjs。默认情况下，代码里写的 esm 都会被 babel、TS 转成 cjs
```
