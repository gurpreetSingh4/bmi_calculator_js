const form = document.querySelector("form")

form.addEventListener('submit' , (e) => {
  e.preventDefault()
  console.log(e)
  const height = parseInt(document.querySelector("#height").value)
  const weight = parseInt(document.querySelector("#weight").value)
  const results = document.querySelector("#results")
  if(height == '' || height < 0 || isNaN(height)){
    results.innerHTML = `Please give valid height ${height}`
  } else if(height == '' || height < 0 || isNaN(height)){
    results.innerHTML = `Please give valid height ${height}`
  } else {
    const bmi = (weight / ((height * height)/10000)).toFixed(2)
    if(bmi<18.6){
      results.innerHTML = `<span> ${bmi} (UNDER WEIGHT)</span>`
      
    }else if (bmi>18.6 && bmi < 24.9){
      results.innerHTML = `<span> ${bmi} (NORMAL Range)</span>`
    }else{
      results.innerHTML = `<span> ${bmi} (OVER WEIGHT)</span>`
    }
  }

})