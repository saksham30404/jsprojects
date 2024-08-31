document.addEventListener('DOMContentLoaded', () => {
    // Sample product data and order data, should be fetched from a server or local storage
    const productData = [];
    const orderData = [];

    const productTable = document.getElementById('productTable').querySelector('tbody');
    const orderTable = document.getElementById('orderTable').querySelector('tbody');

    // Function to render products
    const renderProducts = () => {
        productTable.innerHTML = '';
        productData.forEach((product, index) => {
            const row = `<tr>
                <td>${product.name}</td>
                <td>${product.category}</td>
                <td>${product.quantity}</td>
                <td>₹${product.price}</td>
                <td>${product.description}</td>
                <td><img src="${product.image}" alt="${product.name} Image" width="50"></td>
                <td><button onclick="removeProduct(${index})">Remove</button></td>
            </tr>`;
            productTable.innerHTML += row;
        });
    };

    // Function to render orders
    const renderOrders = () => {
        orderTable.innerHTML = '';
        orderData.forEach((order, index) => {
            const row = `<tr>
                <td>${order.id}</td>
                <td>${order.buyerName}</td>
                <td>${order.product}</td>
                <td>${order.quantity}</td>
                <td>₹${order.totalPrice}</td>
                <td>${order.status}</td>
                <td><button onclick="markAsShipped(${index})">Mark as Shipped</button></td>
            </tr>`;
            orderTable.innerHTML += row;
        });
    };

    // Function to add a new product
    const addProduct = (e) => {
        e.preventDefault();
        const productName = document.getElementById('productName').value;
        const productCategory = document.getElementById('productCategory').value;
        const productQuantity = document.getElementById('productQuantity').value;
        const pricePerKg = document.getElementById('pricePerKg').value;
        const productDescription = document.getElementById('productDescription').value;
        const productImage = document.getElementById('productImage').files[0] ? URL.createObjectURL(document.getElementById('productImage').files[0]) : '';

        const newProduct = {
            name: productName,
            category: productCategory,
            quantity: productQuantity,
            price: pricePerKg,
            description: productDescription,
            image: productImage
        };

        productData.push(newProduct);
        renderProducts();
    };

    // Function to remove a product
    const removeProduct = (index) => {
        productData.splice(index, 1);
        renderProducts();
    };

    // Function to mark order as shipped
    const markAsShipped = (index) => {
        orderData[index].status = 'Shipped';
        renderOrders();
    };

    // Attach event listeners
    document.getElementById('productListingForm').addEventListener('submit', addProduct);

    // Initial render
    renderProducts();
    renderOrders();
});
