export default {};
// 普通类型
const a: string = 'aaa';
a.substring(1, 1);

const b: number = 100;

let c: string | number = 'ccc';
c = 100;

const d: any = 'jjjkj';

// 数组
const arr1: string[] = ['3', '4'];
arr1.map((item) => item.substring(1, 1));

const arr2: number[] = [1, 2, 3, 4];
arr2.push(5);

const arr2bak: (number | string)[] = [1, 2, '3', '4'];
arr2bak.push(1);

// 数组-泛型写法
const arr3: Array<number> = [1, 2, 3, 4];
const arr4: Array<string> = ['1', '2', '3'];
const arr5: Array<number | string> = [1, 2, '3', '4'];
const arr6: Array<any> = [1, 2, , '3', true];

// 对象
const obj1: {
  name: string;
  age: number;
  student: boolean;
} = {
  name: 'aaa',
  age: 100,
  student: true,
};

// 对象-接口写法
interface IObj2 {
  name: string;
  age: number;
  test: (a: string, b: string) => string;
  student?: boolean; // 可选
  [propName: string]: any; // 可添加任何属性
}
const obj2: IObj2 = {
  name: 'aaa',
  age: 100,
  test: (a: string, b: string) => {
    return a + b;
  },
  arr: [1, 2, 3],
  location: {
    province: '广东省',
    city: '广州市',
  },
};

// 函数
function fun1(a: string, b: string, c?: number): string {
  return a.substring(1, 1) + b.substring(1, 1);
}
fun1('area', 'window', 100);
