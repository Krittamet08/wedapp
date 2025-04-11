export default function Basic() {
     

    const objA = {
        age: 23,
    }

    function foo() {
        console.log("Hello World")
        return "Hello World"
    }

     /// const => constant => Cannot be changed anymore
    const person = {
        name: "Krittamet",
        surname: "Fonghoy",
        myObject: objA,
        myArray: [1, 2, 3],
        myFoo: foo,
        myBar: function () {
            return "Bar"
        },
        myBaz: () => "Baz"
    }
    person.name = "Donald"
    person.surname = "Trump" 
    return (<div> {person.name} {person.surname}
        <br />
        {person.myObject.age}
        {person.myArray[2]}
        {JSON.stringify(person)} 
        {person.myFoo()}
        {person.myBar()}
        {person.myBaz()}
    </div>)
}