const fs = require('fs');
const path = require('path');

const mediaOutDir = path.join(__dirname, 'components/media-resources');
const files = fs.readdirSync(mediaOutDir);

const toPascal = (str) => {
  return str.split(/[-_]/).map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('');
};

let pageCode = fs.readFileSync(path.join(__dirname, 'app/media-resources/page.tsx'), 'utf8');

files.forEach(file => {
  if (file === 'Hero.tsx') return;
  const oldName = file.replace('.tsx', '');
  const newName = oldName.replace('MediaSection', '') === oldName ? oldName : 'MediaSection' + toPascal(oldName.replace('MediaSection', ''));
  
  if (oldName !== newName) {
    const oldPath = path.join(mediaOutDir, file);
    const newPath = path.join(mediaOutDir, newName + '.tsx');
    
    // Read and update the file content
    let content = fs.readFileSync(oldPath, 'utf8');
    content = content.replace(new RegExp("export default function " + oldName, 'g'), "export default function " + newName);
    // Some names have hyphens and broke the function syntax (export default function MediaSectionmedia-kit)
    content = content.replace(/export default function MediaSection[a-z\-]+/g, "export default function " + newName);
    fs.writeFileSync(oldPath, content);
    
    // Rename file
    fs.renameSync(oldPath, newPath);
    
    // Update page.tsx
    // The import statement might have broken syntax like: import MediaSectionmedia-kit from ...
    pageCode = pageCode.replace(new RegExp("import " + oldName + " from", 'g'), "import " + newName + " from");
    pageCode = pageCode.replace(new RegExp("/" + oldName + '\\"', 'g'), "/" + newName + '"');
    pageCode = pageCode.replace(new RegExp("<" + oldName + " />", 'g'), "<" + newName + " />");
  }
});

fs.writeFileSync(path.join(__dirname, 'app/media-resources/page.tsx'), pageCode);
console.log("Fixed media components.");
