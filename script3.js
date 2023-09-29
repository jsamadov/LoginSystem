// user = []
// while (true) {
//     let input = prompt('Login')
//     if (user.includes(input)) {
//         user = user.filter((login) => login !== input)
//     }
//     else if (input === 'end') {
//         console.log(user.join(', '))
//         break
//     } else if (input === "") {
//         console.log(user.shift())
//     }
//     else {
//         user.push(input)
//         console.log(user.join(', '))
//     }
// }

let user = [];

while (true) {
    let input = prompt('Login system');

    if (input === null) {
        // stop login system(click cancel)
        break;
    } else if (user.includes(input)) {
        user = user.filter((login) => login !== input);
    } else if (input === 'end') {
        console.log(user.join(','));
        break;
    } else if (input === "") {
        console.log(user.shift());
    } else {
        user.push(input);
        console.log(user.join(','));
    }
}