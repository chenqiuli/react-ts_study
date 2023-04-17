export default {};

// 接口约束：接口只写公共的，要实现的
interface Ifunc {
  getName: () => string;
  getAge: () => number;
}

class A implements Ifunc {
  a1() {}

  a2() {}

  getName() {
    return 'AAA';
  }

  getAge() {
    return 10;
  }
}

class B implements Ifunc {
  b1() {}

  b2() {}

  getName() {
    return 'BBB';
  }

  getAge() {
    return 100;
  }
}

function init(obj: Ifunc) {
  return obj.getName();
}

const objA = new A();
const objB = new B();
console.log(init(objA));
console.log(init(objB));
