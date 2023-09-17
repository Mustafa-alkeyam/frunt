
var myName = document.getElementsByClassName('myName')[0]
myName.innerHTML = 'Mustafa'
myName.style.color = 'red'

var primeForm = document.getElementsByClassName('primeForm')[0]
var primeInput = document.getElementById('primeInput')
var primeResult = document.getElementsByClassName('primeResult')[0]

primeForm.addEventListener('submit',function(e){
    e.preventDefault();
    console.log(e)
    var primeOrNot=parseInt(primeInput.value);
    for (var i =2; i <primeOrNot; i++){
        if (primeOrNot % i == 0){
            primeResult.innerHTML = "not prime"
            break
        }
        else{
            primeResult.innerHTML = "prime"
        }
    }
})


// example of do while:
var num = 5;
do{
    console.log(num);
    num--;
}
while(num>=0)



//  example of for loop
 for(var material =1; material <=4; material++){
    if(material===1){
     console.log('Arbic')
   }
    else if(material===2){
     console.log('English')
    }
    else if(material===3){
     console.log('Math')
    }
   else if(material===4){
     console.log('physic')
    }
}

// switch
for(var material =1; material <=4; material++){
    switch (material){
        case 1:
            console.log('Arbic')
            break;
        case 2:
            console.log('English')
            break;
        case 3:
            console.log('Math')
            break;
        case 4:
            console.log('physic')
            break;
    }
 }
 
 var backGroundButton = document.getElementById(backColer)
 function changeBackGround(){
    console.log("changeBackGround")
    console.log(document.body.style.backgroundColor)
    if(document.body.style.backgroundColor == "red"){
        document.body.style.backgroundColor = "white"
    }
    else{
        document.body.style.backgroundColor = "red"

    }
 }