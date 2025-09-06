const form = document.querySelector('form')
// this usecase will give you empty value
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function(e){
    e.preventDefault()

    const height = parseFloat(document.querySelector('#height').value)        // to prevent to store empty value, height is defined in this scope
    const weight = parseFloat(document.querySelector('#weight').value)        // same as height
    const results = document.querySelector('#results')        // same as height

    if(height === '' || height < 0 || isNaN(height)){
        results.innerHTML = `Please give a valid height ${height}`
    } else if(weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML = `Please give a valid weight ${weight}`
    } else{
        const BMI = (weight / (height*height)).toFixed(2)
        // show the result
        if (BMI < 18.6) {
            results.innerHTML = `<span>${BMI}</span><br><span>You are going Under Weight</span>`
        } else if(BMI > 24.9){
            results.innerHTML = `<span>${BMI}</span><br><span>You are going Over Weight</span>`
        } else{
            results.innerHTML = `<span>${BMI}</span><br><span>Your health is Good</span>`
        }
    }
})