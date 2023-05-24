// if else

const llevaParaguas = (clima) => {
  if (clima === "lluvioso") {
    return "si llevalo";
  } else if (clima === "nublado") {
    return " llevalo por las dudas";
  } else {
    return "no, no hace falta";
  }
};

let loLlevo = llevaParaguas("nublado");
console.log(loLlevo);
