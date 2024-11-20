Indian-Colleges
Indian-Colleges is an NPM package that provides a structured dataset of colleges in India, along with utility functions to filter colleges by state, district, or both. It works seamlessly in both backend (Node.js) and frontend (React or other frameworks) environments.

Features
Get the entire list of colleges in India.
Filter colleges by:
State
District
State and District
Lightweight and easy to integrate into both backend and frontend projects.
Fully compatible with CommonJS and ES Modules.
Installation
Install the package using npm:

bash
Copy code
npm install indian-colleges
Or add it to your package.json dependencies manually.

Usage
Backend (Node.js)
For CommonJS environments (default in Node.js):

javascript
Copy code
const {
    getAllColleges,
    getCollegesByState,
    getCollegesByDistrict,
    getCollegesByStateAndDistrict
} = require('indian-colleges');

// Example Usage
console.log("All Colleges:", getAllColleges());
console.log("Colleges in Andhra Pradesh:", getCollegesByState('Andhra Pradesh'));
console.log("Colleges in Prakasam District:", getCollegesByDistrict('Prakasam'));
console.log(
    "Colleges in Andhra Pradesh, Prakasam District:",
    getCollegesByStateAndDistrict('Andhra Pradesh', 'Prakasam')
);
Frontend (React)
For ES Modules (default in modern front-end environments like React):

javascript
Copy code
import {
    getAllColleges,
    getCollegesByState,
    getCollegesByDistrict,
    getCollegesByStateAndDistrict
} from 'indian-colleges';

// Example Usage
const App = () => {
    useEffect(() => {
        console.log("All Colleges:", getAllColleges());
        console.log("Colleges in Andhra Pradesh:", getCollegesByState('Andhra Pradesh'));
        console.log("Colleges in Prakasam District:", getCollegesByDistrict('Prakasam'));
        console.log(
            "Colleges in Andhra Pradesh, Prakasam District:",
            getCollegesByStateAndDistrict('Andhra Pradesh', 'Prakasam')
        );
    }, []);

    return <div>Check console for results</div>;
};

export default App;
API Reference
getAllColleges()
Returns an array of all colleges.

Returns: Array - List of all colleges.
getCollegesByState(state)
Filters colleges by a specific state.

Parameters:
state (String) - The name of the state.
Returns: Array - List of colleges in the specified state.
getCollegesByDistrict(district)
Filters colleges by a specific district.

Parameters:
district (String) - The name of the district.
Returns: Array - List of colleges in the specified district.
getCollegesByStateAndDistrict(state, district)
Filters colleges by both state and district.

Parameters:
state (String) - The name of the state.
district (String) - The name of the district.
Returns: Array - List of colleges in the specified state and district.
File Structure
bash
Copy code
indian-colleges/
├── data/
│   └── colleges.json         # Contains the dataset of colleges
├── index.cjs                 # Entry point for CommonJS environments
├── index.mjs                 # Entry point for ES Module environments
├── package.json              # Package configuration
└── README.md                 # Documentation
Development
To test or modify the library:



bash
Copy code
npm install
Link the package locally:

bash
Copy code
npm link
Test in a project:

bash
Copy code
npm link indian-colleges
Run the library:

bash
Copy code
node index.js
Contributing
Contributions are welcome! To contribute:


Acknowledgments
Inspired by the need for a structured and easy-to-use dataset of Indian colleges.
Maintained by the open-source community.
Feel free to use and adapt this README file for your library!