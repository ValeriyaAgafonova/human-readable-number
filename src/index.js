module.exports = function toReadable (number) {
    let res = ' ';
let oneNumbers = ['one', 'two','three', 'four', 'five', 'six', 'seven', 'eight','nine'];
let twoNumbers = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
let oneTwoNumbers = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen','sixteen', 'seventeen', 'eighteen', 'nineteen']
if (number === 0){
    return 'zero';
}

if (number >= 100){
    for (let i = 0; i < 10; i++){
        if (i == Math.floor(number / 100) && number % 100 == 0){
            res = oneNumbers[i - 1] + ' hundred';
            return res;
        }
    if (i == Math.floor(number / 100)){
res = oneNumbers[i - 1] + ' hundred';
continue;
    }  
   
}
number = number % 100;
}

if (number < 100 && number >= 20){
for (let i = 0; i < 10; i++){
    if (i == Math.floor(number / 10) && number %10 !== 0){
        res +=(` ${twoNumbers[i-2]}`);
        res = res.trim();
        continue
    }
    if (i == Math.floor(number / 10) && number % 10 == 0){
        res +=(` ${twoNumbers[i-2]}`);
        res = res.trim();
        return res;
    }
}
number = number % 10;
}

 if (number >=10 && number < 20){
     for (let i = 0; i < 11; i++){
         if (i == Math.floor(number % 10)){
             res += (` ${oneTwoNumbers[i]}`);
             res = res.trim();
             return res;
         }
     }
 }

 if (number < 10){
     for (let i = 0; i < 10; i++){
         if (i == number){
             res += (` ${oneNumbers[i-1]}`)
             res = res.trim();
             return res;
         }
     }
 }
}

