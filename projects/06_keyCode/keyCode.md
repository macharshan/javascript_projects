# Project (Key Code)

## solution

### html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="index.css" />
    <title>Document</title>
  </head>

  <body>
    <main id="contents"></main>
  </body>

  <script src="index.js"></script>
</html>
```

### css

```css
* {
  font-size: 62.5%;
  margin: 0;
  padding: 0;
}

body {
  background-color: #212121;
  color: #efefef;
}

#contents {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

table {
  font-size: 14rem;
  border: 0.1rem solid #000;
}

tr,
th,
td {
  padding: 1rem;
  border: 0.1rem solid #000;
  border-collapse: inherit;
}
```

### javacript

```javascript
const contents = document.querySelector(`#contents`);

addEventListener(
  `keydown`,
  function (e) {
    contents.innerHTML = `
    <table>
        <tr>
            <th>key</th>
            <th>keyCode</th>
            <th>code</th>
        </tr>
        <tr>
            <td>${e.key == ` ` ? "space" : e.key}</td>
            <td>${e.keyCode}</td>
            <td>${e.code}</td>
        </tr>
    </table>
    `;
  },
  false
);
```
