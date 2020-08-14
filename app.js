document.addEventListener('submit', function(e){
  e.preventDefault();

  // Hide results
  document.getElementById('results').style.display = 'none';
  // Show loader
  document.getElementById('loading').style.display = 'block';

  setTimeout(calculateResults, 2000);
});


function calculateResults(){
  let loanAmount = Number(document.getElementById('amount').value);
  let interest = Number(document.getElementById('intrest').value);
  let yearsToPay = Number(document.getElementById('years').value);
  
  if (isFinite(calcMonthlyPay(loanAmount, interest, yearsToPay))) {
    document.getElementById('monthly-payment').value = calcMonthlyPay(loanAmount, interest, yearsToPay).toFixed(2);
    document.getElementById('total-payment').value = calcTotalPayment(loanAmount, interest).toFixed(2);
    document.getElementById('total-intrest').value = calcTotalInterest(loanAmount, interest).toFixed(2);

    // Show results
    document.getElementById('results').style.display = 'block';

    // Hide loader
    document.getElementById('loading').style.display = 'none';
  } else {
    // console.log('Please check your numbers')

    showError('Please check your numbers');

    // Hide results
    document.getElementById('results').style.display = 'none';

    // Hide loader
    document.getElementById('loading').style.display = 'none';
  }



}

// Functions computes monthly and total payment and total interest
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

// Show Error
function showError(error) {
  // Create div
  const errorDiv = document.createElement('div');

  // Get elements
  const card = document.querySelector('.card');
  const heading = document.querySelector('.heading');

  // add class
  errorDiv.className = 'alert alert-danger';

  // Create text node and append to div
  errorDiv.appendChild(document.createTextNode(error));

  // Insert error above heading
  card.insertBefore(errorDiv, heading);
  // Clear error after 3 seconds (3000 mili seconds)
  setTimeout(clearError, 3000);

}

// Clear error
function clearError() {
  document.querySelector('.alert').remove();
}

