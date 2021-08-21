function productCost(click, price, memory, storage, delivery, total) {
    // handle best price
    const bestPrice = document.getElementById(price);
    const bestPriceText = bestPrice.innerText;
    const bestPriceAmount = parseInt(bestPriceText);
    // grap click
    document.getElementById(click);
    // handle memory cost
    const memoryCost = document.getElementById(memory);
    if (click == 'short-memory') {
        memoryCost.innerText = 0;
    }
    else if (click == 'large-memory') {
        memoryCost.innerText = 180;
    }
    const memoryCostAmount = parseInt(memoryCost.innerText);

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
    if (click == 'free-delivery') {
        deliveryCost.innerText = 0;
    }
    else if (click == 'charged-delivery') {
        deliveryCost.innerText = 20;
    }
    const deliveryCostText = deliveryCost.innerText;
    const deliveryCostAmount = parseInt(deliveryCostText);

    // handle total Price 
    const previousTotalPrice = document.getElementById(total);
    const totalPrice = bestPriceAmount + memoryCostAmount + storageCostAmount + deliveryCostAmount;
    previousTotalPrice.innerText = totalPrice;

    // handle discount
    const beforeDiscountTotal = document.getElementById('discounted-total');
    const beforeDiscountAmount = bestPriceAmount + memoryCostAmount + storageCostAmount + deliveryCostAmount;
    beforeDiscountTotal.innerText = beforeDiscountAmount;
    return previousTotalPrice.innerText;
};

// memory click event
document.getElementById('short-memory').addEventListener('click', function () {
    productCost('short-memory', 'best-price', 'memory-cost', 'storage-cost', 'delivery-cost', 'total-price');
});

document.getElementById('large-memory').addEventListener('click', function () {
    productCost('large-memory', 'best-price', 'memory-cost', 'storage-cost', 'delivery-cost', 'total-price');
});

// storage click event
document.getElementById('short-storage').addEventListener('click', function () {
    productCost('short-storage', 'best-price', 'memory-cost', 'storage-cost', 'delivery-cost', 'total-price');
});

document.getElementById('medium-storage').addEventListener('click', function () {
    productCost('medium-storage', 'best-price', 'memory-cost', 'storage-cost', 'delivery-cost', 'total-price');
});

document.getElementById('large-storage').addEventListener('click', function () {
    productCost('large-storage', 'best-price', 'memory-cost', 'storage-cost', 'delivery-cost', 'total-price');
});

// delivery click event
document.getElementById('free-delivery').addEventListener('click', function () {
    productCost('free-delivery', 'best-price', 'memory-cost', 'storage-cost', 'delivery-cost', 'total-price');
});

document.getElementById('charged-delivery').addEventListener('click', function () {
    productCost('charged-delivery', 'best-price', 'memory-cost', 'storage-cost', 'delivery-cost', 'total-price');
});


// handle apply button
document.getElementById('promo-code').addEventListener('keyup', function (event) {
    const applyBtn = document.getElementById('apply-button');
    if (event.target.value == 'stevekaku') {
        applyBtn.removeAttribute('disabled');
    }
    else {
        applyBtn.setAttribute('disabled', true);
    }
});

// dicsount counting
document.getElementById('apply-button').addEventListener('click', function () {
    const promoCodeField = document.getElementById('promo-code');
    const promoCodeText = promoCodeField.value;
    // handle promo code matching
    if (promoCodeText.toLowerCase() == 'stevekaku') {
        const discountedTotal = document.getElementById('discounted-total');
        const discountedTotalText = discountedTotal.innerText;
        const discountedTotalAmount = parseFloat(discountedTotalText);
        // discount calculation
        const discount = discountedTotalAmount * (20 / 100);
        const afterdiscountAmount = discountedTotalAmount - discount;
        const afterDiscountTotal = document.getElementById('discounted-total');
        afterDiscountTotal.innerText = afterdiscountAmount;
    }
    promoCodeField.value = '';
});