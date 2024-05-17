<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Uiverse</title>
</head>
<body>
  <ul id="el-list"></ul>

  <script>
    const list = {{list}};
    const ulWrap = document.getElementById('el-list');
    for (const item of list) {
      const li = document.createElement('li');
      li.innerHTML = `<a href="${item.url}" target="_blank">${item.name}</a>`;
      ulWrap.appendChild(li);
    }
  </script>
</body>
</html>