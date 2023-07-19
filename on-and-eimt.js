// 发布订阅者模式，还有一个观察者模式
let corp = {};
corp.list = {};
// 订阅事件
corp.on = function (key, fn) {
  if (!this.list[key]) {
    this.list[key] = [];
  }
  // console.log('fn>>>>>',fn);
  this.list[key].push(fn);
};
// 发布事件
corp.emit = function () {
  let key = [].shift.call(arguments),
    fns = this.list[key];
    // console.log('fns>>>>>',fns);
  if (!fns || fns.length === 0) return;
  fns.forEach((cb) => {
    // console.log('arguments>>>>>',arguments);
    cb.apply(this, arguments);
  });
};
corp.on('join',  (position, salary)=> {
  console.log('arguments>>>>>', position);
  console.log('arguments>>>>>', salary);
});
corp.on('other',  (skill, hobby)=> {
  console.log('你的技能有： ' + skill);
  console.log('爱好： ' + hobby);
});
corp.emit('join','前端', 10000);
corp.emit('other', '端茶和倒水', '足球');
