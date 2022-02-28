const inputField = () =>{
    const inputField = document.getElementById("input-field")
    const inputText = inputField.value
    inputField.value=''

    const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${inputText}`
    fetch(url)
    .then(res => res.json())
    .then(data => showMeals(data.drinks))
}

const showMeals = display =>{
    console.log(display)
    const showResule = document.getElementById("show-result")
    showResule.textContent=''
    display.forEach(show => {
        const div = document.createElement("div")
        div.classList.add('col')
        div.innerHTML=`
          <div onclick="loadDetails('${show.idDrink}')" class="card">
            <img src="${show.strDrinkThumb}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${show.strDrink}</h5>
              <p class="card-text">${show.strInstructionsIT}</p>
            </div>
          </div>
        `
        showResule.appendChild(div)
       
    });
}
const loadDetails = (drinkId) =>{
    const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkId}`
    
    fetch(url)
    .then(res => res.json())
    .then(data =>detailsInfo(data.drinks[0]))
    // console.log(drinkId)
}

const detailsInfo = detail =>{
    const showInfo = document.getElementById("cocktail-details") 
    showInfo.textContent=''
    const div = document.createElement('div')
    div.classList.add('card')
    div.innerHTML=`
    <img src="${detail.strDrinkThumb}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title"></h5>
        <p class="card-text"></p>
        <a href="" class="btn btn-primary">Go somewhere</a>
    `

    showInfo.appendChild(div)
   
}