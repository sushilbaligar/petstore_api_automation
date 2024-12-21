Pet Store API Automation
Project Name: Pet Store API Automation
Repository: petstore_api_automation

📝 Description
This project automates the testing of the Pet Store API, ensuring the functionality and integrity of various endpoints, such as creating, updating, retrieving, and deleting pet records. The tests are written in Behavior Driven Development (BDD) style using Cucumber with Chai for assertions and Axios for HTTP requests. It provides automated coverage for key API actions, including handling invalid data and error responses.

🔧 Tools & Technologies Used
Cucumber: BDD framework for writing clear and readable test scenarios.
Chai: Assertion library for verifying test results.
Axios: HTTP client for making requests to the Pet Store API.
TypeScript: A statically typed superset of JavaScript, for writing clean and maintainable code.
Node.js: JavaScript runtime for executing server-side code.
Git: Version control to manage code changes.
WebStorm/VSCode: Code editors for development.
Prettier: Code formatting tool to ensure consistent code style.
Jest (optional): Test runner (if integrated for running tests in parallel).
🚀 Features
Add, Update, Retrieve, and Delete Pet Details: Full CRUD operations to ensure the pet data is handled correctly.
Error Handling: Verifies the API responds correctly to invalid data and request errors.
Automated Tests: Full BDD-style tests using Gherkin syntax.
🔨 Prerequisites
Before running this project, make sure you have the following installed:

Node.js (v14 or later)
npm (or yarn)
⚙️ Installation
Clone the repository:

bash
Copy code
git clone https://github.com/sushilbaligar/petstore_api_automation.git
Navigate to the project directory:

bash
Copy code
cd petstore_api_automation
Install the dependencies:

bash
Copy code
npm install
🧪 Running the Tests
To execute the tests, run the following command:

bash
Copy code
npm test
This will run the entire test suite and show the results in the terminal.

📂 Project Structure
src/: Contains all the implementation files for tests, utilities, and data.
features/: Contains the Cucumber feature files with BDD scenarios.
step_definitions/: Contains the step definitions to match Cucumber feature steps.
data/: Contains test data for pet details used across different tests.
utils/: Contains helper functions for interacting with the API.
🤝 Contributing
Feel free to fork this repository, create a feature branch, and submit a pull request. Please make sure to add tests for any new functionality you introduce.
