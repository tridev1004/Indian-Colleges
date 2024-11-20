// Import JSON dynamically
let colleges;

async function loadColleges() {
    if (!colleges) {
        colleges = await import('./data/colleges.json').then(module => module.default);
    }
    return colleges;
}

export async function getAllColleges() {
    const colleges = await loadColleges();
    return colleges;
}

export async function getCollegesByState(state) {
    const colleges = await loadColleges();
    return colleges.filter(college => college.state === state);
}

export async function getCollegesByDistrict(district) {
    const colleges = await loadColleges();
    return colleges.filter(college => college.district === district);
}

export async function getCollegesByStateAndDistrict(state, district) {
    const colleges = await loadColleges();
    return colleges.filter(
        college => college.state === state && college.district === district
    );
}
