
const name = "Laptop";
const basePrice = 50000;
const discountPercent = 10;
const taxRate = 18;
const stockStatus = "in_stock";

function calculateDiscountedPrice(price, discount) {
    return price - (price * discount / 100);
}

function calculateTax(price, taxRate) {
    return price * taxRate / 100;
}

function calculateFinalPrice(price, discount, taxRate) {
    const discountedPrice = calculateDiscountedPrice(price, discount);
    const tax = calculateTax(discountedPrice, taxRate);
    return discountedPrice + tax;
}

function isFreeShipping(finalPrice) {
    if (finalPrice >= 500) {
        return "Free Shipping";
    } else {
        return "Shipping: Rs.49";
    }
}

function getStockMessage(status) {
    if (status === "in_stock") {
        return "In Stock";
    } else if (status === "limited") {
        return "Limited Stock";
    } else if (status === "out_of_stock") {
        return "Out of Stock";
    }
}

const discountedPrice = calculateDiscountedPrice(basePrice, discountPercent);
const taxAmount = calculateTax(discountedPrice, taxRate);
const finalPrice = calculateFinalPrice(basePrice, discountPercent, taxRate);
const shipping = isFreeShipping(finalPrice);
const stockMessage = getStockMessage(stockStatus);

console.log("Product Name:", name);
console.log("Base Price: Rs.", basePrice);
console.log("Discounted Price: Rs.", discountedPrice);
console.log("Tax Amount: Rs.", taxAmount);
console.log("Final Price: Rs.", finalPrice);
console.log("Shipping:", shipping);
console.log("Stock Status:", stockMessage);