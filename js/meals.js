const inputField = () =>{
    const inputField = document.getElementById("input-field")
    const inputText = inputField.value
    inputField.value=''

    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputText}`
    fetch(url)
    .then(res => res.json())
    .then(data => showMeals(data.meals))
}

const showMeals = display =>{
    display.forEach(show => {
        console.log(show.strMeal)
    });
}