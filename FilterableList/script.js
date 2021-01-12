// get search bar input element
var filterInput = document.getElementById('filterInput');
// add event listener
filterInput.addEventListener('keyup', filterNames);

function filterNames() {
    // get the value of the search bar
    let filterValue = document.getElementById("filterInput").value.toUpperCase();

    // get the value of names to compare with the content of searchbar
    let ul = document.getElementById('name');

    //get lis from ul
    let li = ul.querySelectorAll('li.collection-item');

    // loop through collection item list
    for(let i = 0; i < li.length; i++) {
        let a = li[i].getElementsByTagName('a')[0]
        // anchor tag ko bhitra bhako text lina lai a.innerHTML 
        // If matches, 
        if(a.innerHTML.toUpperCase().indexOf(filterValue) > -1) {
            // if there is match with the anchor tag ko inner html with filtervalue, leave as it is 
            li[i].style.display = '';
        }else {
            // if there is no match, let the names disappear
            li[i].style.display = 'none';
        }
    }
}
