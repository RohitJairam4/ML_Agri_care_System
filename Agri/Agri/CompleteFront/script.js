// JavaScript for handling form submissions and fetching data

// Function to handle crop recommendation form submission
function recommendCrop(event) {
    event.preventDefault(); // Prevent default form submission
    const formData = new FormData(document.getElementById('cropForm'));

    fetch('/recommend-crop', {
        method: 'POST',
        body: formData,
    })
    .then(response => response.json())
    .then(data => {
        const resultDiv = document.getElementById('cropResult');
        resultDiv.textContent = `Recommended Crop: ${data['Recommended Crop']}`;
    })
    .catch(error => console.error('Error:', error));
}

// Function to handle fertilizer recommendation form submission
function recommendFertilizer(event) {
    event.preventDefault(); // Prevent default form submission
    const formData = new FormData(document.getElementById('fertilizerForm'));

    fetch('/recommend-fertilizer', {
        method: 'POST',
        body: formData,
    })
    .then(response => response.json())
    .then(data => {
        const resultDiv = document.getElementById('fertilizerResult');
        resultDiv.textContent = `Recommended Fertilizer: ${data['Recommended Fertilizer']}`;
    })
    .catch(error => console.error('Error:', error));
}

// Function to handle plant disease detection form submission
function detectDisease(event) {
    event.preventDefault(); // Prevent default form submission
    const formData = new FormData(document.getElementById('diseaseForm'));

    fetch('/detect-disease', {
        method: 'POST',
        body: formData,
    })
    .then(response => response.json())
    .then(data => {
        const resultDiv = document.getElementById('diseaseResult');
        resultDiv.textContent = `Predicted Disease: ${data['Predicted Disease']}`;
    })
    .catch(error => console.error('Error:', error));
}

// Attach event listeners to forms
document.getElementById('cropForm').addEventListener('submit', recommendCrop);
document.getElementById('fertilizerForm').addEventListener('submit', recommendFertilizer);
document.getElementById('diseaseForm').addEventListener('submit', detectDisease);
