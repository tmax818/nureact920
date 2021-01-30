////

// function hello(name) {
//     return { studentName: name };
// }

const hello = name => {
    console.log({ studentName: name })
    return { studentName: name }
}

const value = hello("Jacob")

