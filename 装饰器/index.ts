// 类装饰器

const doc: ClassDecorator = (target: any) => {
  target.prototype.__name = 'Rika';
}

@doc
class Rika {
  constructor() {

  }
}

const rika: any = new Rika();

console.log(rika.__name); // Rika

// 属性装饰器
const doc2: PropertyDecorator = (target: any, key: string | symbol) => {
  // target: 指向原型对象
  // key: 指向属性名
  console.log(target, key);
}

// 还有方法装饰器，参数装饰器
const doc3: MethodDecorator = (target: any, key: string | symbol, descriptor: any) => {
  // descriptor: 指向原型对象上的属性描述符 是一个描述对象
  //writable: 是否可写
  //enumerable: 是否可枚举
  //configurable: 是否可配置
  console.log(target, key, descriptor);
}

const doc4: ParameterDecorator = (target: any, key: string | symbol | undefined, index: number) => {
  // target: 指向原型对象
  // key: 指向方法名
  // index: 指向参数索引
  console.log(target, key, index);
}

class Riika2 {
  @doc2
  name: string;
  constructor() {
    this.name = 'Rika2';
  }
  @doc3
  sayHello(@doc4 string: string) {
    console.log(string);
  }
}

