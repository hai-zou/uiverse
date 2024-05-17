const fs = require('fs');
const path = require('path');

const EL_PATH = path.resolve(process.cwd(), './src');
const INDEX_PATH = path.resolve(process.cwd(), './');
const INDEX_TPL_PATH = path.resolve(process.cwd(), './index.tpl');

// 读取当前目录下的文件列表
fs.readdir(EL_PATH, (err, files) => {
  if (err) {
    console.error('读取目录失败:', err);
    return;
  }
  const htmlTpl = String(fs.readFileSync(INDEX_TPL_PATH));
  const list = files.map(name => ({
    name,
    url: `${EL_PATH}/${name}/index.html`
  }));
  const resultTpl = htmlTpl.replace(/{{list}}/g, JSON.stringify(list));

  fs.writeFileSync(`${INDEX_PATH}/index.html`, resultTpl);
});
