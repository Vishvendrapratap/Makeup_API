document.body.innerHTML=`
<div class="completeclass">
<div class= "heading-container">
<h1>Makeup API </h1>
<img class="icon" src="https://cdn.vectorstock.com/i/1000x1000/94/30/icons-for-beauty-shop-vector-17329430.webp" width=100
</div>
<br>
<div></div>

<div class="search_bar">
<div class="se">
<input type="text" id="input_text" placeholder="Search Brand or Product name"> </div>
<br>
<button onclick="getbrandoutput()" class="button1"> Submit </button>
</div>

<div id="maincontainer" class="main-container">
</div>
<nav class="Page_navigation">

<div class="buttons">
<p> Click the buttons to search by Category</p>
    <div><button class="btn" onclick="categoryitem()">Pencil</button>
        <button class="btn" onclick="categoryitem_cream()">cream</button>
        <button class="btn" onclick="categoryitem_liquid()">liquid</button>
        <button class="btn" onclick="categoryitem_powder()">powder</button>
        <button class="btn" onclick="categoryitem_lipstick()">lipstick</button>
    </div>
</div>

</nav>

<div id="categorydiv"></div>

</div>`







let url="http://makeup-api.herokuapp.com/api/v1/products.json";
// create a function to read the data

async function getbrandoutput(){
try {
    let brands
    const data= await fetch(url, {method:"GET"
        
});
brands= await data.json()
// console.log(brands)
maincontainer.innerHTML="";

let userinput= document.getElementById("input_text").value
brands.forEach(eachbrand => {
    
    if(userinput==eachbrand.name || userinput==eachbrand.brand || userinput==eachbrand.category)
    //  console.log(eachbrand) 
 
     getbrandetails(eachbrand);
    

     
});  
}
 catch (error) {
 console.log(error);   
   }
}
// // getbrandoutput()


const getbrandetails= (obj)=>{
     
    maincontainer.innerHTML+=`<div class="container">
    <span"> <img class="brand_image" src="${obj.image_link}" >  </span>
    <span><a href="${obj.product_link}">Click here to visit the page</a></span>
    <h5 class="card-title"> Name: <span> ${obj.name}</span> </h5>
        <p class="card-text"> Brand: <span> ${obj.brand} </span> </p>
        <p class="card-text"> Price: <span> ${obj.price} ${obj.currency} </span> </p>
      
        <h4 class="test"> Description:<span> ${obj.description}</span> </h4>`
}

async function categoryitem(){
try {
    let brandsarray
    const alldata= await fetch(url, {method:"GET"     
});
brandsarray= await alldata.json()
categorydiv.innerhtml="";
brandsarray.forEach(obj=>{
if(obj.category=="pencil")
getcategorybrand(obj)
})
} catch (error) {
    console.log(error)
}    
}

const getcategorybrand= (obj)=>{
    categorydiv.innerHTML+=`<div class="container">
    <span"> <img class="brand_image" src="${obj.image_link}">  </span>
    <span><a href="${obj.product_link}">Click here to visit the page</a></span>
    <h5 class="card-title"> Name: <span> ${obj.name}</span> </h5>
        <p class="card-text"> Brand: <span> ${obj.brand} </span> </p>
        <p class="card-text"> Price: <span> ${obj.price} ${obj.currency} </span> </p>
        <h4 class="test"> Description:<span> ${obj.description}</span> </h4>`}

        

async function categoryitem_cream(){
            try {
                let brandsarray
                const alldata= await fetch(url, {method:"GET"     
            });
            brandsarray= await alldata.json()
            categorydiv.innerhtml="";
            brandsarray.forEach(obj=>{
            if(obj.category=="cream")
            getcategorybrand(obj)
            })
            } catch (error) {
                console.log(error)
            }    
            }

                 
async function categoryitem_powder(){
try {
    let brandsarray
    const alldata= await fetch(url, {method:"GET"     
});
brandsarray= await alldata.json()
categorydiv.innerhtml="";
brandsarray.forEach(obj=>{
if(obj.category=="powder")
getcategorybrand(obj)
})
} catch (error) {
    console.log(error)
}    
}


async function categoryitem_lipstick(){
    try {
        let brandsarray
        const alldata= await fetch(url, {method:"GET"     
    });
    brandsarray= await alldata.json()
    categorydiv.innerhtml="";
    brandsarray.forEach(obj=>{
    if(obj.category=="lipstick")
    getcategorybrand(obj)
    })
    } catch (error) {
        console.log(error)
    }    
    }
    async function categoryitem_liquid(){
        try {
            let brandsarray
            const alldata= await fetch(url, {method:"GET"     
        });
        brandsarray= await alldata.json()
        categorydiv.innerhtml="";
        brandsarray.forEach(obj=>{
        if(obj.category=="liquid")
        getcategorybrand(obj)
        })
        } catch (error) {
            console.log(error)
        }    
        }
    