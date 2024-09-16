// Function to parse URL parameters and calculate sum
function getQueryParams() {
    const params = new URLSearchParams(window.location.search);
    const num1 = parseFloat(params.get('num1'));
    const num2 = parseFloat(params.get('num2'));
    
    if (!isNaN(num1) && !isNaN(num2)) {
        const sum = num1 + num2;
        
        // Return the result as JSON
        const result = {
            num1: num1,
            num2: num2,
            sum: sum
        };
        
        // Display JSON as text in the body (instead of innerHTML)
        document.body.innerText = JSON.stringify(result);
    } else {
        const error = { error: "برجاء إدخال قيم صحيحة" };
        document.body.innerText = JSON.stringify(error);
    }
}

// Call the function to calculate the sum
getQueryParams();
