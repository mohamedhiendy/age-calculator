// Get Current Date
const date = new Date();

const currentDay = date.getDate();
const currentMonth = date.getMonth() + 1;
const currentYear = date.getFullYear();

// Getting days in all months
const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

// Inputs
let birthDay = document.querySelector(".day");
let birthMonth = document.querySelector(".month");
let birthYear = document.querySelector(".year");

// Outputs
let numbersOfLastDays = document.querySelector(".finaldays");
let numbersOfLastMonths = document.querySelector(".finalmonths");
let numbersOfLastYears = document.querySelector(".finalyears");

// Submit Btn
let SubmitButton = document.querySelector(".arrowIcon");

// Form field
let formOfThePage = document.querySelector("form");

// Dom interaction
const validate = () => {
  const inputs = document.querySelectorAll(".error");
  let validation = true;

  inputs.forEach((e) => {
    const input = document.querySelector(
      `.${e.classList.value.split(" ").join(".")} input`
    );

    if (input.value === "") {
      e.classList.remove("validation");
      e.classList += " active empty";
      validation = false;
    } else if (
      (e.classList.value.includes("dayInput") && Number(input.value) > 31) ||
      (e.classList.value.includes("monthInput") && Number(input.value) > 12) ||
      (e.classList.value.includes("yearInput") &&
        Number(input.value) > currentYear) ||
      Number(input.value) <= 0
    ) {
      e.classList.remove("empty");
      e.classList += " active validation";
      validation = false;
    } else {
      e.classList.remove("active");
      e.classList.remove("empty");
      e.classList.remove("validation");
    }
  });
  return validation;
};

const handleSubmit = (e) => {
  e.preventDefault();
  if (!validate()) {
    numbersOfLastDays.innerHTML = "--";
    numbersOfLastMonths.innerHTML = "--";
    numbersOfLastYears.innerHTML = "--";
    return;
  }

  let CalculationOfDays = Math.abs(currentDay - birthDay.value);
  let CalculationOfMonths = Math.abs(currentMonth - birthMonth.value);
  let CalculationOfYears = Math.abs(currentYear - birthYear.value);

  if (birthDay.value > currentDay) {
    CalculationOfDays = Math.abs(
      currentDay + months[currentMonth - 1] - birthDay.value
    );
    CalculationOfMonths--;
  }
  if (birthMonth.value > currentMonth) {
    CalculationOfMonths = Math.abs(currentMonth + 12 - birthMonth.value);
    CalculationOfYears = Math.abs(currentYear - 1 - birthYear.value);
  }

  numbersOfLastDays.innerHTML = CalculationOfDays;
  numbersOfLastMonths.innerHTML = CalculationOfMonths;
  numbersOfLastYears.innerHTML = CalculationOfYears;
};

// Adding the submit
formOfThePage.addEventListener("submit", handleSubmit);
