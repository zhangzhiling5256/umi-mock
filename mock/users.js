
import Mock from 'mockjs';

export default {
  'get /api/users/:id': {
    id: 2,
    name: 'zhangsan',
    alias: '张三',
    email: 'zhangsan@qq.com',
  },
  'get /api/users': Mock.mock({
    'array|10': [
      {
        id: '@guid',
        name: 'zhangsan',
        alias: '张三',
        email: 'zhangsan@qq.com',
        date: '@date("yyyy-MM-dd")',
      }
    ]
  }),
}