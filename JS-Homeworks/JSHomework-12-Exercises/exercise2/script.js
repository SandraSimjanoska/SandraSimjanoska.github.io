// Create an Expense Tracker app to manage daily expenses. Each expense should include the following fields:

// Description: A text input for the name/details.
// Amount: A numeric input for the amount spent.
// Category: A dropdown to choose the category (e.g., Food, Travel, Shopping, Bills).
// Create “Add Expense” button for adding new expense to a list. Once added, each expense should be displayed in a table bellow the form.
// Use constructor function for the objects creation.
// Extend the previous implementation with these features:

// Display total expenses summary (sum of all expenses) at the bottom of the table.
// Add column to the table called Action. It should contain Delete option (text/icon/button) for every record (row).
// When 'Delete' is clicked, the record should be marked as deleted and removed from the table.
// HINT: Introduce new property to the Expense object. Also don't forget to update the sum of the expenses :)

let total = 0;

document.getElementById('addExpense').addEventListener('click', function () {
  let description = document.getElementById('description').value;
  let amount = parseFloat(document.getElementById('amount').value);
  let category = document.getElementById('category').value;

  if (!description || isNaN(amount) || amount <= 0) {
    alert('Please enter a valid description, amount, and category.');
    return;
  }

  function Expense(description, amount, category) {
    this.description = description;
    this.amount = amount;
    this.category = category;
    this.deleted = false;
  }

  let expense = new Expense(description, amount, category);

  let expenseList = document.getElementById('expenseList');
  let tr = document.createElement('tr');

  tr.innerHTML = `
    <td>${expense.description}</td>
    <td>$${expense.amount}</td>
    <td>${expense.category}</td>
    <td><button class="delete">Delete</button></td>
  `;

  let deleteButton = tr.querySelector('.delete');
  deleteButton.addEventListener('click', function () {
    if (!expense.deleted) {
      expense.deleted = true;
      total -= expense.amount; 
      document.getElementById('total').textContent = total;
      tr.style.textDecoration = 'line-through'; 
    }
  });

  expenseList.appendChild(tr);
  
  total += expense.amount;
  document.getElementById('total').textContent = total;

  document.getElementById('description').value = '';
  document.getElementById('amount').value = '';
});
