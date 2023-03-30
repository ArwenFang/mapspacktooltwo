const fs = require('fs');
const ENCODING = 'utf8';

/**
 * 替换文件内容-多个
 * @param filePath
 * @param replacements
 */
function replaceMultiFileContent(filePath, replacements) {
  let content = fs.readFileSync(filePath, {encoding: ENCODING});
  replacements.forEach((item) => {
    content = content.replace(item.searchValue, item.replacement);
  });
  fs.writeFileSync(filePath, content, {encoding: ENCODING});
}

/**
 * 替换文件内容
 * @param filePath
 * @param searchValue
 * @param replacement
 */
function replaceFileContent(filePath, searchValue, replacement) {
  replaceMultiFileContent(filePath, [{searchValue, replacement}]);
}

module.exports = {
  replaceFileContent,
  replaceMultiFileContent,
};