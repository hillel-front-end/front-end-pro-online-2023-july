/* 
    Object.defineProperty(obj, prop, descriptor)
        obj - Объект, в котором будум настраивать свойство.
        prop - имя настраемого свойства
        descriptor - объект настройки свойства.

    descriptor: {
        value: значение свойства. по умолчанию undefined,
        writable: значение свойства можно менять, если true. По умолчанию false,
        configurable: если true, то свойство можно удалят/менять его в
                       дальнейшем при помощи новых вызовов defineProperty.
                       По умолчанию false,
        enumerable: если true, то свойство просматривается 
                    в цикле for..in и методе Object.keys(). По умолчанию false.,
        get – функция, которая возвращает значение свойства. По умолчанию undefined
        set – функция, которая записывает значение свойства. По умолчанию undefined.
    }


    Запрещено использовать:
    * одновременно get/set и value
    * указывать writable при наличии get/set-функций.
*/

const test = {
  version: "1.0.0",
};

// descriptor -- access
const descriptorAccess = { // { get hiddenProp(){}, set hiddenProp() {} }
  get() {
    return this.app;
  },

  set(v) {
    this.app = v;
  },
};

// descriptor -- data

const descriptorData = {  // { hiddenProp: 'aaa' }
  value: "aaaa",
  writable: true,
};

const rule = {
  configurable: false,
  enumerable: false,
};

Object.defineProperty(test, "hiddenProp", Object.assign(descriptorData, rule));

test.hiddenProp = "bbbb";

delete test.hiddenProp;

console.log(test, "test");

console.log(Object.keys(test), "keys");

for (let i in test) {
  console.log(i, "key");
}
