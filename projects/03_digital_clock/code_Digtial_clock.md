# Project (Digital Clock )

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
    <main>
      <div class="container">
        <p>Your time is</p>
        <span id="time"></span>
      </div>
    </main>
  </body>
  <script src="index.js"></script>
</html>
```

### css

```css
* {
  font-size: 62.5%;
  padding: 0;
  margin: 0;
}

body {
  font-size: 70px;
  line-height: 15px;
  font-weight: 600;
  background-color: #212121;
  color: #fff;
}

main {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.container {
  width: 120px;
  padding: 10px;
  aspect-ratio: 16/9;
  background-color: #ec4e20;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 15px;
}

#time {
  color: #212121;
}
```

### javascript

```javascript
const time = document.querySelector(`#time`);

setInterval(function (e) {
  const date = new Date();
  time.innerHTML = date.toLocaleTimeString();
}, 1000);
```
