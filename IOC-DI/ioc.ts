class A {
  name: string
  constructor(name: string) {
    this.name = name
  }
}

class C {
  name: string
  constructor(name: string) {
    this.name = name
  }
}

class Container {
  model: any
  constructor() {
    this.model = {}
  }
  provide(key: string, model: any) {
    this.model[key] = model
  }
  get(key: string) {
    return this.model[key]
  }
}

const mo = new Container()
mo.provide('A', new A('A'))
mo.provide('C', new C('C'))

class B {
  a: any
  c: any
  constructor(mo:Container){
    this.a = mo.get('A')
    this.c = mo.get('C')
  }
}

