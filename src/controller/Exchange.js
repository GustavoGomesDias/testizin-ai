import Exchange from "../services/Exchange.js";

export default new class ExchangeController {
  convert(req, res) {
    const { amont, _, to, rate } = req.params;

    const resultConvert = Exchange.convert(amont, rate);
    const symbolCoin = Exchange.returnSymbolCoin(to);

    const obj = {
      valorConvertido: resultConvert,
      simboloMoeda: symbolCoin
    }

    return res.json(obj).status(200);
  }
}