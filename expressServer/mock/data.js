var Mock = require("mockjs");
module.exports.data = Mock.mock({
  "list|10": [
    {
      "id|+1": 1,
      title: "@title",
      name: '@name',
      nickName: '@last',
      content: "@sentence(5)",
      createTime: "@date",
      avatar () {
        return Mock.Random.image('100x100', Mock.Random.color(), '#757575', 'png', this.nickName.substr(0, 1))
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