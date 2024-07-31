function showAnswer(){
    let name = document.querySelector('#number1').value;
    let name2 = document.querySelector("#number2").value;
    let finalNumber = name * name2;
    document.querySelector('#answer').textContent = "The multiplication of " + name + " and " + name2 + " is " + finalNumber;
    document.querySelector('#answer').style.color="red";
}

document.querySelector('#btn').addEventListener ("click", showAnswer);