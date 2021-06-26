import observe from "./observe";

const obj = {
  a: {
    m: {
      n: 5,
    },
  },
  b: 4,
  c: {
    d: {
      e: {
        f: 6666
      }
    }
  },
  g: [22, 33, 44, 55]
};


obj.g.push(66)
observe(obj);
