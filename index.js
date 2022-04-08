var dataArr = JSON.parse(localStorage.getItem("Products"))||[];

function bluePrintObject(p,c,i,pric,gende){
    this.name=p;
    this.category=c;
    this.image = i;
    this.price = pric;
    this.gender = gende;
    
}

var localData = JSON.parse(localStorage.getItem("Products"));


function storeData(e){
    event.preventDefault();
    var form = document.querySelector("form");
    var productName = form.name.value;
    var prodCat = form.category.value;
    var img = form.image.value;
    var pri = form.Price.value;
    var gen = form.gender.value;

    
    var seller = new bluePrintObject(productName,prodCat,img,pri,gen);
    dataArr.push(seller);

    localStorage.setItem("Products",JSON.stringify(dataArr));

    window.location.reload();

}