const fs = require('fs');
const path = require('path');

const dirToProcess = [path.join(__dirname, 'src'), path.join(__dirname, 'public')];

function processDirectory(dir) {
    if (!fs.existsSync(dir)) return;
    fs.readdirSync(dir).forEach(file => {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            processDirectory(fullPath);
        } else {
            if (fullPath.match(/\.(js|jsx|html|json)$/)) {
                let content = fs.readFileSync(fullPath, 'utf8');
                let newContent = content
                    .replace(/Aathithya000986/g, 'AATHITHYA981');
                if (content !== newContent) {
                    fs.writeFileSync(fullPath, newContent, 'utf8');
                    console.log(`Updated ${fullPath}`);
                }
            }
        }
    });
}

dirToProcess.forEach(processDirectory);
console.log('Replacement complete.');
