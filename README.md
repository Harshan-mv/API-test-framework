📦 API Test Automation Framework — E-Commerce Platform

A complete API Testing Framework built using Node.js, SuperTest, Jest, Nock, MongoDB, and GitHub Actions CI.

This project demonstrates real-world SDET, Middleware Testing, and API Automation skills suitable for enterprise environments (IBM, Infosys, Accenture, Deloitte).

🚀 Features
🎯 API Automation

Login API tests

Product API tests

Order workflow tests (end-to-end)

Positive & negative scenarios

Token-based authenticated routes

🧪 Test Automation Framework

SuperTest for API HTTP testing

Jest for test runner + reports

Nock for mocking external APIs

DB validation using Mongoose

Configurable environments (local, test, ci)

🗄 Database Integration

Local MongoDB (for CI)

MongoDB Atlas (for production)

Order persistence verification

🔄 Continuous Integration

Fully automated tests in GitHub Actions

MongoDB running inside CI container

API server auto-boot in CI

📊 Reports

Allure reporting (optional)

Clean pass/fail summaries

🧱 Architecture
api-test-ecommerce/
  ├── backend/
  │   ├── routes/
  │   ├── models/
  │   ├── server.js
  │   └── controllers/
  ├── tests/
  │   ├── specs/
  │   ├── helpers/
  │   └── config/
  ├── .github/workflows/api-tests.yml
  ├── package.json
  ├── README.md
  └── .env

🧪 Running Tests (Local)
Start backend:
npm run start

Run tests:
npm test

🛠 Tech Stack
Layer	Tech
Language	JavaScript (Node.js)
Test Runner	Jest
API Testing	SuperTest
Mocking	Nock
Database	MongoDB + Mongoose
CI/CD	GitHub Actions
Reporting	Allure (optional)

🛡 Skills Demonstrated

API Automation

Test Strategy & Test Design

Middleware Testing

Mocking/Stubbing external APIs

CI/CD Pipeline Integration

Debugging distributed systems

NoSQL database testing

Building reusable test frameworks

👤 Author

Harshan MV
