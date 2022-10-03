let parent = document.querySelector(".parent");
let serchInp = document.querySelector('#search');
let dataInfo;
let closeCard = document.querySelector(".closeCard");
let workingArray;

fetch("https://jsonplaceholder.typicode.com/posts")
.then( apiData => apiData.json() )
.then( readableData => {
    dataInfo = [...readableData];
    workingArray = [...readableData];
    UpdateDom(readableData)
})

// search on change 
serchInp.addEventListener('change',function(data){
    let filteredData = dataInfo.filter(searchOverData => searchOverData.title.includes(data.target.value))
    workingArray = [...filteredData];
    UpdateDom(filteredData);
})

// dom update function
function UpdateDom(ArrayOfData){
    parent.innerHTML = ``;
    ArrayOfData.forEach((element,index) => {
        let template = `
            <div class="container">
                <div class="inline">
                    <div class="container-id circle">${element.id}</div> 
                    <span data-index=${index} class="circle closeCard" id="cross" >X</span> 
                </div> 
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

// delete
parent.addEventListener('click',function(data){
    if(data.target.dataset.index){
        dataInfo.splice(dataInfo.indexOf(workingArray[data.target.dataset.index]),1);
        workingArray.splice(data.target.dataset.index,1)
        UpdateDom(workingArray)  
    }
})

dragula([parent]);