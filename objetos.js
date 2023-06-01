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
        return this.clientes[i]
      }
    }
  },
  deposito : function (nombre, dinero) {
    for(let i = 0; i < this.clientes.length; i++){
        if(this.clientes[i].tipoDeCuenta === nombre){
            this.clientes[i].saldoEnPesos += dinero
            return this.clientes[i] + "Deposito correcto"
        }
    }
  }

}

let clienteEncontrado = banco.consultarCliente("Ramon Connell")
console.log(clienteEncontrado);

let nuevoSaldo = banco.deposito("Ramon Connell", 5000)
console.log(nuevoSaldo);