const colleges = require('./colleges.json');

function getAllColleges() {
    return colleges;
}

function getCollegesByState(state) {
    return colleges.filter(college => college.state === state);
}

function getCollegesByDistrict(district) {
    return colleges.filter(college => college.district === district);
}

function getCollegesByStateAndDistrict(state, district) {
    return colleges.filter(
        college => college.state === state && college.district === district
    );
}

module.exports = {
    getAllColleges,
    getCollegesByState,
    getCollegesByDistrict,
    getCollegesByStateAndDistrict
};
