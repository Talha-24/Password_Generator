/* 
1. Access all of the buttons and input fields in Js variables
2.
*/

const passinp = document.querySelector(".display input");
const copy = document.querySelector("#copybtn");
const length = document.querySelector("#Length");
const uppercase = document.querySelector("#UpperCase");
const lowercase = document.querySelector("#LowerCase");
const symbol = document.querySelector("#Symbol");
const number = document.querySelector("#Number");
const generate = document.querySelector("#generate-button");
//Fetched Data from DOM
let uppercasestr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let lowercasestr = 'abcdefghijklmnopqrstuvwxyz';
let symbolstr = '!@#$%^&*()';
let numberstr = '0123456789';
//Assigning Data to String(Final Password)
let password = '';
let passwordshistory=[];
let pass = 0;
//Checking Condition(Checkboxes :true/false::Values are assigning to stringss...)
generate.addEventListener("click", () => {
    let password = '';
    let str = '';
    if (uppercase.checked) {
        str = str + uppercasestr;
    }
    if (lowercase.checked) {
        str = str + lowercasestr;
    }
    if (symbol.checked) {
        str = str + symbolstr;
    }
    if (number.checked) {
        str = str + numberstr
    }


    //Data in Whole Format;;
    for (let i = 0; i < length.value; i++) {
        let index = Math.floor(Math.random() * str.length);
        password = password + str[index];
    }
    passinp.value = password;//Final Value Final Password

    passwordshistory[pass] = password;//Assigning Passwords to an Array for Password History...
    localStorage.setItem('Password History',JSON.stringify(passwordshistory))
    pass++;
    console.log(passwordshistory);

})
copy.addEventListener("click", function () {
    if (!passinp.value) {
        alert("Please Generate the Password First....")
    }
    else {
        let textarea = document.createElement("textarea");
        textarea.value = passinp.value;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        textarea.remove();
    }

})



const showdata = document.querySelector("#showdata");
const elementsdata = JSON.parse(localStorage.getItem("Password History"));
const paras = document.querySelector("#paras");
showdata.addEventListener("click", function () {
    elementsdata.forEach((element, index) => {
        const para=document.createElement('p');
        para.innerText=`${element}`;
        paras.appendChild(para);
        console.log(`${element}`);
    })

})

const historybtn=document.querySelector("#clearhistory");
historybtn.addEventListener("click",function(){
   paras.remove();
   window.location.reload();

})
