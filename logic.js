let parent = document.querySelector(".parent");
let serchInp = document.querySelector('#search');
let dataInfo;



fetch("https://jsonplaceholder.typicode.com/posts")
.then( apiData => apiData.json() )
.then( readableData => {
    dataInfo = readableData;
    UpdateDom(readableData)
})


serchInp.addEventListener('change',function(data){
    let filteredData = dataInfo.filter(searchOverData => searchOverData.title.includes(data.target.value))
    UpdateDom(filteredData);
})

function UpdateDom(ArrayOfData){
    parent.innerHTML = ``;
    ArrayOfData.forEach(element => {
        let template = `
            <div class="container">
                <div class="container-id circle">${element.id}</div> 
                <div class="card-title">
                    ${element.title}
                </div>
                <div class="card-body">
                    ${element.body}
                </div>
            </div>`
        parent.innerHTML += template;
    });
}

// function statememt
// function vikas(){};

// function expression
// let vikas = function(){};

// anonymous function
// function(){}
