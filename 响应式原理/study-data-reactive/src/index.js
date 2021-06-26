import observe from "./observe";
import Watcher from "./Watcher";

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

observe(obj);
new Watcher(obj, 'a.m.n', (val) => {
  console.log('Watcher在监控Dep', val)
})
obj.a.m.n = 88;
console.log(obj.g)

