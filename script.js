// when js file is uploaded on DOM , onload func is called
window.onload = () => {
  const inputs = document.querySelectorAll("input");

  inputs.forEach((input) => {
    input.addEventListener("change", calLoan);
  });
};

calLoan = () => {
  const principal = document.querySelector("#amount").value;
  const interestRate = document.querySelector("#interest").value;
  const tenure = document.querySelector("#tenure").value;

  if (!principal || !interestRate || !tenure) return;

  //   % to yearly to monthly
  const monthlyInterest = interestRate / 100 / 12;
  //   monthly emi
  const emi =
    (principal * monthlyInterest * Math.pow(1 + monthlyInterest, tenure)) /
    (Math.pow(1 + monthlyInterest, tenure) - 1);
  // total amount paid over the years
  const totalAmount = emi * tenure;

  const totalInterest = totalAmount - principal;

  document.querySelector("#emi").innerText = "Monthly Emi : ₹" + emi.toFixed(2);
  document.querySelector("#totalAmount").innerText =
    "Total Amount : ₹" + totalAmount.toFixed(2);
  document.querySelector("#totalInterest").innerText =
    "Total Interest : ₹" + totalInterest.toFixed(2);
};
