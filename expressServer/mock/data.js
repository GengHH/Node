var Mock = require("mockjs");
module.exports.data = Mock.mock({
  "imgList|10-20": [
    {
      "id|+1": 1,
      title: "@title",
      name: '@name',
      nickName: '@last',
      content: "@sentence(3)",
      createTime: "@date",
      avatar () {
        return Mock.Random.image('100x100', Mock.Random.color(), '#757575', 'png', this.nickName.substr(0, 1))
      },
      path () {
        return Mock.Random.image('300x200', Mock.Random.color(), '#fff', 'png', this.nickName)
      },
    }
  ]
});

module.exports.imgBase64 = Mock.mock({
  "data|4-8": [
    {
      id: "@id",
      title: "@title",
      namespace: "desctab",
      content: "@sentence(5)",
      isPublish: "@boolean",
      createTime: "@datetime",
      "fileList|1-10": [
        {
          name: "@integer(1,960)",
          uid: "-@name",
          url: "http://xxxxx.xxx.clouddn.com/@name",
          status: "done"
        }
      ]
    }
  ]
});


module.exports.user = Mock.mock({
    'data|80-100': [
      {
        id: '@id',
        name: '@name',
        nickName: '@last',
        phone: /^1[34578]\d{9}$/,
        'age|11-99': 1,
        address: '@county(true)',
        isMale: '@boolean',
        email: '@email',
        createTime: '@datetime',
        avatar () {
          return Mock.Random.image('100x100', Mock.Random.color(), '#757575', 'png', this.nickName.substr(0, 1))
        },
      },
    ],
  });