console.log('hello');

var a = 2;
var b = 5;
var d = 2008
var e = 2001
function sum(num1, num2){
    return num1 + num2;
}

function check_even(num){
    if (num%2 == 0){
        if (num%3 == 0){
            console.log(String(num) + 'là số chia hết cho cả 2 và 3');
            return true;
        }
        else{
            console.log(String(num) + 'là số chia hết cho 2 mà ko chia hết cho 3');
            
        }
    
    }
    else{
        console.log(String(num) + 'là số chia hết cho 2 mà ko chia hết cho 3');
        return false; 
    }
}
function check_year(num){
    if (num%400 == 0){
        return true
    }
    if ((num%4 == 0) && (num%100 != 0))
        return true
}
c = sum(a,b);
console.log(sum(a,b));
console.log(check_even(c));
console.log(check_year(2001))
console.log(check_year(2008))
