"use strict";

export default class Cont {
  constructor(c) {
    this.c = c;
  }

  static return(a) {
    return new Cont(k => k(a));
  }

  bind(f) {
    return new Cont(k => this.c(a => f(a).runCont(k)));
  }

  then(f) {
    return this.bind(f);
  }

  flatMap(f) {
    return this.bind(f);
  }

  get runCont() {
    return this.c;
  }
}
