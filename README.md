# 💼 荷兰求职追踪系统 | Netherlands Job Tracker

## 📸 Application Screenshots

<table>
  <tr>
    <td width="50%" align="center">
      <img 
src="https://github.com/user-attachments/assets/54561cfe-0274-43f8-ba17-1061e62edcd0" 
width="90%" alt="Applied Jobs Interface"/>
      <br><b>📋 Applied Jobs Management</b>
    </td>
    <td width="50%" align="center">
      <img 
src="https://github.com/user-attachments/assets/b96c2c86-3e18-4abc-9f40-3118b9977769" 
width="90%" alt="Target Companies Interface"/>
      <br><b>🎯 Target Companies Research</b>
    </td>
  </tr>
</table>

---

专为荷兰软件开发专业毕业生设计的**Node.js全栈求职管理应用**，集成申请追踪与公司研究双系统，内置荷兰顶级科技公司数据。

*A Node.js full-stack job tracking application designed for CS graduates in Netherlands, featuring dual-tab system for application tracking and company research with built-in data for top Dutch tech companies.*

## 🚀 快速启动 | Quick Start

```bash
# 1. 进入项目目录
cd JobTracking

# 2. 安装依赖(如果需要)
npm install

# 3. 启动服务器
npm start

# 4. 访问应用
# 浏览器打开: http://localhost:3000
```

## ⚡ 核心架构 | Architecture

- **后端**: Node.js + Express.js (端口3000)
- **前端**: 原生HTML/CSS/JavaScript SPA
- **数据**: JSON文件持久化存储
- **API**: RESTful CRUD接口
- **双系统**: 申请追踪 + 储备公司研究

## 🎯 双Tab系统 | Dual-Tab System

### 📋 申请追踪 (Application Tracking)
- 实时编辑求职申请记录
- 状态管理：Applied → Interview → Offer/Rejected  
- 自动数据同步至 `jobs-data.json`

### 🏢 储备公司研究 (Target Company Research)
- 荷兰顶级科技公司深度研究
- 优先级管理和申请时间线规划
- 公司信息同步至 `targets-data.json`

## 🇳🇱 内置荷兰公司数据 | Built-in Dutch Companies

**顶级科技公司**：ASML、Booking.com、ING、Philips、Adyen、TomTom
**已申请记录**：Irdeto、Databricks、Mammoet、Info Support、Pax8等
**国际化程度标注**：🌍极高国际化 → 🏠相对本土

## 📡 API接口 | API Endpoints

```bash
# 申请数据
GET    /api/jobs           # 获取所有申请
POST   /api/jobs           # 批量保存申请
POST   /api/jobs/add       # 添加单个申请
PUT    /api/jobs/:id       # 更新申请
DELETE /api/jobs/:id       # 删除申请

# 储备公司数据  
GET    /api/targets        # 获取所有目标公司
POST   /api/targets        # 批量保存目标公司
POST   /api/targets/add    # 添加单个目标公司
PUT    /api/targets/:id    # 更新目标公司
DELETE /api/targets/:id    # 删除目标公司
```

## 💾 数据持久化 | Data Persistence

- `jobs-data.json` - 求职申请记录  
- `targets-data.json` - 储备公司研究
- 实时同步，服务器重启数据保留

## 🔧 技术栈 | Tech Stack

- **Backend**: Node.js, Express.js, CORS
- **Frontend**: HTML5, CSS3, JavaScript ES6+
- **Storage**: JSON文件系统 (fs.promises)
- **Design**: 响应式设计，蓝色主题(#3993DD)

## 🎨 核心功能 | Key Features

- ✅ **实时编辑**：点击单元格直接编辑
- 📊 **状态统计**：申请状态可视化分析  
- 🔄 **自动同步**：数据实时保存到文件
- 📱 **响应式**：完美适配桌面/移动端
- 🌐 **多语言**：中英双语界面

---

**准备开始您的荷兰求职之旅？** 执行 `npm start` 启动应用！🇳🇱

*Ready to start your Netherlands job search journey?* Run `npm start` to launch the application! 🚀