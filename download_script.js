const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

const imageUrls = [
    "https://edublink.html.devsblink.com/assets/images/about/shape-13.png",
    "https://edublink.html.devsblink.com/assets/images/counterup/shape-02.png",
    "https://edublink.html.devsblink.com/assets/images/others/dark-map-2-shape-3.png",
    "https://edublink.html.devsblink.com/assets/images/others/map-shape-3.png",
    "https://rymec.edu.in/wp-content/plugins/kento-splash-screen/css/cross-icons.png",
    "https://rymec.edu.in/wp-content/themes/ryse/assets/images/NBA-Banner.jpg",
    "https://rymec.edu.in/wp-content/themes/ryse/assets/images/about/shape-07.png",
    "https://rymec.edu.in/wp-content/themes/ryse/assets/images/about/shape-13.png",
    "https://rymec.edu.in/wp-content/themes/ryse/assets/images/about/shape-21.png",
    "https://rymec.edu.in/wp-content/themes/ryse/assets/images/about/shape-25.png",
    "https://rymec.edu.in/wp-content/themes/ryse/assets/images/about/shape-39.png",
    "https://rymec.edu.in/wp-content/themes/ryse/assets/images/bg/BG-3.png",
    "https://rymec.edu.in/wp-content/themes/ryse/assets/images/bg/cta-bg-imgae-07.png",
    "https://rymec.edu.in/wp-content/themes/ryse/assets/images/cta/shape-04.png",
    "https://rymec.edu.in/wp-content/themes/ryse/assets/images/cta/shape-06.png",
    "https://rymec.edu.in/wp-content/themes/ryse/assets/images/cta/shape-12.png",
    "https://rymec.edu.in/wp-content/themes/ryse/assets/images/logos.gif",
    "https://rymec.edu.in/wp-content/themes/ryse/assets/images/others/3-Home-1.png",
    "https://rymec.edu.in/wp-content/themes/ryse/assets/images/others/dark-map-shape-3.png",
    "https://rymec.edu.in/wp-content/themes/ryse/assets/images/others/map-shape-3.png",
    "https://rymec.edu.in/wp-content/themes/ryse/assets/images/rao-bahadur.png",
    "https://rymec.edu.in/wp-content/themes/ryse/assets/images/vvs-logo.jpg",
    "https://rymec.edu.in/wp-content/uploads/2023/02/CSE-min-370x250.jpg",
    "https://rymec.edu.in/wp-content/uploads/2023/02/ECE-min-370x250.jpg",
    "https://rymec.edu.in/wp-content/uploads/2023/02/EEE-DEPT-HOME-PAGE-370x250.jpg",
    "https://rymec.edu.in/wp-content/uploads/2023/02/ISE-min-370x250.jpg",
    "https://rymec.edu.in/wp-content/uploads/2023/02/MECH-min-370x250.jpg",
    "https://rymec.edu.in/wp-content/uploads/2023/02/WhatsApp-Image-2023-06-20-at-12.39.15-370x250.jpeg",
    "https://rymec.edu.in/wp-content/uploads/2023/03/CIVIL-min-370x250.jpg",
    "https://rymec.edu.in/wp-content/uploads/2023/03/baim1.png",
    "https://rymec.edu.in/wp-content/uploads/2023/03/baim2.png",
    "https://rymec.edu.in/wp-content/uploads/2023/03/baim4.png",
    "https://rymec.edu.in/wp-content/uploads/2023/03/baim5.png",
    "https://rymec.edu.in/wp-content/uploads/2023/03/banim3.png",
    "https://rymec.edu.in/wp-content/uploads/2023/03/im1.png",
    "https://rymec.edu.in/wp-content/uploads/2023/03/im2.png",
    "https://rymec.edu.in/wp-content/uploads/2023/03/im4.png",
    "https://rymec.edu.in/wp-content/uploads/2023/03/im5.png",
    "https://rymec.edu.in/wp-content/uploads/2023/06/img2.png",
    "https://rymec.edu.in/wp-content/uploads/2023/06/img3.png",
    "https://rymec.edu.in/wp-content/uploads/2023/07/NAAC-A-Logo.jpg",
    "https://rymec.edu.in/wp-content/uploads/2023/07/rybim.png",
    "https://rymec.edu.in/wp-content/uploads/2024/06/IMG_20250503_124252-408x276.jpg",
    "https://rymec.edu.in/wp-content/uploads/2024/06/rim1.png",
    "https://rymec.edu.in/wp-content/uploads/2024/06/rim2.png",
    "https://rymec.edu.in/wp-content/uploads/2024/06/rim3.png",
    "https://rymec.edu.in/wp-content/uploads/2024/06/rymec-image.jpeg.jpg",
    "https://rymec.edu.in/wp-content/uploads/2024/07/slider-img-1.jpg",
    "https://rymec.edu.in/wp-content/uploads/2024/07/slider-img-2.jpg",
    "https://rymec.edu.in/wp-content/uploads/2024/07/slider-img-3.jpg",
    "https://rymec.edu.in/wp-content/uploads/2024/07/slider-img-4.jpg",
    "https://rymec.edu.in/wp-content/uploads/2025/11/R-logo.jpg",
    "https://rymec.edu.in/wp-content/uploads/2025/11/image1.jpg"
];

const targetDir = '/home/chethan7386/RYMEC/client/src/assets/rymec';

if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
}

function downloadImage(url, dest) {
    return new Promise((resolve, reject) => {
        const file = fs.createWriteStream(dest);
        const protocol = url.startsWith('https') ? https : http;

        protocol.get(url, function (response) {
            if (response.statusCode !== 200) {
                reject(`Failed to get '${url}' (${response.statusCode})`);
                return;
            }
            response.pipe(file);
            file.on('finish', () => {
                file.close(() => resolve(dest));
            });
        }).on('error', (err) => {
            fs.unlink(dest, () => reject(err.message));
        });
    });
}

async function downloadAll() {
    console.log(`Starting download of ${imageUrls.length} images...`);
    let downloaded = 0;

    for (const url of imageUrls) {
        const filename = path.basename(url).replace(/[^a-zA-Z0-9._-]/g, '_');
        const dest = path.join(targetDir, filename);

        try {
            await downloadImage(url, dest);
            console.log(`Downloaded: ${filename}`);
            downloaded++;
        } catch (error) {
            console.error(`Error downloading ${url}: ${error}`);
        }
    }
    console.log(`\nCompleted! Downloaded ${downloaded} of ${imageUrls.length} images.`);
}

downloadAll();
