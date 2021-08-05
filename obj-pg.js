//represent in an object "John", "Doe", 36, "1234 Park St".

const person = {
    firstName: "John",
    lastName: "Doe", 
    age: 36,
    address: "1234 Park St"
}

person.firstName = "Vin"
person.address = "321 Main st"

 console.log(person)

const addressBook = [
    { firstName: "Moe", lastName: "Doe", age: 31, street: "1234 Parl St" },
  { firstName: "Larry", lastName: "Doe", age: 36, street: "1234 Spark St" },
  { firstName: "Curly", lastName: "Doe", age: 36, street: "1239 Park St" },
  { firstName: "Jane", lastName: "Doe", age: 32, street: "1239 Spark St" },
  { firstName: "Emma", lastName: "Doe", age: 34, street: "1235 Spark St" },
  { firstName: "Elizabeth", lastName: "Doe", age: 36, street: "1234 Park St" },
  { firstName: "Elinor", lastName: "Doe", age: 35, street: "1230 Park St" },
  { firstName: "Mary", lastName: "Doe", age: 31, street: "1231 Park St" },
  { firstName: "Darcy", lastName: "Doe", age: 32, street: "1224 Park St" },
  { firstName: "Grey", lastName: "Doe", age: 34, street: "1214 Park St" },
  { firstName: "Lydia", lastName: "Doe", age: 30, street: "1294 Park St" },
  { firstName: "Harriet", lastName: "Doe", age: 32, street: "1324 Park St" }
]



delete addressBook[7].address

console.log(addressBook)