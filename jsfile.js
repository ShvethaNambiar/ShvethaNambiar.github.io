function preLoad() {
    a1 = new Image; stock1.src = 'graph_1.png';  
    a2 = new Image; stock2.src = 'graph_2.png';
    a3 = new Image; stock3.src = 'graph_3.png';
    a4 = new Image; stock4.src = 'graph_1.png';  
    a5 = new Image; stock5.src = 'graph_2.png';
    a6 = new Image; stock6.src = 'graph_3.png';
    a7 = new Image; stock7.src = 'graph_1.png';  
    a8 = new Image; stock8.src = 'graph_2.png';
    a9 = new Image; stock9.src = 'graph_3.png';
    a10 = new Image; stock10.src = 'graph_1.png'; 
    document.getElementById("printCapital").innerHTML = "INR " + localStorage.getItem("capital");
}
function im(image) {
    document.getElementById('a').src = eval(image + ".src")
}

function confirmStock() {
    var x=document.getElementsByName("stock");
    var i;
    var flag=0;
    var selectStock=0;
    for ( i=0;i<x.length;i++){
        if (x[i].type=="radio"){
            if(x[i].checked==true){
               selectStock=x[i].value;
               stockval=x[i].id;
               flag=1;
            }
        }
    }
    if (flag==1){
        var output="Confirm selection of "+ String(selectStock);
         if (confirm(output)) {
             localStorage.setItem("stockval",stockval);
            localStorage.setItem("stock_id", selectStock);
            window.location.href = 'business_sell.html';
            return false;
        } 
         else {
            txt = "<b>Please select stock<b>";
        } 
    }
    else{
            alert("Stock not selected")
            txt = "<b>Please select stock<b>";
    } 
    document.getElementById("alertMsg").innerHTML = txt;
    return false;
}