let a = 3;
let b = 5;
let c;
// alert( "description of alerted_value: " + alerted_value );
let value = 'let a = 3; \n';
value += 'let b = 5;\n';
value += 'let c;\n';
value += '-----------\n';
// a + b
value += 'a + b = ' + (a+b) + "\n";
// a - b
value += 'a - b = ' + (a-b) + "\n";
// a * b
value += 'a * b = ' + (a*b) + "\n";
// a / b
value += 'a / b = ' + (a/b) + "\n";
// a % b
value += 'a % b = ' + (a%b) + "\n";
// a += b
value += '(a += b): '+ (a+=b) + "\n";
// a -= b
value += '(a -= b): '+(a-=b) + "\n";
// a *= b
value += '(a *= b):' + (a*=b) + "\n";
// a /= b
value += '(a /= b):' + (a/=b) + "\n";
// a %= b
value += '(a %= b):' + (a %=b) + "\n";
// a == b
value += '(a == b):' + (a==b) + "\n";
// a != b
value += '(a != b):' + (a!=b) + "\n";
// a > b
value += '(a > b):' + (a>b) + "\n";
// a < b
value += '(a < b):' + (a<b) + "\n";
// !a && !c 
value += '(!a && !c ):' + (!a && !c ) + "\n";
// !a || !c 
value += '(!a || !c ):' + (!a || !c ) + "\n";
alert(value);

let first_name = 'Daniela';
let last_name = 'Mercado';
let email = 'merc0208@algonquincollege.com';
let output;
//"My name is Your-first-name Your-last-name. You can contact me at your-email@mail.com.";
output = 'My name is ' + first_name + ' ' + last_name + '.' + ' You can contact me at '+ email +'.';

alert(output);


