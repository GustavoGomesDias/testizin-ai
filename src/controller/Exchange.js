import Exchange from "../services/Exchange.js";

export default new class ExchangeController {
  convert(req, res) {
    const { amount, _, to, rate } = req.params;
   
    const resultConvert = Exchange.convert(amount, rate);
    const symbolCoin = Exchange.returnSymbolCoin(to);

    const obj = {
      valorConvertido: resultConvert,
      simboloMoeda: symbolCoin
    }

    return symbolCoin == undefined ? 
      res.json({ error: 'Não consgeuimos detectar a moeda de conversão' }).status(400)
      :
      res.json(obj).status(200);
  }
}