import {isValid, parseISO} from 'date-fns';
import './css/style.css';

function checkInputValidity(inputField, listItem)  {
	function checkEmptiness() {
		if(inputField.value === "") {
			inputField.classList.add("empty");
			listItem.classList.add("empty");
		} else {
			inputField.classList.remove("empty");
			listItem.classList.remove("empty");
		}
	}
	function checkValue() {
		const inputFieldValue = parseInt(inputField.value);
		if(inputField.id === "age-calculator-date-day-i") {
			if (inputFieldValue > 0 && inputFieldValue < 32 || inputField.value === "") {
				inputField.classList.remove("invalidDay");
				listItem.classList.remove("invalidDay");
			} else {
				inputField.classList.add("invalidDay");
				listItem.classList.add("invalidDay");
			}
		}

		if (inputField.id === "age-calculator-date-month-i") {
			if (inputFieldValue > 0 && inputFieldValue < 13 || inputField.value === "") {
				inputField.classList.remove("invalidMonth");
				listItem.classList.remove("invalidMonth");
			} else {
				inputField.classList.add("invalidMonth");
				listItem.classList.add("invalidMonth");
			}
		}

		if (inputField.id === "age-calculator-date-year-i") {
			if (inputFieldValue > 999 && inputFieldValue < 2024 || inputField.value === "") {
				inputField.classList.remove("invalidYear");
				listItem.classList.remove("invalidYear");
			} else {
				inputField.classList.add("invalidYear");
				listItem.classList.add("invalidYear");
			}
		}
	}

	checkEmptiness();
	checkValue();
}

function checkDateValidity(dayInput, dayListItem, monthInput, yearInput) {
	const day = dayInput.value.padStart(2, '0');
	const month = monthInput.value.padStart(2, '0');
	const dateString = yearInput.value + "-" + month + "-" + day;
	if (!isValid(parseISO(dateString))) {
		dayInput.classList.add("invalidDay");
		dayListItem.classList.add("invalidDay");
	} else {
		dayInput.classList.remove("invalidDay");
		dayListItem.classList.remove("invalidDay");
	}
}

function calculateResults(dayInput, monthInput, yearInput) {
	// safari compatibility, ISO format transformation with padStart
	const personalDateObject = new Date(`${Number(yearInput.value)}-${Number(monthInput.value).toString().padStart(2, "0")}-${Number(dayInput.value).toString().padStart(2, "0")}`);
	const currentDateObject = new Date();
	const diffInAbs = Math.abs(currentDateObject - personalDateObject);
	const totalDiffDays = Math.floor(diffInAbs / (1000 * 60 * 60 * 24));
	const diffInYears = Math.floor(totalDiffDays / 365);
	const diffInMonths = Math.floor((totalDiffDays % 365) / 30);
	const diffInDays = ((totalDiffDays % 365) % 30);
	return [diffInYears, diffInMonths, diffInDays];
}

function submitForm(event, dayInput,monthInput,yearInput) {
	const inputFields = document.querySelectorAll("input");
	const resultFields = document.querySelectorAll(".result-number");
	const submitButton = document.getElementById("submit-button");

	if (Array.from(inputFields).some(input => input.classList.contains("empty") || input.classList.contains("invalidDay") || input.classList.contains("invalidMonth") || input.classList.contains("invalidYear"))) {
		resultFields[0].innerHTML = "--";
		resultFields[1].innerHTML = "--";
		resultFields[2].innerHTML = "--";

	} else {
		const diffArray = calculateResults(dayInput,monthInput,yearInput);
		resultFields[0].innerHTML = `${diffArray[0]}`;
		resultFields[1].innerHTML = `${diffArray[1]}`;
		resultFields[2].innerHTML = `${diffArray[2]}`;

	}
}

document.addEventListener("DOMContentLoaded", function () {
	let dayInput = document.getElementById("age-calculator-date-day-i");
	let monthInput = document.getElementById("age-calculator-date-month-i");
	let yearInput = document.getElementById("age-calculator-date-year-i");
	let dayListItem = document.getElementById("age-calculator-date-day-li");
	let inputFields = document.querySelectorAll("input");
	let listFields = document.querySelectorAll(".date-input-field");
	let form = document.querySelector(".age-calculator-container");

	for (let i = 0; i < inputFields.length; i++) {
		inputFields[i].addEventListener("input", function () {
			inputFields[i].addEventListener("blur", function () {
				checkInputValidity(inputFields[i], listFields[i]);
				if (dayInput.value && monthInput.value && yearInput.value) {
					checkDateValidity(dayInput, dayListItem, monthInput, yearInput);
				}

				form.addEventListener("submit", function(event) {
					event.preventDefault();
					submitForm(event, dayInput,monthInput,yearInput);
				});

			})
		})
	}
})