import express from 'express';

class App {
  constructor() {
    this.app = express();
    this.routes = routes();
  }

  routes() {
    
  }
}

export default new App().app;