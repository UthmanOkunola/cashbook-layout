const salesperson = [
    {
        id: 1,
        name: 'John Doe',
        Email: 'JD@gmail.com',
        phonenumber: 09063788944,
        accountno: 3456789876,
    },
    {
        id: 2,
        name: 'Jane Doe',
        Email: 'JD@gmail.com',
        phonenumber: 09045890390,
        accountno: 3456789876
    },
]
function renderToDOM(){
    let html = '';
    let container = document.querySelector('#container');
    for(let i = 0; i < salesperson.length; i++){
        html += `<tr>
        <td>${i + 1}</td>
        <td>${salesperson[i].name}</td>
        <td>${salesperson[i].Email}</td>
        <td>${salesperson[i].phonenumber}</td>
        <td>${salesperson[i].accountno}</td>
        <td>
        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" onclick="viewSales(${salesperson[i].id})">
        View Sales
      </button>
        <button type="button" class="btn btn-danger" onclick="suspend(this)">
        Suspend
      </button>
        </td>
    </tr>`
    };
container.innerHTML = html;
}

window.addEventListener('load', function(){
    renderToDOM();
})

function renderSales(sales){
let html = '';
let salesContainer = document.querySelector('#salesContainer');
let kgContainer = document.querySelector('#kgContainer');
let sum = 0;
for(let i = 0; i < sales.length; i++){
    html += `
    <tr>
    <td>${i + 1}</td>
    <td>${viewCustomer(sales[i].id)}</td>
    <td>${sales[i].kg}</td>
    </tr>
    `  
    sum += sales[i].kg;
};
kgContainer.innerHTML = sum;
salesContainer.innerHTML = html;
}
function viewCustomer(customerid){
    const customerIndex = customers.findIndex(function(customer){
        return customer.id == customerid;
    });
    console.log(customerIndex);
    return customers[customerIndex].name;
}
function suspend(element){
    console.log(element.parentNode.parentNode.classList.add('bg-danger'));
    // console.log(element.parentNode.parentNode.children[0]);
}



function viewSales(salespersonid){
    const salesPersonIndex = sales.findIndex(function(sale){
        return sale.id == salespersonid;
    });
    const salesperson = sales[salesPersonIndex];
    console.log(salesperson);
    renderSales(salesperson.sales);
}