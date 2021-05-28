import express from 'express';

class App {
  constructor() {
    this.app = express();
    this.routes();
  }

  routes() {
    console.log("Routes");
  }
}

export default new App().app;