# Project 1 (color Changer)

## solution code

### html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="index.css" />
    <title>colorChange</title>
  </head>
  <body>
    <div class="container">
      <div class="button" id="red"></div>
      <div class="button" id="green"></div>
      <div class="button" id="blue"></div>
    </div>
  </body>
  <script src="index.js"></script>
</html>
```

### css

```css
* {
  padding: 0;
  margin: 0;
}

.container {
  width: 100vw;
  height: 100vh;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
}

.button {
  width: 250px;
  aspect-ratio: 1/1;
  border: 5px solid #000;
}

#red {
  background-color: red;
}

#green {
  background-color: green;
}

#blue {
  background-color: blue;
}
```

### javascript

```javascript
const body = document.querySelector(`body`);
const buttons = document.querySelectorAll(`.button`);

addEventListener(`click`, function (e) {
  if (e.target.id) {
    body.style.backgroundColor = e.target.id;
  } else {
    body.style.backgroundColor = `#fff`;
  }
});
```
