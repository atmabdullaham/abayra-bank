document.getElementById('login-btn').addEventListener('click', function () {
 const emailInput = document.getElementById('email-input').value;
 console.log(emailInput);
 const passwordInput = document.getElementById('password-input').value;
 console.log(passwordInput);
 if (emailInput == 'atm@gmail.com' && passwordInput == 'open') {
 
   document.querySelector("#login-section").classList.add("hidden");
  //  document.querySelector("main").classList.add("hidden");
   // document.querySelector("header").classList.add("hidden");
   document.querySelector("#deposit-withdraw-section").classList.remove("hidden");
  

 }
})

// handle deposit button

document.getElementById('deposit-btn').addEventListener('click', function(){
 //get the amount deposited
 //
const depositInput = document.getElementById('deposit-input');
//
const newDepositAmount = depositInput.value;

//Update deposit total
//
const depositTotal = document.getElementById('deposit-total');
//
const previousDepositAmount = depositTotal.innerText
//
const newDepositTotal = parseFloat(previousDepositAmount) + parseFloat(newDepositAmount);
//
depositTotal.innerText = newDepositTotal;

//update account balance
const balanceTotal = document.getElementById('balance-total');
const balanceTotalText = balanceTotal.innerText
const previousBalanceTotal = parseFloat(balanceTotalText);
const newBalanceTotal = previousBalanceTotal + parseFloat(newDepositAmount);
balanceTotal.innerText = newBalanceTotal;


//clear the deposit input field
depositInput.value = '';

})


//handle withdraw//
document.getElementById('withdraw-btn').addEventListener('click', function(){
 const withdrawInput = document.getElementById('withdraw-input');
 const withdrawAmountText = withdrawInput.value;
 const newWithdrawAmount = parseFloat(withdrawAmountText);
 
 //set withdraw total 
 const withdrawTotal = document.getElementById('withdraw-total');
 const previousWithdrawText = withdrawTotal.innerText;
const previousWithdrawTotal = parseFloat(previousWithdrawText);
const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
withdrawTotal.innerText = newWithdrawTotal;

//update balance
const balanceTotal = getElementById('balance-total');
const previousBalanceText = balanceTotal.innerText;
const previousBalanceTotal = parseFloat(previousBalanceText);

const newBalanceTotal = previousBalanceTotal -newWithdrawAmount

balanceTotal.innerText = newBalanceTotal
withdrawInput.value = '';
})


//Goto the login page
document.getElementById('signin-btn').addEventListener('click', function(){
  document.querySelector("#signin-signup-section").classList.add("hidden");
  //  document.querySelector("main").classList.add("hidden");
   // document.querySelector("header").classList.add("hidden");
   document.querySelector("#login-section").classList.remove("hidden");
})


//goto the create account page
document.getElementById('singup-btn').addEventListener('click', function(){
  document.querySelector("#signin-signup-section").classList.add("hidden");
  //  document.querySelector("main").classList.add("hidden");
   // document.querySelector("header").classList.add("hidden");
   document.querySelector("#create-account-section").classList.remove("hidden");
})