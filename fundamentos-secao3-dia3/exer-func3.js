const trybeBankCustomers = ['Oliva', 'Nat', 'Gus'];

function addCustomer(customer) {
  if (typeof customer != 'string') {
    return 'O parâmetro passado deve ser do tipo string!';
  }
  
  trybeBankCustomers.push(customer);
  return 'Pessoa adicionada com sucesso!';
};

console.log(addCustomer(true)); // O parâmetro passado deve ser do tipo "string!"
console.log(addCustomer('Joaquim')); // Pessoa adicionada com sucesso!
console.log(trybeBankCustomers); // [ 'Oliva', 'Nat', 'Gus', 'Joaquim' ]
