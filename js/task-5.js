const checkForSpam = function(message) {
  const messageLowerCase = message.toLowerCase();
  // const includesSpam = messageLowerCase.includes('spam');
  // const includesSale =messageLowerCase.includes('sale');
    
  if (messageLowerCase.includes('spam') || messageLowerCase.includes('sale')) {
    return true;
  } else {
    return false;
  }

};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true

// const ret = ('[SPAMd] How to earn fast  sale money?').toLowerCase();
// console.log(ret);

// console.log(ret.includes('spam' || 'sale'));