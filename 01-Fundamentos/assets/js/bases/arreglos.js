
// const arr= new Array (10);
// const arr = [];
// console.log(arr);

let videosJuegos = ['Mario 3', 'Megaman', 'Chrono trigger'];
console.log({ videosJuegos });
console.log(videosJuegos[0]);

let arrDeCosas = [
    true,
    123,
    'Felipe',
    1 + 2,
    function () { },
    () => { },
    { a: 1 },
    ['x', 'Mega Man', 'Dr Light', 'Zero',
        [
            'Dr willy',
            'whoodMan',
        ]
    ],
];

console.log(arrDeCosas);

console.log(arrDeCosas[7][4][1]);