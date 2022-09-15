//Global access to DOM Elements
const billInput = document.getElementById('billTotalInput')
const tipInput = document.getElementById('tipInput')
const numberOfPeopleDiv = document.getElementById('numberOfPeople')
const perPersonTotalDiv = document.getElementById('perPersonTotal')

let numberOfPeople = Number(numberOfPeopleDiv.innerText)

// Calculating the total bill per person 
const calculateBill = () => {
 
  const bill = Number(billInput.value)
  const tipPercent = Number(tipInput.value) / 100
  const tipAmount = bill * tipPercent
  const total = tipAmount + bill
  const perPersonTotal = total / numberOfPeople

  perPersonTotalDiv.innerText = `$${perPersonTotal.toFixed(2)}`
}

// Incrementing number of people
const increasePeople = () => {
  numberOfPeople += 1
  numberOfPeopleDiv.innerText = numberOfPeople

  calculateBill()
}

// Decrementing number of people
const decreasePeople = () => {
  
  if (numberOfPeople <= 1) {
    return
  }
  
  numberOfPeople -= 1
  numberOfPeopleDiv.innerText = numberOfPeople

  calculateBill()
}