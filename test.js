function useState() {
  let value = "Super";

  const change = (newValue) => {
    value = newValue;
    // reapitn
  };

  return [value, change];
}

const [first, setFirst] = useState();

console.log(first);
setFirst("Pauli");
console.log(first);
