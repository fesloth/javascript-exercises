let result = 1 + 2;
      document.writeln ("<p>1 + 2 = " + result + "</p>")
      let originalResult = result;

      result = result -1;
      document.writeln ("<p>" + originalResult + " - 1 = " + result + "</p>")
      originalResult = result;

      result = result * 2;
      document.writeln ("<p>" + originalResult + " x 2 = " + result + "</p>")
      originalResult = result;

      result = result * 10;
      document.writeln ("<p>" + originalResult + " x 10 = " + result + "</p>")
      originalResult = result;