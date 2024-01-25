const trybeBankCustomers = ['Oliva', 'Nat', 'Gus'];
const newBankCustomers = ['Patrick', 'Petter', 'Adriana'];

function addCustomer(customer) {
    if (typeof customer === 'string') {
        trybeBankCustomers.push(addCustomer(customer))
        return 'Cliente adicionado com sucesso'
    } else {
        return 'Parâmetro passado deve ser do tipo string';
    }
}

// conferir o que deu errado depois

console.log(addCustomer('Aurélio'));

function addCustomers(customers, newcustomers) {
    if (addCustomers) {
        
    } else {
        
    }
}