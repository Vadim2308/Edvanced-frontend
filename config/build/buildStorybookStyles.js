const fs = require('fs');
const path = require('path');

// Получите список файлов стилей в текущей папке
const stylesFolderPath = path.resolve(
  __dirname,
  '../../src/app/styles/themes/',
);
const outputFileName = 'storybook-styles.scss';

// Функция для получения всех файлов с расширением .css
function getCSSFilesInFolder(folderPath) {
  const files = fs.readdirSync(folderPath);
  return files.filter((file) => file.endsWith('normal.scss'));
}

// Получите список файлов стилей
const cssFiles = getCSSFilesInFolder(stylesFolderPath);

// Комбинируйте содержимое файлов стилей в одну строку
let combinedStyles = '';
cssFiles.forEach((file) => {
  const filePath = path.join(stylesFolderPath, file);
  const fileContent = fs
    .readFileSync(filePath, 'utf8')
    .replace('.app.light', ':root');
  combinedStyles += fileContent;
});

// Запишите комбинированные стили в файл
fs.writeFileSync(outputFileName, combinedStyles, 'utf8');

console.log(`Создан файл ${outputFileName} с комбинированными стилями.`);
