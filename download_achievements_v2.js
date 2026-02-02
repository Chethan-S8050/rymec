
const depts = [
    { name: 'civil-engineering', slug: 'civil-engineering' },
    { name: 'mechanical-engineering', slug: 'mechanical-engineering' },
    { name: 'electrical-electronics-engineering', slug: 'electrical-electronics-engineering' },
    { name: 'electronics-communication-engineering', slug: 'electronics-communication-engineering' },
    { name: 'computer-science-engineering', slug: 'computer-science-engineering' },
    { name: 'information-science-engineering', slug: 'information-science-engineering' },
    { name: 'cse-artificial-intelligence-and-machine-learning', slug: 'cse-artificial-intelligence-and-machine-learning' },
    { name: 'computer-science-engineering-cyber-security', slug: 'computer-science-engineering-cyber-security' },
    { name: 'cse-data-science', slug: 'cse-data-science' }
];

const fs = require('fs');
const { execSync } = require('child_process');

if (!fs.existsSync('temp_achievements')) {
    fs.mkdirSync('temp_achievements');
}

depts.forEach(dept => {
    console.log(`Processing ${dept.name}...`);
    const mainUrl = `https://rymec.edu.in/department/${dept.slug}/`;
    const mainFile = `temp_achievements/${dept.slug}_main.html`;

    try {
        execSync(`powershell -Command "Invoke-WebRequest -Uri ${mainUrl} -OutFile ${mainFile}"`);
        const content = fs.readFileSync(mainFile, 'utf8');
        // Look for links that contain 'achievements-awards' or 'achievements'
        const match = content.match(/href="([^"]*achievements[^"]*)"/i);
        if (match) {
            const achUrl = match[1];
            console.log(`Found achievement URL for ${dept.name}: ${achUrl}`);
            const achFile = `temp_achievements/${dept.slug}.html`;
            execSync(`powershell -Command "Invoke-WebRequest -Uri ${achUrl} -OutFile ${achFile}"`);
            console.log(`Success: ${dept.name}`);
        } else {
            console.log(`No achievement link found for ${dept.name}`);
        }
    } catch (e) {
        console.log(`Failed ${dept.name}: ${e.message}`);
    }
});
