# Project (Random Color Generator)

## solution

### html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="index.css" />
    <title>randomColor</title>
  </head>

  <body>
    <main id="contentBox">
      <button id="start">start</button>
      <button id="stop">stop</button>
    </main>
  </body>

  <script src="index.js"></script>
</html>
```

### css

```css
* {
  padding: 0;
  margin: 0;
  font-size: 62.5%;
}

body {
  background-color: #212121;
  color: #efefef;
}

#contentBox {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5rem;
}

button {
  font-size: 1.4rem;
  padding: 1rem;
}
```

### javascript

```javascript
const body = document.querySelector(`body`);
const start = document.querySelector(`#start`);
const stop = document.querySelector(`#stop`);

const randomColor = function () {
  const hex = `0123456789ABCDEF`;
  let color = `#`;
  for (i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

console.log(randomColor());

let changeColor;

start.addEventListener(`click`, function (e) {
  changeColor = setInterval(bgChange, 100);

  function bgChange() {
    document.body.style.backgroundColor = randomColor();
  }
});

stop.addEventListener(`click`, function (e) {
  clearInterval(changeColor);
});
```
