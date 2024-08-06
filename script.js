const price = document.getElementById('price');
const quantity = document.getElementById('quantity');


const button = document.getElementById('button');

button.addEventListener('click', () => {
    const grandParent = document.getElementById('grandparent');
    grandParent.classList.add('show');

    if (price.value !== ""){
        
        if (price.value >= 100) {
            const discount = 20;

            const discountAmount = (discount/100) * price.value;
            const priceToPay = price.value - discountAmount;


            // const grandParent = document.getElementById('grandparent'); Called outside the if so it can be available globally

            const parent = document.createElement('tr');

            // const parent = document.getElementById('parent'); //to receive the output in dom

            
            

            const td = document.createElement('td');
            td.innerHTML = discount;
            parent.appendChild(td);

            const td1 = document.createElement('td');
            td1.innerHTML = priceToPay;
            parent.appendChild(td1);

            grandParent.appendChild(parent);

            price.value = "";

            
        
        } else if (price.value >= 50 && price.value < 100) {
            const discount = 10;

            const discountAmount = (discount/100) * price.value;
            const priceToPay = price.value - discountAmount;

            

            // const grandParent = document.getElementById('grandparent');

            const parent = document.createElement('tr');

            // const parent = document.getElementById('parent'); //to receive the output in dom

            
            

            const td = document.createElement('td');
            td.innerHTML = discount;
            parent.appendChild(td);

            const td1 = document.createElement('td');
            td1.innerHTML = priceToPay;
            parent.appendChild(td1);

            grandParent.appendChild(parent);

            price.value = "";


        } else {
            const discount = 0;

            const discountAmount = (discount/100) * price.value;
            const priceToPay = price.value - discountAmount;

            
            // const grandParent = document.getElementById('grandparent');

            const parent = document.createElement('tr');

            // const parent = document.getElementById('parent'); //to receive the output in dom

            
            

            const td = document.createElement('td');
            td.innerHTML = discount;
            parent.appendChild(td);

            const td1 = document.createElement('td');
            td1.innerHTML = priceToPay;
            parent.appendChild(td1);

            grandParent.appendChild(parent);

            price.value = "";
        }


        

    }
})