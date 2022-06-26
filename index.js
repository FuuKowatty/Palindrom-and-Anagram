let clickMe = document.querySelector('#clickMe');
let clickMeToo = document.querySelector('#clickMeToo');



clickMe.addEventListener('click', () => {
    
    let typeMe = document.querySelector('#typeMe');
    let loadMe = document.querySelector('#loadMe');

    let typeMeValue = typeMe.value;
    let anwser = "";

    if(typeMeValue.length < 3) { //palindrome fast-requirment
        loadMe.innerHTML = 'word is too short for palindrome!';
        return;
    }
    //is palindrome
    typeMeValue.replaceAll(" ", "").toLowerCase() 
    === typeMeValue.split("").reverse().join("").replaceAll(" ", "").toLowerCase()
        ? anwser = `A "${typeMeValue}" is a palindrome`
        : anwser = `A "${typeMeValue}" is not a palindrome`;

    loadMe.innerHTML = anwser;

    //clearfunc. later
    typeMe.value = '';

    
});

clickMeToo.addEventListener('click', () => {
    //hooks
    let typeMeFirst = document.querySelector('#typeMeFirst');
    let typeMeSecond = document.querySelector('#typeMeSecond');
    let loadMeToo = document.querySelector('#loadMeToo')

    //make value
    let typeMeValueOfFirst = typeMeFirst.value;
    let typeMeValueOfSecond = typeMeSecond.value;

    //to array
    let boardOfValueFirst = typeMeValueOfFirst.replaceAll(" ", "").toLowerCase().split("");
    let boardOfValueSecond = typeMeValueOfSecond.replaceAll(" ", "").toLowerCase().split("");

         //anagram requrment first
        if(boardOfValueFirst.length !== boardOfValueSecond.length) {
            loadMeToo.innerHTML = "These are not a anagrams, the lengths vary!";
            return;

        } 
        //add to func. later
        for(let i = 0; i<boardOfValueFirst.length; i++) {
            for(let j = 0; j<boardOfValueSecond.length; j++) {
                if(boardOfValueFirst[i] === boardOfValueSecond[j]) {
                    delete boardOfValueFirst[i]
                    delete boardOfValueSecond[j];
                }
            }

        }
        let arrayFirst = boardOfValueFirst.join("");
        let arraySecond = boardOfValueSecond.join("");


        arrayFirst === arraySecond
            ? loadMeToo.innerHTML = `These are anagrams`
            : loadMeToo.innerHTML = `These are not anagrams`

        //clearfunc. later
        typeMeFirst.value = '';
        typeMeSecond.value = '';

           
});


