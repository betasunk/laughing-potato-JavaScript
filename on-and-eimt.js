// 发布订阅者模式，还有一个观察者模式
// let corp = {};
// corp.list = {};
// // 订阅事件
// corp.on = function (key, fn) {
//   if (!this.list[key]) {
//     this.list[key] = [];
//   }
//   // console.log('fn>>>>>',fn);
//   this.list[key].push(fn);
// };
// // 发布事件
// corp.emit = function () {
//   let key = [].shift.call(arguments),
//     fns = this.list[key];
//     // console.log('fns>>>>>',fns);
//   if (!fns || fns.length === 0) return;
//   fns.forEach((cb) => {
//     // console.log('arguments>>>>>',arguments);
//     cb.apply(this, arguments);
//   });
// };
// corp.on('join',  (position, salary)=> {
//   console.log('arguments>>>>>', position);
//   console.log('arguments>>>>>', salary);
// });
// corp.on('other',  (skill, hobby)=> {
//   console.log('你的技能有： ' + skill);
//   console.log('爱好： ' + hobby);
// });
// corp.emit('join','前端', 10000);
// corp.emit('other', '端茶和倒水', '足球');

function EventEmitter() {
  this._events = Object.create(null);
}
// 默认最多绑定次数
EventEmitter.defaultMaxListens = 10;

EventEmitter.prototype.eventNames = function () {
  return Object.keys(this._events);
};
// 设置最大监听数
EventEmitter.prototype.setMaxListens = function (n) {
  this._count = n;
};

// 返回监听数
EventEmitter.prototype.getMaxListens = function () {
  return this._count ? this._count : this.defaultMaxListens;
};
// 监听flag:标志向前添加还是向后添加
EventEmitter.prototype.on = function (key, cb, flag) {
  if (this._events[key]) {
    if (flag) {
      this._events[key].push(cb);
    } else {
      this._events.unshift(cb);
    }
  } else {
    this._events[key] = [cb];
  }
  // 监听的事件不能超过了设置的最大监听数
  if (this._events[type].length === this.getMaxListeners()) {
    console.warn('警告-警告-警告');
  }
};
// 向前添加
EventEmitter.prototype.prependListen = function () {

};
// 删除监听类型
EventEmitter.prototype.removeTypeListen = function (type, key) {};
// 删除全部监听
// 发布
EventEmitter.prototype.emit=function(type){
  if(this._events[type]){
    this._events[type].forEach(listen => {
      listen.call(this,...arguments)
    });
  }
}
module.exports=EventEmitter
