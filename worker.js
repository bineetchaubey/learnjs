// Listen for messages from the main thread
onmessage = function(event) {
    const data = event.data;
  
    if (data.type === 'start' && typeof data.value === 'number') {
      incrementAndCheckPrime(data.value); // Start with the received number
    } else {
      console.error('Invalid message received:', data);
    }
  };
  
  function incrementAndCheckPrime(startingNumber) {
    let currentNumber = startingNumber;
    
    while (true) {
      currentNumber++;
      postMessage({ type: 'status', text: `Checking ${currentNumber}...` });
      
      if (isPrime(currentNumber)) {
        console.log('result', currentNumber)
        postMessage({ type: 'result', number: currentNumber });
        break;
      }
    }
  }
  
  function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    
    let i = 5;
    while (i * i <= num) {
      if (num % i === 0 || num % (i + 2) === 0) return false;
      i += 6;
    }
    
    return true;
  }
  
