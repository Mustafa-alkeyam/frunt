

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
 var myForm = document.getElementsByClassName('userInput')[0]
console.log(document.getElementsByClassName('input'))
var myInput = document.getElementsByClassName('input')[0]
var myName = document.getElementsByClassName('myName')[0]

 myForm.addEventListener('submit',function(e){
    e.preventDefault()
    console.log(e)
    localStorage.setItem('profilleName',myInput.value)
    myName.innerHTML = localStorage.getItem('profilleName')


    myName.innerHTML = myInput.value
    myInput.value = ""
    myName.style.color = "red"
    myName.style.fontWeight = "bold"
    myName.style.fontFamily = "arial"
    myName.style.textAlign = "center"
    
})  
myName.innerHTML = localStorage.getItem('profilleName')
 

 