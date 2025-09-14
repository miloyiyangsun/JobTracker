// 🚀 【Node.js + Express.js 后端服务器】
// 这个文件运行在Node.js环境中，不是浏览器！

// 📦 【导入Node.js模块】 
const express = require('express');  // Express.js框架 - 简化Web服务器开发
const cors = require('cors');        // 跨域支持 - 让浏览器能访问这个API
const fs = require('fs').promises;   // Node.js文件系统API - 操作本地文件的核心能力
const path = require('path');        // Node.js路径处理 - 处理文件路径

// 🏭 【创建Express.js应用实例】
const app = express();  // Express.js的核心：创建Web应用
const PORT = 3001;      // 服务器端口
const JOBS_FILE = path.join(__dirname, 'jobs-data.json'); // Node.js计算文件绝对路径
const TARGETS_FILE = path.join(__dirname, 'targets-data.json'); // 储备公司数据文件路径

// ⚙️ 【Express.js中间件配置】
// 中间件 = Express.js的"流水线处理器"，每个请求都会经过这些处理
app.use(cors());           // Express.js中间件：允许跨域请求（浏览器 → Node.js）
app.use(express.json());   // Express.js中间件：自动解析JSON数据
app.use(express.static('.')); // Express.js中间件：提供静态文件服务（index.html等） // 提供静态文件服务

// 🗂️ 【Node.js文件系统操作 - 读取函数】
// 这是Node.js的核心能力：直接操作本地文件系统！浏览器做不到这个！
async function readJobsFile() {
    try {
        // 🔍 Node.js文件系统API：读取本地JSON文件
        const data = await fs.readFile(JOBS_FILE, 'utf8');
        return JSON.parse(data); // 将JSON字符串转为JavaScript对象
    } catch (error) {
        console.log('读取文件失败，使用默认数据:', error.message);
        // 📝 如果文件不存在，创建默认数据
        const defaultData = [
            {
                "id": 1,
                "company": "Irdeto",
                "position": "Junior Software Engineer", 
                "status": "applied",
                "appliedDate": "2025-08-31",
                "notes": "Application confirmed on 8/31. Under review by talent acquisition team."
            }
        ];
        await writeJobsFile(defaultData); // 自动创建默认文件
        return defaultData;
    }
}

// 💾 【Node.js文件系统操作 - 写入函数】
// 这是你的"超级浏览器"能力：浏览器无法直接写文件，但Node.js可以！
async function writeJobsFile(jobs) {
    try {
        // ✏️ Node.js文件系统API：写入数据到本地JSON文件
        await fs.writeFile(JOBS_FILE, JSON.stringify(jobs, null, 2), 'utf8');
        console.log('数据已同步到JSON文件');
        return true;
    } catch (error) {
        console.error('写入文件失败:', error);
        return false;
    }
}

