
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
    const mainFile = `temp_achievements/${dept.slug}_main.html`;

    // If we don't have the main file yet, we should have downloaded it in the previous run (unless it was interrupted)
    // But let's just use the one we have or download it again to be safe.
    try {
        if (!fs.existsSync(mainFile)) {
            const mainUrl = `https://rymec.edu.in/department/${dept.slug}/`;
            execSync(`powershell -Command "Invoke-WebRequest -Uri ${mainUrl} -OutFile ${mainFile}"`);
        }

        const content = fs.readFileSync(mainFile, 'utf8');
        // Look for links that start with the department slug and contain 'achievements'
        // Using a more specific regex to avoid global links
        const regex = new RegExp(`href="([^"]*${dept.slug}[^"]*achievements[^"]*)"`, 'i');
        let match = content.match(regex);

        // If not found, try a broader search but exclude common global links
        if (!match) {
            const allMatches = content.matchAll(/href="([^"]*achievements[^"]*)"/gi);
            for (const m of allMatches) {
                if (!m[1].includes('placement-achievements') && m[1].includes(dept.slug)) {
                    match = m;
                    break;
                }
            }
        }

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
