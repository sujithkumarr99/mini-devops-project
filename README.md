# 🚀 Mini DevOps Project: CI/CD, Containerization & Monitoring

## 📌 Project Overview

This project demonstrates a complete DevOps workflow by integrating application development, containerization, CI/CD automation, and monitoring into a single deployment pipeline.

The application is built using Node.js, containerized with Docker, orchestrated using Docker Compose, automated through Jenkins CI/CD pipelines, and monitored using Prometheus.

The project showcases real-world DevOps practices including Continuous Integration, Continuous Deployment, Infrastructure Automation, Container Management, and Monitoring.

---

## 🎯 Project Goals

- Automate software delivery using Jenkins
- Containerize applications using Docker
- Manage multi-container environments with Docker Compose
- Implement Continuous Integration and Continuous Deployment (CI/CD)
- Monitor application health and performance using Prometheus
- Demonstrate modern DevOps workflows

---

## 🏗️ Architecture

```text
Developer
    │
    ▼
 GitHub Repository
    │
    ▼
 Jenkins Pipeline
    │
 ┌──┴────────────┐
 │ Build & Test │
 └──┬────────────┘
    ▼
 Docker Image
    │
    ▼
 Docker Compose
    │
 ┌──┴─────────┐
 │ Node App   │
 │ Prometheus │
 └──┬─────────┘
    ▼
 Monitoring Dashboard
