//la lista de clientes.
let arrayCuentas = [
  {
    nroCuenta: 5486273622,
    tipoDeCuenta: "Cuenta Corriente",
    saldoEnPesos: 27771,
    titularCuenta: "Abigael Natte",
  },
  {
    nroCuenta: 1183971869,
    tipoDeCuenta: "Caja de Ahorro",
    saldoEnPesos: 8675,
    titularCuenta: "Ramon Connell",
  },
  {
    nroCuenta: 9582019689,
    tipoDeCuenta: "Caja de Ahorro",
    saldoEnPesos: 27363,
    titularCuenta: "Jarret Lafuente",
  },
  {
    nroCuenta: 1761924656,
    tipoDeCuenta: "Cuenta Corriente",
    saldoEnPesos: 32415,
    titularCuenta: "Ansel Ardley",
  },
  {
    nroCuenta: 7401971607,
    tipoDeCuenta: "Cuenta Unica",
    saldoEnPesos: 18789,
    titularCuenta: "Jacki Shurmer",
  },
];
// podes continuar tu codigo a partir de aca!

// 2 - 3

let banco = {
  clientes: arrayCuentas,
  consultarCliente: function (nombre) {
    for (let i = 0; i < this.clientes.length; i++) {
      if (this.clientes[i].titularCuenta === nombre) {
        return this.clientes[i];
      }
    }
    return "El cliente no fue encontrado";
  },
  deposito: function (nombre, dinero) {
    
    let clienteEncontrado = this.consultarCliente(nombre)
    clienteEncontrado.saldoEnPesos += dinero
    //console.log("Deposito realizado, su nuevo saldo es " + clienteEncontrado.saldoEnPesos);
    return ("Deposito realizado, su nuevo saldo es " + clienteEncontrado.saldoEnPesos)
  },
  extraccion : function(nombre, dinero){
    let clienteEncontrado = this.consultarCliente(nombre)
    clienteEncontrado.saldoEnPesos -= dinero
    return ("Extraccion realizada con exito " + clienteEncontrado.saldoEnPesos)

  }
}

let clienteEncontrado = banco.consultarCliente("Ramon Connell");
console.log(clienteEncontrado);

let transaccion = banco.deposito("Ramon Connell", 5000);
console.log(transaccion);

let extraccion = banco.extraccion("Ramon Connell", 10000);
console.log(extraccion);