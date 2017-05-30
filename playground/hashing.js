const bcrypt = require('bcryptjs');

var password = '123abc!';
// bcrypt.genSalt(10, (error, salt) => {
//     bcrypt.hash(password, salt, (error, hash) => {
//         console.log(hash);
//     });
// });

var hashedPwd = '$2a$10$We9pJqQqnhlJiQ0.EmQHLuYKYtV.69m7QwHENqK/7GkVJlmCUPrFa';
bcrypt.compare(password, hashedPwd, (error, result) => {
  console.log(result);
})

// const { SHA256 } = require('crypto-js');

// const jwt = require('jsonwebtoken');

// var data = {
//     id: 10
// };

// var token = jwt.sign(data, '123abc');
// console.log(token);

// var decoded = jwt.verify(token, '123abc');
// console.log('decoded: ', decoded);



// var message = 'I am user number 1';
// var hash = SHA256(message).toString();
// console.log(`Message: ${message}`);
// console.log(`hash: ${hash}`);

// var data = {
//     id: 4
// };
// var token = {
//     data: data,
//     hash: SHA256(JSON.stringify(data) + 'someSecret').toString()
// };

// //man in the middle
// // token.data = 5;
// // token.hash = SHA256(JSON.stringify(token.data)).toString();

// var resultHash = SHA256(JSON.stringify(token.data) + 'someSecret').toString();
// if (resultHash === token.hash) {
//     console.log('data was not changed');
// }
// else {
//     console.log('Data was changed - dont trust');
// }