const body = document.querySelector(`body`)
const buttons = document.querySelectorAll(`.button`)


addEventListener(`click`, function(e){
    if(e.target.id){
        body.style.backgroundColor = e.target.id;
    } else{
        body.style.backgroundColor = `#fff`;
    }
})
