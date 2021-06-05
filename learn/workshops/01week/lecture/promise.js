const myPromise = new Promise((res, rej) => {
    let test = true
    if (test) {
        res("here's your burger")
    }
    rej("sorry")
})

myPromise.then(data => console.log(data)).catch(err => console.log(err)).finally()

numbers = [1, 2, 3]

numbers.map(number => console.log(number))

console.log("I am after the promise")