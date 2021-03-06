export const get = uri =>
new Promise(resolve => {
let response;
switch (uri) {
case '/products':
response = [
{
id: 1,
name: 'Mastering Docker - Second Edition',
author: 'James Cameron',
img:'./cat.png',
price: 39.58,
},
];
break;
default:
return null;
}
setTimeout(() => resolve(response), 1000);
return null;
});
export const post = (uri, data) =>
new Promise((resolve, reject) => {
let response;
switch (uri) {
case '/login':
if (data.email === 'test@test.com' && data.password === 'test')
{
response = {
email: 'test@test.com',
name: 'Test Testson',
address: '123 test street',
postcode: '2761XZ',
city: 'Testington',
};
} else {
setTimeout(() => reject('Unauthorised'), 1000);
return null;
}
break;
case '/pay':
if (data.card.cvc === '123') {
response = true;
} else {
setTimeout(() => reject('Payment not authorised'), 1000);
return null;
}
break;


case '/register':
response = data;
break;
default:
return null;
}
setTimeout(() => resolve(response), 1000);

return null;
});
export const put = () => {};