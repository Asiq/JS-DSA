function emojiMath(equation) {
    const emojiValues = {
    '🍎': 1, '🍌': 2, '🍇': 3,
    '🍊': 4, '🍓': 5, '🍍': 6
    };
    
    const [left, operator, right] = equation.split(' ');
    const x = emojiValues[left];
    const y = emojiValues[right];
    
    switch(operator) {
    case '+': return x + y;
    case '-': return x - y;
    case '*': return x * y;
    case '/': return x / y;
    }
   }
   
   console.log(emojiMath('🍓 * 🍌'));