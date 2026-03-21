const { spawn } = require('child_process');
const path = require('path');
const fs = require('fs');

const services = [
  {
    name: 'Landing Page (5000)',
    cwd: path.join(__dirname, 'HomePage', 'backend'),
    command: 'node',
    args: ['server.js']
  },
  {
    name: 'Resume Analyzer (5001)',
    cwd: path.join(__dirname, 'RoleNavigator-Analyser'),
    command: 'npm',
    args: ['run', 'dev']
  },
  {
    name: 'Interview Frontend (5002)',
    cwd: path.join(__dirname, 'InterviewQuestionGenerator', 'Interview-question-new', 'frontend'),
    command: 'npm',
    args: ['run', 'dev']
  },
  {
    name: 'Interview Backend (5003)',
    cwd: path.join(__dirname, 'InterviewQuestionGenerator', 'Interview-question-new', 'backend'),
    command: 'python',
    args: ['app.py'],
    getCommand: (cwd) => {
      const winPath = path.join(cwd, 'venv', 'Scripts', 'python.exe');
      const unixPath = path.join(cwd, 'venv', 'bin', 'python');
      if (fs.existsSync(winPath)) return winPath;
      if (fs.existsSync(unixPath)) return unixPath;
      return 'python';
    }
  },
  {
    name: 'Resume Builder Frontend (5004)',
    cwd: path.join(__dirname, 'resume-builder', 'frontend'),
    command: 'npm',
    args: ['run', 'dev']
  },
  {
    name: 'Resume Builder Backend (5005)',
    cwd: path.join(__dirname, 'resume-builder', 'backend'),
    command: 'python',
    args: ['app.py'],
    getCommand: (cwd) => {
      const winPath = path.join(cwd, 'venv', 'Scripts', 'python.exe');
      const unixPath = path.join(cwd, 'venv', 'bin', 'python');
      if (fs.existsSync(winPath)) return winPath;
      if (fs.existsSync(unixPath)) return unixPath;
      return 'python';
    }
  }
];

console.log('🚀 Starting RoleNavigator Ecosystem...\n');

services.forEach(service => {
  const cmd = service.getCommand ? service.getCommand(service.cwd) : service.command;
  const proc = spawn(cmd, service.args, {
    cwd: service.cwd,
    shell: true,
    stdio: 'inherit'
  });

  proc.on('error', (err) => {
    console.error(`[${service.name}] Error:`, err.message);
  });

  console.log(`✅ ${service.name} started.`);
});

console.log('\n💡 All services are launching. You can now use the app at http://localhost:5000');
