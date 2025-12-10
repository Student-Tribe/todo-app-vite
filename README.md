<div align="center">

# **TODO-APP-VITE**

Transform Tasks into Triumphs with Seamless Efficiency ✨

![Last Commit](https://img.shields.io/github/last-commit/Student-Tribe/todo-app-vite?style=flat-square)
![Repo Size](https://img.shields.io/github/repo-size/Student-Tribe/todo-app-vite?style=flat-square)
![JavaScript](https://img.shields.io/badge/javascript-45.1%25-yellow?style=flat-square)
![Languages](https://img.shields.io/github/languages/count/Student-Tribe/todo-app-vite?style=flat-square)

---

### **Built with the tools and technologies**

<img src="https://img.shields.io/badge/JSON-black?style=for-the-badge&logo=json&logoColor=white"/>  
<img src="https://img.shields.io/badge/npm-red?style=for-the-badge&logo=npm&logoColor=white"/>  
<img src="https://img.shields.io/badge/JavaScript-yellow?style=for-the-badge&logo=javascript&logoColor=black"/>  
<img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white"/>  
<img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"/>  
<img src="https://img.shields.io/badge/TailwindCSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white"/>  
<img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white"/>  

</div>

---

# **Table of Contents**
- [Overview](#overview)
- [Why todo-app-vite](#why-todo-app-vite)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Docker Setup](#docker-setup)
  - [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)

---

# **Overview**

**todo-app-vite** is a fast and modern task management application built with  
**Vite**, **React**, **TailwindCSS**, and **JavaScript**, now fully containerized using **Docker**.

With clean UI, efficient components, and ultra-fast performance, this project is designed for both beginners and professionals.

---

# **Why todo-app-vite?**

This project focuses on performance, simplicity, and scalability:

- ⚡ **Super-fast Dev Server (Vite)**
- 🗂️ **CRUD Functionality for Task Management**
- 📱 **Responsive UI with TailwindCSS**
- 🧩 **Reusable React Components**
- 🐳 **Docker Support** — Run anywhere without setup!
- 🎯 **Beginner-Friendly + Production Ready**

---

# **Getting Started**

## **Prerequisites**

Ensure you have:

- **Node.js** (LTS Recommended)  
- **npm**  
- **Docker** (if you want to run using containers)

---

# **Installation**

### **1. Clone the repository**
git clone https://github.com/Student-Tribe/todo-app-vite

### **2. Navigate to the project directory**
cd todo-app-vite

### **3. Install dependencies**
npm install

### **Usage**
Start the development server:
npm run dev
Open the URL shown in your terminal (usually http://localhost:5173).

### **Docker Setup**
Run the project in Docker with zero local dependencies.

### *1. Build Docker Image*
docker build -t todo-app-vite .

### *2. Run Docker Container*
docker run -d -p 5173:5173 todo-app-vite

### *3. Access the App*
Go to:
http://localhost:5173
Stopping the Container
docker ps
docker stop <container-id>

### **Testing**
If test scripts are added later:
npm test

### **Contributing**
Contributions are always welcome!
You can open issues, request features, or create pull requests to improve the project.
