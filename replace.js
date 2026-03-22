const fs = require('fs');
const path = require('path');

const dirToProcess = [__dirname];

function processDirectory(dir) {
    if (!fs.existsSync(dir)) return;
    if (dir.includes('node_modules') || dir.includes('.git') || dir.includes('build')) return;
    fs.readdirSync(dir).forEach(file => {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            processDirectory(fullPath);
        } else {
            if (fullPath.match(/\.(js|jsx|html|json)$/)) {
                let content = fs.readFileSync(fullPath, 'utf8');
                let newContent = content
                    .replace(/AATECH/g, 'AATECH')
                    .replace(/aatech/g, 'aatech')
                    .replace(/AATHITHYA981/g, 'AATHITHYA981');
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
