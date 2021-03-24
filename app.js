 function squareDigits(num) {
      return Array.from(num.toString(), v => v * v).join('');
    }
   console.log(squareDigits(9119));