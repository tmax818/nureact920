const myPromise = new Promise((res, rej)=> {
    let num = Math.floor(Math.random() * 10)
    num > 5 ? res("you win") : rej("you loose")
})

myPromise.then(res => console.log(res)).catch(rej => console.log(rej))