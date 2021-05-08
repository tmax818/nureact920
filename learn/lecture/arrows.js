////

// function hello(name) {
//     return { studentName: name };


const hello = (name) => {
    return { studentName: name };
}

const goodbye = name => {
    console.log(`Goodbye ${name}`)
}

console.log(hello("Sean"))
goodbye("joe")

