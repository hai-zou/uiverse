const fs = require('fs');

fs.readdir('./src', (err, files) => {
  if (err) {
    console.error(err);
    return;
  }
  const htmlTpl = String(fs.readFileSync('./index.tpl'));
  const list = files.map(name => ({
    name,
    url: `./src/${name}/index.html`
  }));
  const resultTpl = htmlTpl.replace(/{{list}}/g, JSON.stringify(list));

  fs.writeFileSync(`./index.html`, resultTpl);
});
