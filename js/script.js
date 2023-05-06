const searchBtn = document.getElementById('searchBtn');
searchBtn.addEventListener('click', searchMeals);

function searchMeals() {
    const searchInput = document.getElementById('search').value;

    const URL = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput}`;
    
    fetch(URL)
        .then(res => res.json())
        .then(data => {show(data)})
        .catch(err => console.log(err));
}

function show(items){
    const limitInput = document.getElementById('limit').value;
    const mealsContainer = document.getElementById('mealSection');
    for(let i=0; i<limitInput; i++) {
        const meal = items.meals[i];
        let mealHTML = document.createElement('div');

        mealHTML.innerHTML = `
                <div class="card mb-4">
                    <img src="${meal.strMealThumb}" class="card-img-top">
                    <div class="card-body">
                        <h5 class="card-title">${meal.strMeal}</h5>
                        <p class="card-text">${meal.strInstructions}</p>
                    </div>
                </div>
        `;
        mealHTML.classList.add('col-md-4');
        mealsContainer.appendChild(mealHTML);

    }
}