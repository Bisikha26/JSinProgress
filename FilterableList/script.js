// The filter() method creates an array filled with all array elements that pass a test
// import dataResources from "./dummyData";
const resources = document.querySelector("#resources-container");

let category = "";
let filteredDataResources = [];

const filterResources = (category) => {
    //filter data
    filteredDataResources = dataResources.filter( resourceData => {
        // console.log(resourceData.tags);
        if(resourceData.tags.includes(category)) {
            const resourceCard = copyTemplateCard(resourceData);
            console.log(resourceCard);
            // attach a new card to container
            resources.appendChild(resourceCard)
        }
    })
}
// filterResources("all");


function fillResourcesContainer(e) {
    resources.innerHTML = "";
    category = this.id;
    resources;
    filterResources(category);
}

const btnFilter = document.querySelectorAll(".btnFilter");
btnFilter.forEach(function(btn){
    btn.addEventListener("click", fillResourcesContainer);
})
