function newOrder(){
    let num = document.getElementById("num").value;
    let flav1 = document.getElementById("flavor1").value;
    let flav2 = document.getElementById("flavor2").value;
    let size = document.getElementById("size").value;

    let orders = document.getElementById("orders");
    
    //create a new row
    let newRow = orders.insertRow(-1)
    
    let newOrderNum = newRow.insertCell(0).appendChild(document.createTextNode(num));
    let newFlav1 = newRow.insertCell(1).appendChild(document.createTextNode(flav1));
    let newFlav2 = newRow.insertCell(2).appendChild(document.createTextNode(flav2));
    let newSize = newRow.insertCell(3).appendChild(document.createTextNode(size));
}

let orderButton = document.getElementById("order-button");
orderButton.addEventListener("click", (event) => {
    event.preventDefault();
    newOrder();
});
