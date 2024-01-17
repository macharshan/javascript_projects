addEventListener('submit',function(e){
    e.preventDefault();
    
    const heightValue = parseInt(document.querySelector(`#heightValue`).value)
    const weightValue = parseInt(document.querySelector(`#weightValue`).value)
    const result = document.querySelector(`.results`)


    if (heightValue == `` || heightValue <= 0 || isNaN(heightValue)){
        result.innerText = `please add a valid height`;
    } else if (weightValue == `` || weightValue <= 0 || isNaN(weightValue)){
        result.innerText = `please add a valid weight`;
    } else{
        const bmi = (weightValue/((heightValue*heightValue)/10000));
        let range =``
        if(bmi < 18.5){
            range = `Underweight`
        } else if(bmi >= 18.5 && bmi <= 24.9){
            range =`Normal weight`
        } else if(bmi >= 25 && bmi <= 29.9){
            range = `OverWeight`
        } else{
            range = `Obesity`
        }
        result.innerText = `your BMI value is ${bmi.toFixed(2)} (${range})`;
    }
})