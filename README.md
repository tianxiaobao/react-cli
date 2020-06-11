`npm run dev`
本地开发

`npm run test`
测试环境

`npm run build`
线上环境

`npm run report`
查看上线文件打包大小


## 目录规范 ##

        project_name
    ├──  src
    ├    ├── assets                         // 资源文件
    ├    ├── common                         // 公共方法
    ├    |   ├── loadable.js                // 懒加载
    ├    ├── http
    ├    |   ├── config.js                  // 不同环境的api配置
    ├    |   ├── index.js                   // 封装axios，可自己配置拦截器
    ├    ├── pages                          // 页面文件夹
    ├    |   ├── components                 // 所有页面公用的组件，可定义header和footer
    ├    |   ├── demo                       // demo文件夹，可删除
    ├    |   |   ├── actions                // 页面方法
    ├    |   |   ├── components             // 页面组件
    ├    |   |   ├── reducer
    ├    |   |   |   ├── index.js           // 页面状态
    ├    |   |   ├── config.js              // 页面配置文件，主要为接口地址、其他常量
    ├    |   |   ├── index.js               // 页面主文件
    ├    |   ├── layout                     // 页面布局
    ├    ├── store
    ├    |   ├── index.js                   // 所有页面状态集合
    ├    ├── style
    ├    |   ├── reset.scss                 // css预设
    ├    ├── index.js                       // 入口文件
    ├    ├── router.js                      // 路由文件
    ├── .babelrc                            // babel配置文件
    ├── .eslintignore                       // eslint配置文件，不需要校验的文件
    ├── .eslintrc.js                        // eslint配置文件
    ├── .gitignore                          // git配置文件
    ├── favicon.ico                         // 网站图标
    ├── index.html                          // html文件
    ├── package.json                        // 依赖及命令
    ├── README.md                           // 开发说明


#### 不同环境配置
src/http/config.js