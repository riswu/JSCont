const Cont = require('../build/main').default;
const assert = require('assert');

const add1 = a => {
  return new Cont(k => {
    setTimeout(() => {
      return k(a + 1);
    }, 500);
  });
}

const add2 = a => {
  return new Cont(k => {
    setTimeout(() => {
      return k(a + 2)
    }, 500);
  });
}

describe("Cont", () => {
  it("return", (done) => {
    const c = Cont.return(0);
    c.runCont(a => {
      assert.equal(a, 0);
      done();
    });
  });

  it("bind", (done) => {
    const c = new Cont(k => k(0)).bind(add1).bind(add2);
    c.runCont(a => {
      assert.equal(a, 3);
      done();
    });
  });

  it("then", (done) => {
    const c = new Cont(k => k(0)).then(add1).then(add2);
    c.runCont(a => {
      assert.equal(a, 3);
      done();
    });
  });

  it("flatMap", (done) => {
    const c = new Cont(k => k(0)).flatMap(add1).flatMap(add2);
    c.runCont(a => {
      assert.equal(a, 3);
      done();
    });
  });
});
