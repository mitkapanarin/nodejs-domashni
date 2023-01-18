const http = require("http");
const url = require('url');

function calc(operation, n1, n2,) {
    let result;
    switch (operation) {
        case 'sobiranje':
            result = n1 + n2;
            break;
        case 'odzemanje':
            result = n1 - n2;
            break;
        case 'mnozhenje':
            result = n1 * n2;
            break;
        case 'delenje':
            result = n1 / n2;
            break;
        default:
            result = 'NEVALIDNA OPERACIJA';
            break;
    }
    return result;
};

const server = http.createServer((req, res) => {
    const q = req.url;
    // console.log(q);

    const qOperation = q.split('/')[1];
    const qNu1 = q.split('/')[2];
    const qNu2 = q.split('/')[3];

    const finalResult = calc(qOperation, Number(qNu1), Number(qNu2));
    res.write('Rezultatot e ' + finalResult);
    res.end();
});

server.listen(8080);

console.log('Server listening to port 8080');