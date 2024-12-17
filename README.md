# OdooERP UAT - Cypress Automation Testing

This repository contains **Cypress automation scripts** to perform **User Acceptance Testing (UAT)** for Odoo ERP. It is designed to test the functionality, stability, and performance of Odoo ERP customizations in a real-world UAT environment.

---

## 📋 Project Overview  

Odoo ERP is widely used for enterprise resource planning. This project automates UAT for the customized Odoo ERP platform to ensure business-critical processes are validated efficiently.

The automation scripts have been developed using the **Cypress** testing framework for seamless end-to-end browser testing.

---

## 🚀 Key Features  
- **End-to-End Testing**: Automates the main functionalities of Odoo ERP workflows.  
- **Reusable Components**: Structured and reusable Cypress functions for quick test scaling.  
- **Customizable Configurations**: Easily configure test environments and parameters.  
- **CI/CD Ready**: Designed for integration into CI/CD pipelines.  
- **Detailed Reporting**: Generate test execution reports.

---

## 🛠️ Tools & Technologies Used  
- **Cypress**: JavaScript-based end-to-end testing framework.  
- **Node.js**: JavaScript runtime for managing dependencies.  
- **GitHub**: Version control system for collaboration.  

---

## 📁 Project Structure  
```plaintext
OdooERP_UAT/
│
├── cypress/                    # Cypress configuration and tests
│   ├── fixtures/               # Static data for test cases
│   ├── integration/            # Test cases written in Cypress
│   ├── plugins/                # Custom Cypress plugins
│   ├── screenshots/            # Screenshots on test failures (auto-generated)
│   ├── support/                # Reusable Cypress commands
│   └── videos/                 # Video recording of test execution (auto-generated)
│
├── node_modules/               # Project dependencies (auto-generated)
├── package.json                # Project dependencies and scripts
├── cypress.json                # Cypress project configuration file
└── README.md                   # Project documentation
