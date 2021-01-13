const tableElement = document.getElementById("menu-table")

Array.prototype.sample = function(){
    return this[Math.floor(Math.random()*this.length)];
}

const meals = [
    {day:"Fri",time:"Lunch"},
    {day:"Fri",time:"Tea"},
    {day:"Sat",time:"Lunch"},
    {day:"Sat",time:"Tea"},
    {day:"Sun",time:"Lunch"},
    {day:"Sun",time:"Tea"},
    {day:"Mon",time:"Lunch"},
    {day:"Mon",time:"Tea"},
    {day:"Tues",time:"Lunch"},
    {day:"Tues",time:"Tea"},
    {day:"Wed",time:"Lunch"},
    {day:"Wed",time:"Tea"},
    {day:"Thurs",time:"Lunch"},
    {day:"Thurs",time:"Tea"},
]

const lunches = [
    "Soup",
    "Scotch Eggs",
    "Bagels",
    "Bacon and Eggs",
    "Jacket Potato, beans and Cheese",
    "Quiche",
    "Salad",
    "Smoked Salmon",
    "Ham Sandwiches",
    "Cheese On Toast",
    "Sausage Rolls",
    "Pork Pie",
    "Chicken Caesar Salad",
    "Turkey Sandwiches",
    "Pitta bread"
]
const Sunday = [
    "Roast Beef",
    "Roast Pork",
    "Roast Lamb",
    "Steak"
]
const teas = [
    "Sausages with roast veg",
    "Toad in the hole",
    "Fish and Chips",
    "Chicken Curry",
    "Lamb Curry",
    "Beef Curry",
    "Spaghetti and Meatballs",
    "Beef Casserole",
    "Chicken Casserole",
    "Chicken fajitas",
    "Sweet and Sour Chicken",
    "Pie and Chips",
    "Bangers and Mash",
    "Pasta, peas and Bacon",
    "Hunters Chicken",
    "Honey mustard Chicken and Rice",
    "Nachos",
    "Stir Fry",
    "Indian Takeaway",
    "Chinese Takeaway",
    "Takeaway Pizza",
    "Salmon, boiled potato's and veg",
    "Spaghetti Bolognaise",
    "Lasagna",
    "Cottage Pie",
    "Shepherds Pie",
    "Burgers",
    "Fish Pie",
    "Stuffed Peppers",
    "Crepes",
    "Tacos",
    "Fresh Pasta and Sauce",
    "Tortellini",
    "Filled pasta and Sauce",
    "Scampi and Chips",
    "Hawaiian shrimp",
    "Fish Cakes",
    "Chicken kievs",
]

var selected = []

function selectFood(day, time){
    if(time == 'Lunch'){
        var lunch = lunches.sample()
        while(selected.includes(lunch)){
            lunch = lunches.sample()
        }
        selected.push(lunch)
        return lunch
    } else if(day == 'Sun'){
        return Sunday.sample()
    } else {
        var meal = teas.sample()
        while(selected.includes(meal)){
            meal = teas.sample()
        }
        selected.push(meal)
        return meal
    }
}


function createTableElement(e){
    const tr = document.createElement('tr')
    const th = document.createElement('th')
    th.scope="row"
    th.innerText = e.day
    const td = document.createElement('td')
    td.innerText = e.time
    const td1 = document.createElement('td')
    td1.innerText = selectFood(e.day,e.time)
    
    tr.appendChild(th)
    tr.appendChild(td)
    tr.appendChild(td1)
    tableElement.appendChild(tr)
}

function createTable(){
    selected = []
    while(tableElement.firstChild){
        tableElement.removeChild(tableElement.firstChild)
    }
    meals.forEach(createTableElement)
}
