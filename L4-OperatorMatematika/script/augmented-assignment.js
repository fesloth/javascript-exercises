let result = 1 + 2;
document.writeln ("<p>1 + 2 = " + result + "</p>")
let originalResult = result;

result += 10;
document.writeln ("<p>" + originalResult + " + 10 = " + result + "</p>")
originalResult = result;

result -= 4;
document.writeln ("<p>" + originalResult + " - 4 = " + result + "</p>")
originalResult = result;

result *= 2;
document.writeln ("<p>" + originalResult + " x 2 = " + result + "</p>")
originalResult = result;

result /= 9;
document.writeln ("<p>" + originalResult + " / 9 = " + result + "</p>")
originalResult = result;