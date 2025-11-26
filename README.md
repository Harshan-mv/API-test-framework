# 🚀 API Test Automation Framework for E-Commerce Platform  
A Production-Grade Test Automation Project (Node.js + Jest + SuperTest + MongoDB + Nock + Allure + GitHub Actions)

## 📌 Overview  
This project is a **complete API Automation Framework** built for testing a mock **E-Commerce backend** (Auth, Products, Orders, Payment).  

It is designed to simulate **real-world SDET/Middleware Testing workflows**, including:  
- API automation  
- Mocking external services  
- DB verification  
- CI execution  
- Test reporting  
- Environment switching  
- Negative test coverage  

This is a full end-to-end test solution that works both **locally** and in **GitHub Actions CI**.

---

# 🎯 Why I Built This  
I built this project to strengthen my real-world experience in:

- API Test Automation  
- Middleware Testing  
- Mocking/Simulating external microservices  
- CI/CD-driven automated testing  
- Allure reporting  
- MongoDB-based backend validation  
- Test design, negative flows, end-to-end validation  

This framework lets me demonstrate the level of automation, debugging, design, and CI/CD skills expected from an **SDET / Middleware Test Engineer** at companies like **IBM, Cognizant, Accenture, TCS, Infosys, etc.**

---

# 🧩 Problem This Solves  
Real testing projects require:

### ❌ The problem:
Most beginners’ API tests only check:
- simple responses  
- no DB validation  
- no mocking  
- no CI integration  
- no reporting  
- no separate environments  

They fail in real-world scenarios.

### ✅ The solution (this project):
This project simulates actual enterprise middleware testing by providing:

✔ End-to-end testing of Auth, Products, and Orders  
✔ DB checks verifying persistence  
✔ Fully mocked Payment Gateway (success + failure) using Nock  
✔ Negative test flows (400, 401, invalid data)  
✔ GitHub Actions pipeline with MongoDB service  
✔ Allure HTML reporting for real dashboards  
✔ Consistent environment switching (local/test/CI)  
✔ Clean architecture & maintainable test structure  

This is how **enterprise test frameworks** are built.

---

# 🏗️ Architecture

api-test-ecommerce/
│
├── backend/ # Express-based mock ecommerce API
│ ├── routes/ # Auth, Products, Orders routes
│ ├── models/ # Mongoose schemas
│ ├── services/
│ │ └── paymentService.js# Nock-based mock payment gateway
│ └── server.js # Main Express app
│
├── tests/
│ └── specs/ # Jest test suites
│ ├── auth.test.js
│ ├── products.test.js
│ └── orders.test.js
│
├── src/config/
│ ├── db.js # DB connection helpers for Jest
│
├── allure-results/ # Raw results for Allure
├── allure-report/ # Final HTML report (after generation)
│
├── jest.config.cjs # Configured Allure reporter + Jest setup
├── package.json
└── .github/workflows/
└── api-tests.yml # Full CI/CD with Allure deployment

✔ GitHub Actions CI/CD

CI pipeline supports:

MongoDB service container

Starting Express API

Running Jest tests

Generating Allure reports

Publishing reports to GitHub Pages

Uploading HTML reports as artifacts

✔ Allure HTML Reporting

Generates rich dashboards:

Steps

Attachments

API responses

DB state

Timeline

Suite statistics

Failure categorization

Run locally:

npm run test:report
npm run report:open

⚙️ How to Run Locally
1. Install dependencies
npm install

2. Start backend API
npm run start

3. Run tests
npm test

4. Generate Allure report
npm run test:report
npm run report:open

🚦 How GitHub Actions Works
On every push:

GitHub spins up:

Ubuntu Runner

MongoDB container

Starts Express backend:

npm run start:test &


Runs Jest API tests

Generates Allure report

Uploads report as downloadable artifact

Deploys Allure HTML to GitHub Pages:

https://harshan-mv.github.io/API-test-framework/

🧠 Skills Demonstrated (For Recruiters)

API Test Automation

Middleware Testing

Mocking External Services (Nock)

Distributed System Debugging

Node.js + Express REST API

Jest testing framework

SuperTest for HTTP requests

MongoDB + Mongoose

CI/CD pipelines (GitHub Actions)

Allure reporting

Error handling & negative test strategy

Environment + secrets management

DB cleanup & data-driven testing

📈 Future Enhancements

Load testing with k6

Contract testing with Pact

Adding performance metrics to Allure

Multi-environment deployment

JWT rotation testing

Role-based permissions testing

🤝 Contributing

Feel free to fork, raise issues, or suggest improvements.

Developer 
 HARSHAN MV