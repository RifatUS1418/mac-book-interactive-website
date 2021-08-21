function productCost(price, memory, click, storage, delivery, total) {
    const bestPrice = document.getElementById(price);
    const bestPriceText = bestPrice.innerText;
    const bestPriceAmount = parseInt(bestPriceText);
    // handle memory cost
    document.getElementById(click);
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
    return afterDiscountTotal.innerText;
}



const shortMemroy = document.getElementById('short-memory').addEventListener('click', function () {
    productCost('best-price', 'memory-cost', 'short-memory', 'storage-cost', 'delivery-cost', 'total-price');

})

const largeMemory = document.getElementById('large-memory').addEventListener('click', function () {
    productCost('best-price', 'memory-cost', 'large-memory', 'storage-cost', 'delivery-cost', 'total-price');

})


const shortStorage = document.getElementById('short-storage').addEventListener('click', function () {
    productCost('best-price', 'memory-cost', 'short-storage', 'storage-cost', 'delivery-cost', 'total-price');

})
const mediumStorage = document.getElementById('medium-storage').addEventListener('click', function () {
    productCost('best-price', 'memory-cost', 'medium-storage', 'storage-cost', 'delivery-cost', 'total-price');

})
const largeSotrage = document.getElementById('large-storage').addEventListener('click', function () {
    productCost('best-price', 'memory-cost', 'large-storage', 'storage-cost', 'delivery-cost', 'total-price');

})


const freeDelivery = document.getElementById('free-delivery').addEventListener('click', function () {
    productCost('best-price', 'memory-cost', 'free-delivery', 'storage-cost', 'delivery-cost', 'total-price');

})


const chargedMemory = document.getElementById('charged-delivery').addEventListener('click', function () {
    productCost('best-price', 'memory-cost', 'charged-delivery', 'storage-cost', 'delivery-cost', 'total-price');

})

document.getElementById('promo-code').addEventListener('keyup', function (event) {
    const applyBtn = document.getElementById('apply-button');
    if (event.target.value == 'stevekaku') {
        applyBtn.removeAttribute('disabled');
    }
    else {
        applyBtn.setAttribute('disabled', true);
    }
})

document.getElementById('apply-button').addEventListener('click', function () {
    const promoCodeField = document.getElementById('promo-code');
    const promoCodeText = promoCodeField.value;
    if (promoCodeText.toLowerCase() == 'stevekaku') {
        const discountedTotal = document.getElementById('discounted-total');
        const discountedTotalText = discountedTotal.innerText;
        const discountedTotalAmount = parseFloat(discountedTotalText);
        const discount = discountedTotalAmount * (20 / 100);
        const afterdiscountAmount = discountedTotalAmount - discount;
        const afterDiscountTotal = document.getElementById('discounted-total');
        afterDiscountTotal.innerText = afterdiscountAmount;
    }
    promoCodeField.value = '';
})

