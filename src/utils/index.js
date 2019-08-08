export const currencyFormatter = (amount, decimalCount = 0, decimal = ',', thousands = '.', symbol = '$') => {
  try {
    decimalCount = Math.abs(decimalCount);
    decimalCount = isNaN(decimalCount) ? 2 : decimalCount;

    const negativeSign = amount < 0 ? '-' : '';

    let i = parseInt((amount = Math.abs(Number(amount) || 0).toFixed(decimalCount))).toString();
    let j = i.length > 3 ? i.length % 3 : 0;

    return (
      symbol +
      ' ' +
      negativeSign +
      (j ? i.substr(0, j) + thousands : '') +
      i.substr(j).replace(/(\d{3})(?=\d)/g, '$1' + thousands) +
      (decimalCount
        ? decimal +
          Math.abs(amount - i)
            .toFixed(decimalCount)
            .slice(2)
        : '')
    );
  } catch (e) {
    console.log(e);
  }
};

export const currencyDecode = (amount) => {
  try {
    //Clear data
    amount = amount.replace('$', '');
    amount = amount.replace(/\./g, '');
    return amount;
  } catch (e) {
    console.log(e);
  }
};

export const rutFormatter = (value) => {
  var actual = value.replace(/^0+/, '');
  if (actual !== '' && actual.length >= 1) {
    var sinPuntos = actual.replace(/\./g, '');
    var actualLimpio = sinPuntos.replace(/-/g, '');
    var inicio = actualLimpio.substring(0, actualLimpio.length - 1);
    var rutPuntos = '';
    var i = 0;
    var j = 1;
    for (i = inicio.length - 1; i >= 0; i--) {
      var letra = inicio.charAt(i);
      rutPuntos = letra + rutPuntos;
      if (j % 3 === 0 && j <= inicio.length - 1) {
        rutPuntos = '.' + rutPuntos;
      }
      j++;
    }
    var dv = actualLimpio.substring(actualLimpio.length - 1);
    rutPuntos = rutPuntos + '-' + dv;
  }
  return rutPuntos;
};
