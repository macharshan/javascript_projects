# Project( BMI Calculator)

## solution

### html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="index.css" />
    <title>BMI calculator</title>
  </head>
  <body>
    <main>
      <div class="container">
        <h1>BMI Calculator</h1>
        <form>
          <label for="height" id="heightHeading"
            >Height in cm:
            <input
              type="text"
              class="height"
              id="heightValue"
              placeholder="Height"
            />
          </label>
          <label for="weight" id="weightHeading"
            >Weight in kg:
            <input
              type="text"
              class="weight"
              id="weightValue"
              placeholder="Weight"
            />
          </label>
          <input type="submit" id="submit" />
        </form>
        <p class="results"></p>
        <ul>
          <li>BMI Categories:</li>
          <li>Underweight = <18.5</li>
          <li>Normal weight = 18.5–24.9</li>
          <li>Overweight = 25–29.9</li>
          <li>Obesity = BMI of 30 or greater</li>
        </ul>
      </div>
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
  font-size: 1.4rem;
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
  /* padding: 20rem; */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 0.5rem;
  border: 0.5rem solid #121212;
}

h1 {
  padding: 1rem;
  text-align: center;
  font-size: 4rem;
  border-bottom: 0.5rem solid #121212;
}

p {
  font-size: 1.4rem;
}

form {
  font-size: 1.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 1rem;
}

label {
  font-size: 1.4rem;
}

input {
  height: 2rem;
  margin-block: 0.5rem;
}

#submit {
  /* width: 5rem; */
  height: 3.5rem;
  padding: 1rem;
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 1.5rem;
  text-align: center;
  background-color: #aaa;
  border-radius: 0.5rem;
  color: #212121;
}

li {
  text-align: center;
  list-style: none;
  padding: 1rem;
  font-size: 1.4rem;
}

li:first-child {
  padding: 1rem;
  font-size: 2.5rem;
}

li:last-child {
  padding-bottom: 2.8rem;
}
```

### javascript

```javascript
addEventListener("submit", function (e) {
  e.preventDefault();

  const heightValue = parseInt(document.querySelector(`#heightValue`).value);
  const weightValue = parseInt(document.querySelector(`#weightValue`).value);
  const result = document.querySelector(`.results`);

  if (heightValue == `` || heightValue <= 0 || isNaN(heightValue)) {
    result.innerText = `please add a valid height`;
  } else if (weightValue == `` || weightValue <= 0 || isNaN(weightValue)) {
    result.innerText = `please add a valid weight`;
  } else {
    const bmi = weightValue / ((heightValue * heightValue) / 10000);
    let range = ``;
    if (bmi < 18.5) {
      range = `Underweight`;
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      range = `Normal weight`;
    } else if (bmi >= 25 && bmi <= 29.9) {
      range = `OverWeight`;
    } else {
      range = `Obesity`;
    }
    result.innerText = `your BMI value is ${bmi.toFixed(2)} (${range})`;
  }
});
```
