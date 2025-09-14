# 💼 Netherlands Job Tracker

## 📸 Application Screenshots

<table>
  <tr>
    <td width="50%" align="center">
      <img src="https://github.com/user-attachments/assets/54561cfe-0274-43f8-ba17-1061e62edcd0" width="90%" alt="Applied Jobs Interface"/>
      <br><b>📋 Applied Jobs Management</b>
    </td>
    <td width="50%" align="center">
      <img src="https://github.com/user-attachments/assets/b96c2c86-3e18-4abc-9f40-3118b9977769" width="90%" alt="Target Companies Interface"/>
      <br><b>🎯 Target Companies Research</b>
    </td>
  </tr>
</table>

---

A **Node.js full-stack job management application** designed for software development graduates in the Netherlands. It integrates an application tracking system with a company research system and comes pre-loaded with data on top Dutch tech companies.

*A Node.js full-stack job tracking application designed for CS graduates in Netherlands, featuring a dual-tab system for application tracking and company research with built-in data for top Dutch tech companies.*

## 🚀 Quick Start

```bash
# 1. Navigate to the project directory
cd JobTracking

# 2. Install dependencies (if needed)
npm install

# 3. Start the server
npm start

# 4. Access the application
# Open in browser: http://localhost:8000
```

## ⚡ Architecture

- **Backend**: Node.js + Express.js (Port 8000)
- **Frontend**: Vanilla HTML/CSS/JavaScript SPA
- **Data**: JSON file for persistent storage
- **API**: RESTful CRUD endpoints
- **Dual System**: Application Tracking + Target Company Research

## 🎯 Dual-Tab System

### 📋 Application Tracking
- Edit job application records in real-time.
- Manage application status: Applied → Interview → Offer/Rejected.
- Data is automatically synced to `jobs-data.json`.

### 🏢 Target Company Research
- Conduct in-depth research on top tech companies in the Netherlands.
- Manage priorities and plan your application timeline.
- Company information is synced to `targets-data.json`.

## 🇳🇱 Built-in Dutch Companies Data

**Top Tech Companies**: ASML, Booking.com, ING, Philips, Adyen, TomTom
**Application Records**: Irdeto, Databricks, Mammoet, Info Support, Pax8, etc.
**Internationalization Level**: 🌍 Highly International → 🏠 Relatively Local

## 📡 API Endpoints

```bash
# Job Application Data
GET    /api/jobs           # Get all applications
POST   /api/jobs           # Bulk save applications
POST   /api/jobs/add       # Add a single application
PUT    /api/jobs/:id       # Update an application
DELETE /api/jobs/:id       # Delete an application

# Target Company Data
GET    /api/targets        # Get all target companies
POST   /api/targets        # Bulk save target companies
POST   /api/targets/add    # Add a single target company
PUT    /api/targets/:id    # Update a target company
DELETE /api/targets/:id    # Delete a target company
```

## 💾 Data Persistence

- `jobs-data.json` - Stores job application records.
- `targets-data.json` - Stores target company research.
- Real-time synchronization ensures data is preserved after a server restart.

## 🔧 Tech Stack

- **Backend**: Node.js, Express.js, CORS
- **Frontend**: HTML5, CSS3, JavaScript ES6+
- **Storage**: JSON file system (fs.promises)
- **Design**: Responsive design with a blue theme (#3993DD).

## 🎨 Key Features

- ✅ **Real-time Editing**: Click on a cell to edit its content directly.
- 📊 **Status Statistics**: Visual analysis of application statuses.
- 🔄 **Auto Sync**: Data is saved to the file in real-time.
- 📱 **Responsive**: Perfectly adapted for both desktop and mobile devices.
- 🌐 **Bilingual**: The interface supports both Chinese and English.

---

**Ready to start your Netherlands job search journey?** Run `npm start` to launch the application! 🇳🇱

*Ready to start your Netherlands job search journey?* Run `npm start` to launch the application! 🚀
