import observe from "./observe";

const obj = {
  a: {
    m: {
      n: 5,
    },
  },
  b: 4,
};

observe(obj);
obj.a.m = 10;
