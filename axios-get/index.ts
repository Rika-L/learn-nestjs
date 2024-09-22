import axios from 'axios';

const Get = (url: string) => {
  return (target: any, key: string, descriptor: PropertyDescriptor) => {
    const fnc = descriptor.value;
    axios.get(url).then(res => {
      fnc(res, {
        status: 200,
        message: 'Success'
      }).catch(err => {
        fnc(err, {
          status: 500,
          message: 'Error'
        })
      })
    })
  }
}

class Controller {
  constructor() { }
  @Get("xxx")
  getList() {

  }
}