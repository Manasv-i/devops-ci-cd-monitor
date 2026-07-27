# 📊 DevOps Monitoring Dashboard

## Overview

The DevOps Monitoring Dashboard is a backend application built using **FastAPI** that provides real-time system monitoring through REST APIs. It collects key system metrics such as CPU usage, memory utilization, and disk usage, making it easier to monitor the health of a machine or server.

The project demonstrates core DevOps concepts including monitoring, containerization, API development, and CI/CD automation.

---

## Problem Statement

Modern applications require continuous monitoring to ensure they are running efficiently. Manually checking system resources is time-consuming and impractical, especially when applications are deployed on multiple servers.

This project provides a simple monitoring service that exposes system metrics through REST APIs, allowing them to be consumed by dashboards or other monitoring tools.

---

## How It Works

1. The FastAPI server starts and exposes monitoring endpoints.
2. The application collects real-time system information using Python.
3. When a client sends an API request, the latest system metrics are fetched.
4. The server returns the information as a JSON response.
5. These APIs can be integrated with monitoring dashboards or automation tools.

---

## Features

- Real-time CPU monitoring
- Memory usage monitoring
- Disk usage monitoring
- Health check endpoint
- RESTful APIs
- Interactive Swagger documentation
- Docker support for containerized deployment
- GitHub Actions workflow for automated CI

---

## System Architecture

```
System Resources
       │
       ▼
Metric Collection (Python)
       │
       ▼
FastAPI Backend
       │
       ▼
REST API Endpoints
       │
       ▼
Client / Dashboard
```

---

## Technologies Used

### Backend
- FastAPI
- Python

### Monitoring
- psutil

### DevOps
- Docker
- GitHub Actions

### API Documentation
- Swagger UI (FastAPI)

---

## API Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/health` | GET | Checks whether the application is running |
| `/cpu` | GET | Returns current CPU usage |
| `/memory` | GET | Returns current memory usage |
| `/disk` | GET | Returns current disk usage |

---

## Example Response

```json
{
    "cpu": 14.8,
    "memory": 57.3,
    "disk": 42.1
}
```

---

## DevOps Concepts Demonstrated

This project showcases several fundamental DevOps practices:

- API-based monitoring
- Containerization using Docker
- Continuous Integration with GitHub Actions
- Version control using Git
- Backend service deployment readiness
- Infrastructure health monitoring

---

## Future Enhancements

- Prometheus integration
- Grafana dashboards
- Alert notifications
- Historical metrics storage
- Kubernetes deployment
- Cloud deployment on AWS

---

## Learning Outcomes

Through this project, I gained hands-on experience with:

- Building REST APIs using FastAPI
- Monitoring system resources in Python
- Containerizing applications with Docker
- Automating workflows using GitHub Actions
- Applying DevOps principles in a real-world backend project
