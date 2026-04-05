# Fullstack CI/CD Demo Project

## 📌 Overview
This repository demonstrates a complete DevOps workflow for a fullstack application. It integrates a **React frontend** and a **Node.js/Express backend**, both containerized with Docker, and orchestrated through a **Jenkins CI/CD pipeline** triggered by **GitHub webhooks** via **ngrok**.

---

## 🛠 Tech Stack
- **Frontend:** React  
- **Backend:** Node.js, Express  
- **CI/CD:** Jenkins  
- **Containerization:** Docker  
- **Integration:** GitHub + ngrok  

---

## 📂 Project Structure

- `fullstack-demo/`
  - `backend/` — Node.js + Express backend
    - `Dockerfile` — Docker configuration for backend
    - `package.json` — Backend dependencies
    - `index.js` — Express server entry point
  - `frontend/` — React frontend application
    - `Dockerfile` — Docker configuration for frontend
    - `package.json` — Frontend dependencies
    - `src/`
      - `components/` — Reusable UI components
      - `pages/` — Page-level components
      - `App.js` — Main React entry point
  - `Jenkinsfile` — CI/CD pipeline definition
  - `README.md` — Project documentation
  - `.gitignore` — Ignored files (node_modules, logs, etc.)




---

## 🚀 Features
- Automated builds for both frontend and backend using Jenkins.  
- Dockerized services running locally on separate ports.  
- GitHub webhook integration via ngrok for real-time CI/CD triggers.  
- Clean `.gitignore` setup to exclude `node_modules` and unnecessary files.  

---

## 🔄 Jenkins Pipeline
The Jenkinsfile defines the following stages:
1. **Backend Build** – Builds Docker image for backend.  
2. **Frontend Build** – Builds Docker image for frontend.  
3. **Deploy Backend** – Runs backend container on port 5000.  
4. **Deploy Frontend** – Runs frontend container on port 3000.  

---

## ⚙️ Setup Instructions
1. Clone the repository:
   ```bash
   git clone https://github.com/<your-username>/fullstack-demo.git
   cd fullstack-demo

##  Install Dependencies
cd frontend && npm install
cd ../backend && npm install

##  Run Jenkins locally (Docker recommended).

## 🌐 ngrok Setup

### 🔎 What is ngrok?
[ngrok](https://ngrok.com) is a tunneling tool that exposes your **local server** (e.g., Jenkins running on `http://localhost:8080`) to the internet.  
It generates a secure public URL (like `https://abcd-1234.ngrok-free.app`) that forwards traffic to your local machine.  
This is essential because GitHub webhooks require a publicly accessible endpoint to send events to Jenkins.

---

### ⚙️ Installation
1. **Download ngrok**  
   - Visit [ngrok.com/download](https://ngrok.com/download) and download the binary for your operating system.  
   - Extract it and move it to a directory in your PATH (e.g., `/usr/local/bin` on macOS/Linux).

2. **Verify installation**  
   ```bash
   ngrok version
   -- You should see the installed version.

## 🔐 Authentication
Sign up for a free account at ngrok dashboard.

Copy your authtoken from the dashboard.

Run the command to add your token:

**ngrok config add-authtoken <your-authtoken>**

-- This links ngrok on your machine to your account.


##  🚀 Start a Ngrok Tunnel:

To expose Jenkins (running locally on port 8080):

ngrok http 8080

You’ll see output like:

Forwarding  https://abcd-1234.ngrok-free.app -> http://localhost:8080



##  🔄 Configure GitHub webhook:

1.Go to your GitHub repository → Settings → Webhooks → Add webhook.
2. Set Payload URL to:
- Payload URL: https://<ngrok-id>.ngrok.io/github-webhook/
- Content type: application/json
3. Trigger: Push events
4. Push code changes to GitHub → Jenkins pipeline runs automatically.
   Now, whenever you push code, GitHub will send the event to Jenkins through ngrok, and your pipeline will run automatically.

## ✅ Ngrok Summary
ngrok bridges your local Jenkins with GitHub.

Steps: Install → Authenticate → Run tunnel → Copy public URL → Paste into GitHub webhook.   

## 🌐 Ports
- Frontend: http://localhost:3000
- Backend: http://localhost:5000
- Jenkins: http://localhost:8080

## ✅ Best Practices
- Keep secrets out of the repository (no API keys or credentials).
- Use .gitignore to exclude node_modules and logs.
- Document pipeline steps clearly in Jenkinsfile.

 📊 CI/CD Flow Diagram

```mermaid
flowchart LR
    A[Developer Push Code] --> B[GitHub Repository]
    B --> C[Webhook Trigger via ngrok]
    C --> D[Jenkins Pipeline]
    D --> E[Backend Docker Build]
    D --> F[Frontend Docker Build]
    E --> G[Backend Container]
    F --> H[Frontend Container]
 ```   

## 🎯 Showcase
This project highlights:
- End-to-end CI/CD automation.
- Dockerized fullstack deployment.
- GitHub + ngrok integration for webhook triggers.
- Practical DevOps skills with Jenkins pipelines.

Author: Tanmay

Location: Pune, Maharashtra

Focus: Software Development, DevOps, CI/CD Automation


