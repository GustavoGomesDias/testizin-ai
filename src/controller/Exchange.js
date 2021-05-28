import Exchange from "../services/Exchange.js";

export default new class ExchangeController {
  convert(req, res) {
    const { amount, _, to, rate } = req.params;
   
    const symbolCoin = Exchange.returnSymbolCoin(to);

    if(symbolCoin === undefined) {
      return res
        .json({ error: 'Não consgeuimos detectar a moeda de conversão' })
        .status(400);
    }

    const resultConvert = Exchange.convert(amount, rate);
    
    const obj = {
      valorConvertido: resultConvert,
      simboloMoeda: symbolCoin
    }

    return res.json(obj).status(200);
  }
}