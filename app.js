import express from 'express';
import Exchange from './src/routes/Exchange.js';

class App {
  constructor() {
    this.app = express();
    this.routes();
  }

  routes() {
    this.app.use('/', Exchange);
  }
}

export default new App().app;