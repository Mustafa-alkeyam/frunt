
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