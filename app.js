document.addEventListener('submit', function(e){
  e.preventDefault();
  let loanAmount = Number(document.getElementById('amount').value);
  let interest = Number(document.getElementById('intrest').value);
  let yearsToPay = Number(document.getElementById('years').value);

  document.getElementById('monthly-payment').value = calcMonthlyPay(loanAmount, interest, yearsToPay);
  document.getElementById('total-payment').value = calcTotalPayment(loanAmount, interest);
  document.getElementById('total-intrest').value = calcTotalInterest(loanAmount, interest);

});

function calcMonthlyPay(loanAmount, interest, yearsToPay) {
  const monthPay = ((interest/100) * loanAmount) + loanAmount;
  return monthPay / (12 * yearsToPay);
}

function calcTotalPayment(loanAmount, interest) {
  return ((interest/100) * loanAmount) + loanAmount;
}

function calcTotalInterest(loanAmount, interest) {
  return (interest/100) * loanAmount;
}

