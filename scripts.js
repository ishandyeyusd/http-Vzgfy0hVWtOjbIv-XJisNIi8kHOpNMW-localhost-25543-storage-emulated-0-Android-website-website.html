let selectedValue = 0; // Variable to store selected Moogold value
let totalAmount = 0; // Variable to store the total amount

// Function to handle card selection
function selectCard(value) {
    selectedValue = value;
    console.log("Selected Value:", selectedValue); // Debugging line

    // Highlight the selected card
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => card.style.borderColor = '#ddd'); // Reset all cards
    event.target.closest('.card').style.borderColor = '#28a745'; // Highlight selected card
}

// Function to handle purchase
document.getElementById("buy-now").addEventListener("click", purchaseSelectedCard);

function purchaseSelectedCard() {
    const quantity = document.getElementById("quantity").value;
    console.log("Quantity:", quantity); // Debugging line

    if (selectedValue === 0) {
        alert("Please select a Moogold gift card.");
        return;
    }

    totalAmount = selectedValue * quantity;
    console.log("Total Amount:", totalAmount); // Debugging line

    document.getElementById("selected-gift-card").innerText = `Gift Card: ${selectedValue} Moogold`;
    document.getElementById("selected-quantity").innerText = `Quantity: ${quantity}`;
    document.getElementById("total-amount").innerText = `Total Amount: ₹${totalAmount}`;

    document.getElementById("summary").style.display = 'block';
}

// Function to close the summary card
function closeSummary() {
    document.getElementById("summary").style.display = 'none';
    selectedValue = 0; // Reset selection
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => card.style.borderColor = '#ddd'); // Reset all cards
}

// Payment function (replace with actual Razorpay integration)
function initiatePayment(amount) {
    alert(`Proceeding to payment of ₹${amount}`);
}