// 🗂️ 【Node.js文件系统操作 - 储备公司读取函数】
// 专门处理targets-data.json的读取操作
async function readTargetsFile() {
    try {
        // 🔍 Node.js文件系统API：读取储备公司JSON文件
        const data = await fs.readFile(TARGETS_FILE, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        console.log('读取储备公司文件失败，使用默认数据:', error.message);
        // 📝 如果文件不存在，创建默认储备公司数据
        const defaultTargets = [
            {
                "id": Date.now(),
                "companyName": "Example Target Company",
                "industry": "Technology",
                "location": "Amsterdam, Netherlands",
                "priority": "high",
                "targetPosition": "Software Engineer",
                "applicationTimeline": "Q1 2025",
                "researchNotes": "Sample research notes for target company analysis",
                "contactInfo": "",
                "websiteUrl": "https://example.com",
                "careerPageUrl": "https://example.com/careers",
                "status": "researching"
            }
        ];
        await writeTargetsFile(defaultTargets);
        return defaultTargets;
    }
}

// 💾 【Node.js文件系统操作 - 储备公司写入函数】
// 专门处理targets-data.json的写入操作
async function writeTargetsFile(targets) {
    try {
        // ✏️ Node.js文件系统API：写入储备公司数据到本地JSON文件
        await fs.writeFile(TARGETS_FILE, JSON.stringify(targets, null, 2), 'utf8');
        console.log('储备公司数据已同步到JSON文件');
        return true;
    } catch (error) {
        console.error('写入储备公司文件失败:', error);
        return false;
    }
}

// 🌐 【Express.js API路由 - 这里是Express.js的核心功能！】
// Express.js将HTTP请求自动路由到对应的处理函数

// 📖 【GET /api/jobs - 读取所有jobs数据】
// 当浏览器发送GET请求到/api/jobs时，Express.js自动调用这个函数
app.get('/api/jobs', async (req, res) => {
    try {
        // 🔄 Express.js调用Node.js文件系统读取数据
        const jobs = await readJobsFile();
        // 📤 Express.js自动将JavaScript对象转为JSON并发送给浏览器
        res.json(jobs);
    } catch (error) {
        // ⚠️ Express.js的错误处理：返回HTTP 500状态码
        res.status(500).json({ error: '读取数据失败' });
    }
});

// 💾 【POST /api/jobs - 保存所有jobs数据】
// 当浏览器发送POST请求时，Express.js自动解析JSON数据并调用这个函数
app.post('/api/jobs', async (req, res) => {
    try {
        // 📥 Express.js自动解析浏览器发送的JSON数据到req.body
        const jobs = req.body;
        // 🔄 Express.js调用Node.js文件系统写入数据
        const success = await writeJobsFile(jobs);
        if (success) {
            // ✅ Express.js发送成功响应给浏览器
            res.json({ message: '数据保存成功', count: jobs.length });
        } else {
            res.status(500).json({ error: '保存失败' });
        }
    } catch (error) {
        res.status(500).json({ error: '保存数据失败' });
    }
});

// ➕ 【POST /api/jobs/add - 添加单个job】
// Express.js路由参数和数据处理的完美示例
app.post('/api/jobs/add', async (req, res) => {
    try {
        // 🔄 Express.js调用Node.js读取当前数据
        const jobs = await readJobsFile();
        // 🆔 Node.js生成唯一ID（时间戳）
        const newJob = {
            id: Date.now(),
            company: req.body.company || 'New Company',
            description: req.body.description || '',
            position: req.body.position || 'New Position', 
            status: req.body.status || 'applied',
            appliedDate: req.body.appliedDate || new Date().toISOString().split('T')[0],
            link: req.body.link || '',
            notes: req.body.notes || ''
        };
        jobs.push(newJob);
        // 🔄 Express.js调用Node.js写入更新后的数据
        const success = await writeJobsFile(jobs);
        if (success) {
            // 📤 Express.js返回新创建的job给浏览器
            res.json(newJob);
        } else {
            res.status(500).json({ error: '保存失败' });
        }
    } catch (error) {
        res.status(500).json({ error: '添加job失败' });
    }
});

// ❌ 【DELETE /api/jobs/:id - 删除指定job】
// Express.js路径参数解析：:id会自动解析到req.params.id
app.delete('/api/jobs/:id', async (req, res) => {
    try {
        // 🔄 Express.js调用Node.js读取当前数据
        const jobs = await readJobsFile();
        // 🎯 Express.js自动解析URL中的ID参数
        const jobId = parseInt(req.params.id);
        const filteredJobs = jobs.filter(job => job.id !== jobId);
        
        if (filteredJobs.length === jobs.length) {
            return res.status(404).json({ error: '未找到要删除的job' });
        }
        
        // 🔄 Express.js调用Node.js写入过滤后的数据
        const success = await writeJobsFile(filteredJobs);
        if (success) {
            // ✅ Express.js确认删除成功
            res.json({ message: '删除成功', deletedId: jobId });
        } else {
            res.status(500).json({ error: '删除失败' });
        }
    } catch (error) {
        res.status(500).json({ error: '删除job失败' });
    }
});

// 更新job
app.put('/api/jobs/:id', async (req, res) => {
    try {
        const jobs = await readJobsFile();
        const jobId = parseInt(req.params.id);
        const jobIndex = jobs.findIndex(job => job.id === jobId);
        
        if (jobIndex === -1) {
            return res.status(404).json({ error: '未找到要更新的job' });
        }
        
        // 更新job数据
        jobs[jobIndex] = { ...jobs[jobIndex], ...req.body };
        
        const success = await writeJobsFile(jobs);
        if (success) {
            res.json(jobs[jobIndex]);
        } else {
            res.status(500).json({ error: '更新失败' });
        }
    } catch (error) {
        res.status(500).json({ error: '更新job失败' });
    }
});

// 🎯 【TARGETS API端点 - 储备公司管理】
// 以下是储备投放公司的完整CRUD API接口

// 📖 【GET /api/targets - 读取所有储备公司数据】
app.get('/api/targets', async (req, res) => {
    try {
        // 🔄 Express.js调用Node.js文件系统读取储备公司数据
        const targets = await readTargetsFile();
        // 📤 Express.js自动将JavaScript对象转为JSON并发送给浏览器
        res.json(targets);
    } catch (error) {
        // ⚠️ Express.js的错误处理：返回HTTP 500状态码
        res.status(500).json({ error: '读取储备公司数据失败' });
    }
});

// 💾 【POST /api/targets - 保存所有储备公司数据】
app.post('/api/targets', async (req, res) => {
    try {
        // 📥 Express.js自动解析浏览器发送的JSON数据到req.body
        const targets = req.body;
        // 🔄 Express.js调用Node.js文件系统写入储备公司数据
        const success = await writeTargetsFile(targets);
        if (success) {
            // ✅ Express.js发送成功响应给浏览器
            res.json({ message: '储备公司数据保存成功', count: targets.length });
        } else {
            res.status(500).json({ error: '保存失败' });
        }
    } catch (error) {
        res.status(500).json({ error: '保存储备公司数据失败' });
    }
});

// ➕ 【POST /api/targets/add - 添加单个储备公司】
app.post('/api/targets/add', async (req, res) => {
    try {
        // 🔄 Express.js调用Node.js读取当前储备公司数据
        const targets = await readTargetsFile();
        // 🆔 Node.js生成唯一ID（时间戳）
        const newTarget = {
            id: Date.now(),
            companyName: req.body.companyName || 'New Target Company',
            industry: req.body.industry || 'Technology',
            location: req.body.location || 'Amsterdam, Netherlands',
            priority: req.body.priority || 'medium',
            targetPosition: req.body.targetPosition || 'Software Engineer',
            applicationTimeline: req.body.applicationTimeline || 'Q1 2025',
            researchNotes: req.body.researchNotes || '',
            contactInfo: req.body.contactInfo || '',
            websiteUrl: req.body.websiteUrl || '',
            careerPageUrl: req.body.careerPageUrl || '',
            status: req.body.status || 'researching'
        };
        targets.push(newTarget);
        // 🔄 Express.js调用Node.js写入更新后的储备公司数据
        const success = await writeTargetsFile(targets);
        if (success) {
            // 📤 Express.js返回新创建的储备公司给浏览器
            res.json(newTarget);
        } else {
            res.status(500).json({ error: '保存失败' });
        }
    } catch (error) {
        res.status(500).json({ error: '添加储备公司失败' });
    }
});

// ❌ 【DELETE /api/targets/:id - 删除指定储备公司】
app.delete('/api/targets/:id', async (req, res) => {
    try {
        // 🔄 Express.js调用Node.js读取当前储备公司数据
        const targets = await readTargetsFile();
        // 🎯 Express.js自动解析URL中的ID参数
        const targetId = parseInt(req.params.id);
        const filteredTargets = targets.filter(target => target.id !== targetId);
        
        if (filteredTargets.length === targets.length) {
            return res.status(404).json({ error: '未找到要删除的储备公司' });
        }
        
        // 🔄 Express.js调用Node.js写入过滤后的储备公司数据
        const success = await writeTargetsFile(filteredTargets);
        if (success) {
            // ✅ Express.js确认删除成功
            res.json({ message: '删除成功', deletedId: targetId });
        } else {
            res.status(500).json({ error: '删除失败' });
        }
    } catch (error) {
        res.status(500).json({ error: '删除储备公司失败' });
    }
});

// 🔄 【PUT /api/targets/:id - 更新储备公司信息】
app.put('/api/targets/:id', async (req, res) => {
    try {
        const targets = await readTargetsFile();
        const targetId = parseInt(req.params.id);
        const targetIndex = targets.findIndex(target => target.id === targetId);
        
        if (targetIndex === -1) {
            return res.status(404).json({ error: '未找到要更新的储备公司' });
        }
        
        // 更新储备公司数据
        targets[targetIndex] = { ...targets[targetIndex], ...req.body };
        
        const success = await writeTargetsFile(targets);
        if (success) {
            res.json(targets[targetIndex]);
        } else {
            res.status(500).json({ error: '更新失败' });
        }
    } catch (error) {
        res.status(500).json({ error: '更新储备公司失败' });
    }
});

// 🏠 【Express.js静态文件路由】
// 当浏览器访问根路径/时，Express.js自动返回index.html
app.get('/', (req, res) => {
    // 🔄 Express.js调用Node.js发送HTML文件给浏览器
    res.sendFile(path.join(__dirname, 'index.html'));
});

// 🚀 【Express.js服务器启动】
// 这是Express.js的最后一步：启动HTTP服务器，监听端口3000
app.listen(PORT, () => {
    console.log(`🚀 Job Tracker服务器已启动！`);
    console.log(`📋 访问地址: http://localhost:${PORT}`);
    console.log(`📁 Jobs JSON文件路径: ${JOBS_FILE}`);
    console.log(`🎯 Targets JSON文件路径: ${TARGETS_FILE}`);
    console.log(`⚡ 现在支持双Tab无感双向数据同步！`);
    console.log(`💡 Node.js = 超级浏览器，Express.js = 路由管家`);
});