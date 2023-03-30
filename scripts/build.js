const fs = require('fs');
const {
  replaceFileContent
} = require('../plugs/tools');
const circles = require('../jyj.json');
const LOGIN_FILE = './index.html';

/**
 * 打包地图文件
 */
function mapsPack() {
  console.info('开始打包 start~');
  circles.forEach(item => {
    const searchValue = /circleDataMock/g;
    const replacement = JSON.stringify(item);
    const filePath = `./dist/${item.storeId}.html`;

    fs.copyFileSync(LOGIN_FILE, filePath);

    replaceFileContent(
      filePath,
      searchValue,
      replacement
    );
  })
  console.info('打包结束 end~');
}

mapsPack();