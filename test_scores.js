"use strict";
const $ = selector => document.querySelector(selector);

const names = ["Ben", "Joel", "Judy", "Anne"];
const scores = [88, 98, 77, 88];

document.addEventListener("DOMContentLoaded", () => {
	// add event handlers
	$("#add").addEventListener("click", addScore);
	$("#display_results").addEventListener("click", displayResults);
	$("#display_scores").addEventListener("click", displayScores);

	// set initial focus to name field
	$("#name").focus();
});

function addScore() {
	const nameInput = $("#name");
	const scoreInput = $("#score");
	const name = nameInput.value.trim();
	const score = parseInt(scoreInput.value, 10);

	// clear previous error messages
	clearErrorMessages();

	// validate name, score
	if (name === "") {
		displayError("Please enter a name", nameInput.nextElementSibling);
		nameInput.focus();
		return;
	}

	if (isNaN(score) || score < 0 || score > 100) {
		displayError("Score must be between 0 and 100", scoreInput.nextElementSibling);
		scoreInput.focus();
		return;
	}

	// add name, score to arrays
	names.push(name);
	scores.push(score);

	// display success message
	displaySuccess(`Score for ${name} added successfully!`);

	// clear input fields
	nameInput.value = "";
	scoreInput.value = "";

	// set focus back to name field
	nameInput.focus();
}

function displayResults() {
	const resultsDiv = $("#results");

	// clear previous results
	resultsDiv.innerHTML = "";

	// calculate average, highest score
	const averageScore = calculateAverage(scores);
	const highestScore = Math.max(...scores);

	// display results
	const heading = document.createElement("h2");
	heading.textContent = "Results";
	resultsDiv.appendChild(heading);

	const averageParagraph = document.createElement("p");
	averageParagraph.textContent = `Average Score = ${averageScore.toFixed(2)}`;
	resultsDiv.appendChild(averageParagraph);

	const highestParagraph = document.createElement("p");
	highestParagraph.textContent = `High Score = ${highestScore}`;
	resultsDiv.appendChild(highestParagraph);
}

function displayScores() {
	const scoresDiv = $("#scores");

	// clear previous scores
	scoresDiv.innerHTML = "";

	// display scores
	for (let i = 0; i < names.length; i++) {
		const label = document.createElement("label");
		label.textContent = `${names[i]}: ${scores[i]}`;
		scoresDiv.appendChild(label);

		// Add a line break
		scoresDiv.appendChild(document.createElement("br"));
	}
}

function calculateAverage(array) {
	const sum = array.reduce((acc, value) => acc + value, 0);
	return sum / array.length;
}

function clearErrorMessages() {
	const errorSpans = document.querySelectorAll("span");
	errorSpans.forEach(span => (span.textContent = ""));
}

function displayError(message, targetSpan) {
	targetSpan.textContent = message;
}

function displaySuccess(message) {
	const successParagraph = document.createElement("p");
	successParagraph.textContent = message;
	$("#results").appendChild(successParagraph);
}