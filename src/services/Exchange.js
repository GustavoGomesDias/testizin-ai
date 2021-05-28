export default class Exchange {
  convert(amount, rate) {
    return amount * rate;
  }

  returnSymbolCoin(coin) {
    return coin == 'USD' ? '$'
    :
    coin == 'BRL' ? 'R$'
    :
    '€'; 
  }
}