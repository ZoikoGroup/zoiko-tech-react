const fs = require('fs');
const path = require('path');

const fixImagesInDir = (dir) => {
  const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx'));
  files.forEach(file => {
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    if (content.includes('fill') && !content.includes('sizes=')) {
      content = content.replace(/fill/g, 'fill sizes="100vw"');
      fs.writeFileSync(filePath, content);
    }
  });
};

fixImagesInDir(path.join(__dirname, 'components/media-resources'));
fixImagesInDir(path.join(__dirname, 'components/developer-resources'));
console.log("Fixed sizes prop for images.");
