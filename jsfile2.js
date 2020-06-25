
    /*  stock_id = value of the stock selected (radio buttons)
        capital = initial entered amount from previous task
        investAmount = invested amount on stock (text input)
        balance= remainig balance in account
        returnAmt = amount (gain) after selling stock 
    */
let capital;
let investAmount;
let balance;
let stock_id;

function preload(){
    stock1 = new Image; stock1.src = 'graph_1.png';  
    stock2 = new Image; stock2.src = 'graph_2.png';
    stock3 = new Image; stock3.src = 'graph_3.png';
    stock4 = new Image; stock4.src = 'graph_1.png';  
    stock5 = new Image; stock5.src = 'graph_2.png';
    stock6 = new Image; stock6.src = 'graph_3.png';
    stock7 = new Image; stock7.src = 'graph_1.png';  
    stock8 = new Image; stock8.src = 'graph_2.png';
    stock9 = new Image; stock9.src = 'graph_3.png';
    stock10 = new Image; stock10.src = 'graph_1.png'; 
    var img=localStorage.getItem("stockval");
    document.getElementById('a').src = eval(img + ".src")
    document.getElementById("stockOutput").innerHTML=localStorage.getItem("stock_id");  
    capital=Number(localStorage.getItem("capital"));
    document.getElementById("printCapital").innerHTML="INR "+capital;     
    document.getElementById("capitalOutput").innerHTML="INR "+capital;
    investAmount=localStorage.getItem("investAmount");
    
    if (investAmount != null){
        var disablebt=document.getElementById("fixInvestment");
        disablebt.disabled = true; //disable Fix Invest Button
        console.log("Investment already fixed");
        document.getElementById("investOutput").innerHTML="INR "+ String(investAmount);
        balance= Number(capital - investAmount);
        document.getElementById("balanceOutput").innerHTML="INR "+ String(balance);
        localStorage.setItem("balance",balance);
        document.getElementById("printCapital").innerHTML="INR "+ String(balance);
        var disablebt=document.getElementById("fixInvestment");

        /*************on reload **************/
        getTime=localStorage.getItem("getTime");
        var myfunc = setInterval(function() {
            var now = new Date().getTime();
            var timeleft = getTime - now;
            // Calculating minutes and seconds left
            var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
                
            // Result is output to the specific element
            document.getElementById("mins").innerHTML = "Sell stock in: "+ minutes + "m " 
            document.getElementById("secs").innerHTML = seconds + "s " 
                
            // Display the message when countdown is over
            if (timeleft < 0) {
                clearInterval(myfunc);
                document.getElementById("mins").innerHTML ="You can sell your stock now!";
                document.getElementById("secs").innerHTML = ""
                var enablebt=document.getElementById("sellStock");
                enablebt.disabled= false;
            }
            }, 1000);
    }
}

/**************************************/
//fix investment button
function fixInvestment(){
    let enteredAmt=parseFloat(document.getElementById('investAmt').value);

    if ((enteredAmt<capital) && (enteredAmt>0)){ //check validity of entered amount 
        var output="Confirm fixed amount? This can be done only once";
        if(confirm(output)){ //if okay
            investAmount=enteredAmt;
            localStorage.setItem("investAmount",enteredAmt);
            document.getElementById("investOutput").innerHTML="INR "+ String(investAmount);
            balance= Number(capital - investAmount);
            document.getElementById("balanceOutput").innerHTML="INR "+ String(balance);
            localStorage.setItem("balance",balance);
            document.getElementById("printCapital").innerHTML="INR "+ String(balance);
            var disablebt=document.getElementById("fixInvestment");
            disablebt.disabled = true; //disable Fix Invest Button
            window.location.href = '#sellStock';
            /**************start timer************/
            
            var getTime=new Date().getTime();
            getTime=getTime+(30*1000); //adding 15 minutes when button clicked (30sec for now) make it (15*60*1000)
            localStorage.setItem("getTime",getTime);
            // Run myfunc every second
            var myfunc = setInterval(function() {
            var now = new Date().getTime();
            var timeleft = getTime - now;
            // Calculating minutes and seconds left
            var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
                
            // Result is output to the specific element
            document.getElementById("mins").innerHTML = "Sell stock in: "+ minutes + "m " 
            document.getElementById("secs").innerHTML = seconds + "s " 
                
            // Display the message when countdown is over
            if (timeleft < 0) {
                clearInterval(myfunc);
                document.getElementById("mins").innerHTML ="You can sell your stock now!";
                document.getElementById("secs").innerHTML = ""
                var enablebt=document.getElementById("sellStock");
                enablebt.disabled= false;
            }
            }, 1000);
        }
        else{
            return false;
        }
    }
    else{
        alert("Invalid amount"); 
    }    
}

/*************************************/

//sell button
function sellStock(){
    
    const stock_list=[1.4, 1.1, 0.8, 1.3, 0.7, 0.6, 1.1, 1.2, 0.9, 1.3];
    stock_id=String(localStorage.getItem("stock_id"));
    investAmount=parseFloat(localStorage.getItem("investAmount"));
    var output="Confirm selling of "+ String(stock_id);
    balance=parseFloat(localStorage.getItem("balance"));
    if (confirm(output)) {
        let num=parseInt(stock_id.slice(-2))-1; //get stock number (in list)
        let returnAmt=(((stock_list[num])*investAmount)); 
        returnAmt=parseFloat(returnAmt.toFixed(2));
        localStorage.setItem("returnAmt", returnAmt);
        balance=balance+returnAmt;
        localStorage.setItem("balance",balance);
        window.location.href = 'business_end.html';
        return false;
    } 
     else {
        return false;
    } 
    
}

/*Stock 1 - 1.4
Stock 2 - 1.1
Stock 3 - 0.8
Stock 4 - 1.3  
Stock 5 - 0.7
Stock 6 - 0.6
Stock 7 - 1.1
Stock 8 - 1.2
Stock 9 - 0.9
Stock 10 - 1.3
 */
