# DevOps CI/CD Monitoring Dashboard

## Overview

The DevOps CI/CD Monitoring Dashboard is a web application that provides a centralized view of GitHub repository activity. Instead of navigating through multiple GitHub pages, users can monitor important repository information such as commits, pull requests, issues, and CI/CD pipeline status from a single dashboard.

The application fetches live data from GitHub using the GitHub REST API through a secure backend and displays it in an easy-to-understand interface.

---

## Features

* View recent commits of a GitHub repository
* Monitor open pull requests
* Track repository issues
* Check GitHub Actions (CI/CD pipeline) status
* Display live repository data through a simple dashboard
* Secure communication with GitHub APIs using environment variables

---

## Project Architecture

The project follows a client-server architecture consisting of two parts:

### Frontend

* Built using React
* Sends API requests to the backend
* Displays repository information in a dashboard interface

### Backend

* Built using Node.js and Express
* Acts as a secure middleware between the frontend and GitHub
* Fetches repository data using the GitHub REST API
* Returns processed data to the frontend

---

## Workflow

1. User opens the dashboard.
2. The frontend sends requests to the backend.
3. The backend authenticates using a GitHub Personal Access Token stored in environment variables.
4. The backend fetches repository information from the GitHub REST API.
5. The requested data is returned to the frontend.
6. The dashboard displays commits, pull requests, issues, and pipeline status.

---

## API Endpoints

The backend exposes the following REST endpoints:

| Endpoint    | Description                            |
| ----------- | -------------------------------------- |
| `/commits`  | Fetches recent repository commits      |
| `/pulls`    | Retrieves pull request information     |
| `/issues`   | Retrieves GitHub issues                |
| `/pipeline` | Fetches GitHub Actions workflow status |

---

## Technologies Used

### Frontend

* React
* Axios
* React Router

### Backend

* Node.js
* Express.js
* Axios
* CORS
* Dotenv

### External Services

* GitHub REST API
* GitHub Actions

### Deployment

* Frontend: Vercel
* Backend: Render

---

## Purpose

The primary objective of this project is to simplify repository monitoring by presenting key GitHub information in one place. It enables developers to quickly view project activity without switching between multiple GitHub pages.

---

## Future Enhancements

* Support multiple GitHub repositories
* Repository search functionality
* Historical analytics and charts
* Real-time auto-refresh
* User authentication
* Notification system for repository events

---

## Conclusion

The DevOps CI/CD Monitoring Dashboard demonstrates how a frontend application, backend services, and GitHub APIs can work together to provide a centralized monitoring solution. It offers an efficient way to track repository activity and CI/CD workflow status while following secure practices by keeping authentication credentials on the backend.
