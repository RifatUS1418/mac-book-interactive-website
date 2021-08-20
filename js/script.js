function productCost(price, memory, click, storage, delivery, total) {
    const bestPrice = document.getElementById(price);
    const bestPriceText = bestPrice.innerText;
    const bestPriceAmount = parseInt(bestPriceText);
    // handle memory cost
    // debugger;
    document.getElementById(click)
    const memoryCost = document.getElementById(memory);
    if (click == 'short-memory') {
        memoryCost.innerText = 0;
    }
    else if (click == 'large-memory') {
        memoryCost.innerText = 180;
    }
    const memoryCostAmount = parseInt(memoryCost.innerText);
    console.log(memoryCostAmount);

    // handle storage cost
    const storageCost = document.getElementById(storage);
    if (click == 'short-storage') {
        storageCost.innerText = 0;
    }
    else if (click == 'medium-storage') {
        storageCost.innerText = 100;
    }
    else if (click == 'large-storage') {
        storageCost.innerText = 180;
    }
    const storageCostText = storageCost.innerText;
    const storageCostAmount = parseInt(storageCostText);

    // handle delivery cost
    const deliveryCost = document.getElementById(delivery);
    const deliveryCostText = deliveryCost.innerText;
    const deliveryCostAmount = parseInt(deliveryCostText);

    // handle total Price 
    const previousTotalPrice = document.getElementById(total);
    console.log(previousTotalPrice.innerText);
    const totalPrice = bestPriceAmount + memoryCostAmount + storageCostAmount + deliveryCostAmount;
    previousTotalPrice.innerText = totalPrice;
}


document.getElementById('short-memory').addEventListener('click', function () {
    /*   const bestPrice = document.getElementById('best-price');
      const bestPriceText = bestPrice.innerText;
      const bestPriceAmount = parseInt(bestPriceText);
      // handle memory cost
      const memoryCost = document.getElementById('memory-cost');
      memoryCost.innerText = 0;
      const memoryCostAmount = parseInt(memoryCost.innerText);
      console.log(memoryCostAmount);
      // handle storage cost
      const storageCost = document.getElementById('storage-cost');
      const storageCostText = storageCost.innerText;
      const storageCostAmount = parseInt(storageCostText);
  
      // handle delivery cost
      const deliveryCost = document.getElementById('delivery-cost');
      const deliveryCostText = deliveryCost.innerText;
      const deliveryCostAmount = parseInt(deliveryCostText);
  
      // handle total Price 
      const previousTotalPrice = document.getElementById('total-price');
      const previousTotalPriceText = previousTotalPrice.innerText;
      const totalPrice = bestPriceAmount + memoryCostAmount + storageCostAmount + deliveryCostAmount
      previousTotalPrice.innerText = totalPrice; */
    productCost('best-price', 'memory-cost', 'short-memory', 'storage-cost', 'delivery-cost', 'total-price');
})

document.getElementById('large-memory').addEventListener('click', function () {
    /* const bestPrice = document.getElementById('best-price');
    const bestPriceText = bestPrice.innerText;
    const bestPriceAmount = parseInt(bestPriceText);

    const memoryCost = document.getElementById('memory-cost');
    memoryCost.innerText = 180;
    const memoryCostAmount = parseInt(memoryCost.innerText);
    console.log(memoryCostAmount);

    const storageCost = document.getElementById('storage-cost');
    const storageCostText = storageCost.innerText;
    const storageCostAmount = parseInt(storageCostText);
    // console.log(storageCostAmount);

    const deliveryCost = document.getElementById('delivery-cost');
    const deliveryCostText = deliveryCost.innerText;
    const deliveryCostAmount = parseInt(deliveryCostText);
    // console.log(deliveryCostAmount);

    const previousTotalPrice = document.getElementById('total-price');
    const previousTotalPriceText = previousTotalPrice.innerText;
    const totalPrice = bestPriceAmount + memoryCostAmount + storageCostAmount + deliveryCostAmount
    previousTotalPrice.innerText = totalPrice; */
    productCost('best-price', 'memory-cost', 'large-memory', 'storage-cost', 'delivery-cost', 'total-price');

})

document.getElementById('large-memory').addEventListener()