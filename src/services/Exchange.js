export default new class ExchangeModel {
  convert(amount, rate) {
    return parseFloat(amount) * parseFloat(rate);
  }

  returnSymbolCoin(coin) {
    switch(coin){
      case('USD'):
        return '$';
      case('BRL'):
        return 'R$';
      case('EU'):
        return '€';
      default:
        return undefined;
    }
  }
}