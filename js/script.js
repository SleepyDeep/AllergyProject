// getting all required elements
// SOURCE: https://dev.to/codingnepal/search-bar-with-autocomplete-search-suggestions-in-javascript-32dn
const searchWrapper = document.querySelector(".search-input");
const inputBox = searchWrapper.querySelector("input");
const suggBox = searchWrapper.querySelector(".autocom-box");
const icon = searchWrapper.querySelector(".icon");
const resBox = document.querySelector(".search-result");
// let linkTag = searchWrapper.querySelector("a");
// let webLink;

// if user press any key and release
inputBox.onkeyup = (e)=>{
    resBox.classList.remove("active");
    let userData = e.target.value; //user enetered data
    let emptyArray = [];
    if(userData){
        icon.onclick = ()=>showResults(userData);
        emptyArray = suggestions.filter((data)=>{
            //filtering array value and user characters to lowercase and return only those words which are start with user enetered chars
            return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
        });
        emptyArray = emptyArray.map((data)=>{
            // passing return data inside li tag
            return data = `<li>${data}</li>`;
        });
        searchWrapper.classList.add("active"); //show autocomplete box
        showSuggestions(emptyArray);
        let allList = suggBox.querySelectorAll("li");
        for (let i = 0; i < allList.length; i++) {
            //adding onclick attribute in all li tag
            allList[i].setAttribute("onclick", "select(this)");
        }
    }else{
        searchWrapper.classList.remove("active"); //hide autocomplete box
    }
}

function select(element){
    let selectData = element.textContent;
    inputBox.value = selectData;
    icon.onclick = ()=>showResults(selectData);
    searchWrapper.classList.remove("active");
}

function showSuggestions(list){
    let listData;
    if(!list.length){
        userValue = inputBox.value;
        listData = `<li>${userValue}</li>`;
    }else{
      listData = list.join('');
    }
    suggBox.innerHTML = listData;
}

function showResults(selectData){
    resBox.classList.add("active");
    ingredientStr = ingredients[selectData];
    if(typeof ingredientStr !== 'undefined') {
        ingredientStr = ingredientStr.replace(
            /(MILK|EGG|PEANUT|SOYBEAN|SOY|WHEAT|WALNUT|PECAN|CASHEW|ALMOND|PISTACHIO|HAZELNUT|NUTS|SHELLFISH|SHRIMP|CRAB|LOBSTER|CLAM|MUSSEL|OYSTER|SCALLOP|FISH|SALMON|TUNA|HALIBUT)(s|es)?/gi, 
            function(match){ return "<b>" + match + "</b>"; }
        );
        resBox.querySelector("h2").innerHTML = "Ingredients";
        resBox.querySelector("p").innerHTML  = ingredientStr;
    } else {
        resBox.querySelector("h2").innerHTML = "Item Not Found";
        resBox.querySelector("p").innerHTML  = "Please try searching again for a valid food product.";
    }
}