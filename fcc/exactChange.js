const cashMap = {
   PENNY: 0.01,
   NICKEL: 0.05,
   DIME: 0.1,
   QUARTER: 0.25,
   ONE: 1,
   FIVE: 5,
   TEN: 10,
   TWENTY: 20,
   'ONE HUNDRED': 100
};

const checkCashRegister = (price, cash, cid) => {
   const changeValue = cash - price;
   const change = [];
   const sumInRegister = cid.reduce((prev, cur) => {
      // console.log(prev[1], cur[1]);
      return ['SUM', prev[1] + cur[1]];
   }, ['SUM', 0])[1].toFixed(2);

   // while (change > 0) {
   cid.reduce((prev, cur) => {
      return prev
   }, []);
   // }

   console.log(change);
   console.log(sumInRegister);
   return change > sumInRegister ? 'Insufficient Funds' :
      change == sumInRegister ? 'Closed' :
      'other';
};


const cid = [
   ['PENNY', 1.01],
   ['NICKEL', 2.05],
   ['DIME', 3.10],
   ['QUARTER', 4.25],
   ['ONE', 90.00],
   ['FIVE', 55.00],
   ['TEN', 20.00],
   ['TWENTY', 60.00],
   ['ONE HUNDRED', 100.00]
];

const cid2 = [
   ['PENNY', 0.01],
   ['NICKEL', 0],
   ['DIME', 0],
   ['QUARTER', 0],
   ['ONE', 0],
   ['FIVE', 0],
   ['TEN', 0],
   ['TWENTY', 0],
   ['ONE HUNDRED', 0]
];
const cid3 = [
   ['PENNY', 0.01],
   ['NICKEL', 0],
   ['DIME', 0],
   ['QUARTER', 0],
   ['ONE', 1.00],
   ['FIVE', 0],
   ['TEN', 0],
   ['TWENTY', 0],
   ['ONE HUNDRED', 0]
];

const result = checkCashRegister(19.50, 20.00, cid3);
console.log(result);