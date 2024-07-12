<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Uiverse</title>
  <link rel="icon" type="image/x-icon" href="./public/favicon.ico" />
  <style>
    body {
      margin: 0;
      background-color: bisque;
    }
    #el-list {
      width: 80%;
      margin: 20px auto;
      padding: 0;
      list-style: none;
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 20px;
    }
    .el-item {
      padding: 20px;
      box-shadow: 0 1px 10px rgba(0, 0, 0, 0.1);
      background-color: #fff;
      border-radius: 8px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .el-item__link {
      height: 150px;
    }
    .el-item__img {
      width: 100%;
      height: 100%;
      background-size: contain;
    }
  </style>
</head>
<body>
  <ul id="el-list"></ul>

  <script>
    const list = {{list}};
    const ulWrap = document.getElementById('el-list');
    for (const item of list) {
      const li = document.createElement('li');
      li.classList.add('el-item');
      li.innerHTML = `
        <a class="el-item__link" href="${item.url}">
          <img class="el-item__img" src="${item.img}" alt="${item.name}" />
        </a>
      `;
      ulWrap.appendChild(li);
    }
  </script>
</body>
</html>