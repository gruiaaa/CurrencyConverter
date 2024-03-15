## CurrencyConvert - 汇率转换项目

CurrencyConvert 是一个汇率转换项目，采用了前后端分离式开发。采用Koa2+ReactJS18+MySQL5.7开发，汇率信息来自[雅虎官网](https://finance.yahoo.com/currency-converter)。

### 后端 (back-end)

#### 目录结构
```
|-- back-end
|   |-- node_modules         # Node.js 依赖包
|   |-- package-lock.json    # 依赖包版本锁定文件
|   |-- package.json         # Node.js 项目配置文件
|   |-- src                  # 后端源代码
|   `-- .env                 # 环境变量配置文件
```
src文件夹目录为
```
src                                 # 后端源代码根目录
|-- app                             # 应用程序相关代码目录
|   |-- errHandler.js               # 错误处理器
|   `-- index.js                    # 应用程序入口文件
|-- config                          # 配置文件目录
|   `-- config.default.js           # 默认配置文件
|-- constant                        # 常量定义目录
|   `-- err.type.js                 # 错误类型定义文件
|-- controller                      # 控制器目录
|   |-- currency.controller.js      # 货币控制器
|   `-- user.controller.js          # 用户控制器
|-- db                              # 数据库相关文件目录
|   `-- seq.js                      # 数据库连接文件
|-- main.js                         # 主程序入口文件
|-- middleware                      # 中间件目录
|   |-- auth.middleware.js          # 身份验证中间件
|   `-- user.middleware.js          # 用户相关中间件
|-- model                           # 数据模型目录
|   |-- currency.model.js           # 货币数据模型
|   `-- user.model.js               # 用户数据模型
|-- router                          # 路由文件目录
|   |-- currency.route.js           # 货币路由
|   `-- users.route.js              # 用户路由
`-- service                         # 服务层目录
    |-- currency.service.js         # 货币服务
    `-- user.service.js             # 用户服务
```

#### 特点概述
1. 采用了中间件-控制层-服务层的分层架构，以提高代码的可维护性和可扩展性.
   + 中间件层：中间件主要用于处理请求和响应，以及执行通用的逻辑，比如身份验证、格式检查等。包含身份验证中间件 `auth.middleware.js` 和用户相关中间件 `user.middleware.js`。

   + 控制层：控制器负责路由处理和业务逻辑的调度，将请求委托给相应的服务进行处理。使用 Koa 路由库 koa-router 对路由进行分配,将请求发送到不同的控制器，包含货币逻辑控制器 `currency.controller.js` 和用户逻辑控制器 `user.controller.js`。

   + 服务层：服务层包含了具体的业务逻辑，负责与数据库交互、数据处理等操作。将业务逻辑封装在服务中，包含货币服务 `currency.service.js` 和用户服务 `user.service.js`。

2. 采用 Sequelize 库作为 ORM 框架。它提供了方便的模型定义和数据库查询功能，使得与数据库的交互更加便捷，提高了开发效率。
3. 统一的错误处理机制。定义了错误类型并对其进行分类，然后在统一的错误处理器 `errHandler.js`中进行处理，并同时遵循 RESTful 风格定义了 HTTP 错误响应状态码，提高 了API 的可读性和易用性。
4. 使用哈希算法对用户密码进行加密存储。
5. 使用了 JsonWebToken（JWT）对用户进行鉴权，只有经过身份验证的用户能够访问相应接口。
6. 集成第三方接口
   + 国旗接口：https://flagcdn.com
   + 汇率信息接口：https://finance.yahoo.com/currency-converter
7. 使用`dotenv`对环境变量统一管理。


#### 运行代码

1. 确保已安装 Node.js 环境和 MySQL 数据库。
2. 在 back-end 目录下运行以下命令安装依赖：
    ```
    npm install
    ```
3. 修改配置文件
    ```
    # 应用程序运行的端口
    APP_PORT = 8000

    # MySQL 数据库主机
    MYSQL_HOST = localhost
    
    # MySQL 数据库端口
    MYSQL_PORT = 3306

    # MySQL 数据库用户名
    MYSQL_USER = root

    # MySQL 数据库密码
    MYSQL_PWD = root

    # MySQL 数据库名称
    MYSQL_DB = cw6003

    # JWT 密钥
    JWT_SECRET = this_is_a_sercet
    ```
4. 启动后端服务：
   ```
   npm run dev
   ```


### 前端
目录结构
```
|-- front-end
|   |-- README.md            # 前端项目说明
|   |-- node_modules         # 前端依赖包
|   |-- package-lock.json    # 依赖包版本锁定文件
|   |-- package.json         # 前端项目配置文件
|   |-- public               # 公共资源目录
|   `-- src                  # 前端源代码
```
src文件夹目录结构为
```
.
|-- App.js                     # 应用程序主组件
|-- actions                    # 动作目录
|   `-- actions.js             # 动作定义文件
|-- index.css                  # 主样式文件
|-- index.js                   # 入口文件
|-- reducers                   # 减速器目录
|   `-- reducers.js            # 减速器定义文件
`-- views                      # 视图目录
    |-- Change                 # 修改视图
    |-- Layout                 # 布局视图
    `-- Login                  # 登录视图
```

#### 特点概述
1. 前端采用Reactjs进行开发。
2. 使用Redux进行状态管理。
3. 使用AntiDesginUI进行开发。


#### 运行代码

1. 确保已安装 Node.js 环境
2. 在 front-end 目录下运行以下命令安装依赖：
    ```
    npm install
    ```
3. 启动前端服务：
   ```
   npm start
   ```




### 使用说明

1. 后端服务默认运行在 [http://localhost:8000](http://localhost:8000)。
2. 前端开发服务器默认运行在 [http://localhost:3000](http://localhost:3000)。
3. 访问前端页面即可开始使用汇率转换功能。

### 版本更新内容摘要
- v1.0.0: 初始版本发布，实现基本的汇率转换功能。


