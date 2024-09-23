'use strict'

let rand_num1
let rand_num2
let correctCount = 0
let incorrectCount = 0

const getRandomIntNumberInRange = (min,max) => {
    return Math.floor(Math.random() * max) + min;
}

const randomizeNumbers = () => {
    rand_num1 = getRandomIntNumberInRange(1,10)
    rand_num2 = getRandomIntNumberInRange(1,10)
    document.querySelector('#num1').innerHTML = rand_num1
    document.querySelector('#num2').innerHTML = rand_num2
}

const updateCounts = () => {
    document.querySelector('#correctCount').textContent = correctCount
    document.querySelector('#incorrectCount').textContent = incorrectCount
}

addEventListener("DOMContentLoaded", () => {
    randomizeNumbers()
    updateCounts()
})


document.querySelector('button').addEventListener('click', () => {
    const answer = Number(document.querySelector('input').value)
    const correctAnswer = rand_num1 + rand_num2
    if (answer === correctAnswer) {
        correctCount++
    } else {
        incorrectCount++
    }

    updateCounts()
    randomizeNumbers()
    document.querySelector('input').value=''
})