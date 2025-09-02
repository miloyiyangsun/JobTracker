# 🚀 Job Tracker - 无感双向数据同步版本

## ✨ 新特性
- **真正的双向同步**: 网页端修改 ↔ JSON文件修改，完全无感
- **实时数据同步**: 每次修改自动保存到本地JSON文件
- **零配置启动**: 一个命令即可运行
- **API驱动**: 轻量级Node.js后端，支持RESTful API

## 🏃‍♂️ 快速开始

### 1. 安装依赖（首次运行）
```bash
npm install
```

### 2. 启动应用
```bash
npm start
# 或者
node server.js
```

### 3. 访问应用
打开浏览器访问: **http://localhost:3000**

### 4. 使用体验
- ✅ 在网页端添加/编辑/删除job → 自动同步到 `jobs-data.json`
- ✅ 直接编辑 `jobs-data.json` 文件 → 刷新网页看到变化
- ✅ 完全无感的双向数据同步！

## 📁 文件结构
```
JobTracking/
├── server.js          # API服务器
├── index.html          # 前端页面
├── jobs-data.json      # 数据文件（自动同步）
├── package.json        # 依赖配置
└── README-API.md       # 本说明文档
```

## 🔧 API端点
| 方法 | 路径 | 功能 |
|------|------|------|
| GET | `/api/jobs` | 获取所有jobs |
| POST | `/api/jobs` | 批量保存jobs |
| POST | `/api/jobs/add` | 添加单个job |
| PUT | `/api/jobs/:id` | 更新单个job |
| DELETE | `/api/jobs/:id` | 删除job |

## 💡 使用场景

### 场景1: 网页端操作
1. 在网页上添加新job
2. 编辑公司名、职位、状态等
3. 删除不需要的job
4. **所有操作自动同步到JSON文件**

### 场景2: 直接编辑JSON
1. 用VS Code等编辑器打开 `jobs-data.json`
2. 直接修改数据（添加、删除、编辑）
3. 保存文件
4. 刷新浏览器页面，**立即看到变化**

## 🛠️ 技术实现
- **后端**: Node.js + Express.js
- **前端**: 原生HTML/CSS/JavaScript  
- **数据存储**: 本地JSON文件
- **通信**: RESTful API + fetch()

## 🔄 数据同步流程
```
网页操作 → API调用 → 写入JSON文件
编辑JSON → 刷新页面 → API读取 → 显示数据
```

## 🚨 注意事项
- 服务器必须运行才能使用（`npm start`）
- 访问地址固定为 `http://localhost:3000`
- JSON文件格式错误会导致数据加载失败
- 关闭服务器（Ctrl+C）会停止API服务

## 📊 对比传统方案
| 功能 | 传统localStorage | 新API方案 |
|------|------------------|-----------|
| 数据持久化 | ✅ 浏览器内 | ✅ 本地文件 |
| 跨浏览器同步 | ❌ | ✅ |
| 直接编辑数据 | ❌ | ✅ |
| 数据备份 | ❌ | ✅ |
| 无感同步 | ❌ | ✅ |

现在你拥有了完美的双向数据同步体验！🎉