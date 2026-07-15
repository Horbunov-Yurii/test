export const render = (array, element )=> {
    const item = array.map(({id, name, age, city, isStudent})=>{
        return `<li id="${id}">
   <h2>Імья: ${name}</h2>
   <p>Вік :${age}</p>
   <p>Місце :${city}</p>
   <p>${isStudent? "Студент": "НЕ студент"}</p>
</li>`
    }).join("")
    
    element.innerHTML = item
}