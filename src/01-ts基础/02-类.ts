// 接口是约束函数，对象，类的形状的，接口又是一种规范，一种公共的规范，增强了js面向对象的特性。

class Animal {
  private age = 10; // 私有属性，只能在当前类内部访问
  public name = '大熊猫'; // 公有属性，全部都能访问
  protected money = 100; // 受保护的属性，只有自己和孩子可以访问
}

class Dog extends Animal {
  getMoney() {
    console.log(this.money);
  }
}

const animal = new Animal();
console.log(animal.name);

const dog = new Dog();
dog.getMoney();

export default {};
