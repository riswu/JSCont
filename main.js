// Continuation Monad (a -> r) -> r
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

  get runCont() {
    return this.c;
  }
}

// Continuation Monad - return
export function returnCont(a) {
  return k => k(a);
}

// Continuation Monad - bind
export function bindCont(c, f) {
  return k => c(a => f(a)(k));
}
