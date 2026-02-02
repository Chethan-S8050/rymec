
const depts = [
    'civil-engineering',
    'mechanical-engineering',
    'electrical-electronics-engineering',
    'electronics-communication-engineering',
    'computer-science-engineering',
    'information-science-engineering',
    'cse-artificial-intelligence-and-machine-learning',
    'computer-science-engineering-cyber-security',
    'cse-data-science'
];

const fs = require('fs');
const { execSync } = require('child_process');

if (!fs.existsSync('temp_achievements')) {
    fs.mkdirSync('temp_achievements');
}

depts.forEach(dept => {
    const url = `https://rymec.edu.in/${dept}/achievements-awards/`;
    const out = `temp_achievements/${dept}.html`;
    console.log(`Downloading ${dept}...`);
    try {
        execSync(`powershell -Command "Invoke-WebRequest -Uri ${url} -OutFile ${out}"`);
        console.log(`Success: ${dept}`);
    } catch (e) {
        // Try alternate URL pattern
        const altUrl = `https://rymec.edu.in/department/${dept}/achievements-awards/`;
        console.log(`Failed first attempt, trying alt URL: ${altUrl}`);
        try {
            execSync(`powershell -Command "Invoke-WebRequest -Uri ${altUrl} -OutFile ${out}"`);
            console.log(`Success (alt): ${dept}`);
        } catch (e2) {
            // Try another common pattern
            const altUrl2 = `https://rymec.edu.in/${dept}/#achievements`;
            console.log(`Failed second attempt, downloading main page for parsing: ${dept}`);
            const mainUrl = `https://rymec.edu.in/department/${dept}/`;
            try {
                execSync(`powershell -Command "Invoke-WebRequest -Uri ${mainUrl} -OutFile ${out}"`);
                console.log(`Success (main page): ${dept}`);
            } catch (e3) {
                console.log(`Failed all attempts for ${dept}`);
            }
        }
    }
});
