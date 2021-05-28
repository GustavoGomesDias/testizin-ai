export default new class ExchangeModel {
  convert(amount, rate) {
    return parseFloat(amount) * parseFloat(rate);
  }

  returnSymbolCoin(coin) {
    return coin == 'USD' ? '$'
      :
      coin == 'BRL' ? 'R$'
      :
      coin == 'EU'? '€' : undefined; 
  }
}