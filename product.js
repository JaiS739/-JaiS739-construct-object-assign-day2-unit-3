var localData = JSON.parse(localStorage.getItem("Products"));
console.log(localData);
localData.map(function(ele,index){
    var div = document.createElement("div");
    div.className = "box";    

    var img = document.createElement("img");
    img.src=ele.image;

    var imgdiv = document.createElement("div");
    imgdiv.className="forimg";
    imgdiv.append(img);
    
    var nameOfprod = document.createElement("h2");
    nameOfprod.innerText=ele.name;
    
    var cate = document.createElement("h3");
    cate.innerText=ele.category;

    var gend = document.createElement("h3");
    gend.innerText=ele.gender;

    var price = document.createElement("h3");
    price.innerText=ele.price;

    var othersdiv = document.createElement("div");
    othersdiv.className="remains";

    var btn = document.createElement("button");
    btn.innerText="Remove";
    btn.addEventListener("click",function(){
        removedata(ele,index);
    })

    othersdiv.append(nameOfprod,cate,gend,price,btn);

    div.append(imgdiv,othersdiv);
    document.querySelector("#container").append(div);

})

function  removedata(ele,index){
    localData.splice(index,1);
    localStorage.setItem("Products",JSON.stringify(localData));
    window.location.reload();
}
