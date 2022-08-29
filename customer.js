const customers = [
    {
        id: 20,
        name: 'Will Smith',
        Email: 'jd@gmail.com',
        phonenumber: 08043568788,
        accountno: 3456789876
    },
    {
        id: 50,
        name: 'Lolly Wood',
        Email: 'jd@gmail.com',
        phonenumber: 08043568788,
        accountno: 3456789876,
    },
    {
        id: 70,
        name: 'Jack Bauer',
        Email: 'jb@gmail.com',
        phonenumber: 08043568788,
        accountno: 3456789876,
    },
    {
        id: 100,
        name: 'Larry Jendol',
        Email: 'LJ@gmail.com',
        phonenumber: 08043568788,
        accountno: 3456789876,
    },
    {
        id: 150,
        name: 'John Paul',
        Email: 'JP@gmail.com',
        phonenumber: 08043568788,
        accountno: 3456789876,
    },
    {
        id: 200,
        name: 'Malcom X',
        Email: 'MX@gmail.com',
        phonenumber: 08043568788,
        accountno: 3456789876,
    },
]


let container = document.querySelector('#container');
function renderListAscending() {
    let html = '';
    for (let i = 0; i < customers.length; i++) {
        html += `<tr>
        <td>${i + 1}</td>
        <td>${customers[i].name}</td>
        <td>${customers[i].Email}</td>
        <td>${customers[i].phonenumber}</td>
        <td>${customers[i].accountno}</td>
        <td>
            <button class="btn btn-secondary">Purchase History</button>
            <button class="btn btn-primary">Complain</button>
        </td>
    </tr>`
    };
    container.innerHTML = html;
}

window.addEventListener('load', function () {
    renderListAscending();
})


function renderListDescending() {
    let html = '';
    for (let i = customers.length - 1; i > -1; i--) {
        html += `<tr>
        <td>${i + 1}</td>
        <td>${customers[i].name}</td>
        <td>${customers[i].Email}</td>
        <td>${customers[i].phonenumber}</td>
        <td>${customers[i].accountno}</td>
        <td>
            <button type="button" class="btn btn-secondary">Purchase History</button>
            <button type="button" class="btn btn-primary">Complain</button>
        </td>
    </tr>`
    };
    container.innerHTML = html;
}



// function descending(){
//     console.log(customers);
//     const a = customers.reverse();
//     console.log(a);
// }