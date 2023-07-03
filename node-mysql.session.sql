drop table admins;
--建表语句
create table admins (
  id bigint(20) NOT NULL AUTO_INCREMENT COMMENT '自增主键',
  name VARCHAR(25),
  password VARCHAR(25),
  email VARCHAR(25),
  mobile VARCHAR(25),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP NOT NULL,
  primary key(id)
);
--查询表
select *
from admins;
--插入测试数据
INSERT INTO admins (name, password, email, mobile)
VALUES (
    'ghh',
    '123456',
    '18818060415@163.com',
    '18818060415'
  );
--(1) 插入的时候自动获取当前时间（格式为Y-m-d H:i:s）
ALTER TABLE admins
MODIFY created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL;
--(2) 更新的时候自动获取当前时间（格式为Y-m-d H:i:s）
ALTER TABLE admins
MODIFY updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP NOT NULL;
INSERT INTO admins (name, password, email, mobile)
VALUES (
    '张三',
    '123456',
    '18818060415@163.com',
    '18818060415'
  );
INSERT INTO admins (name, password, email, mobile)
VALUES (
    '李四',
    '123456',
    '18818060415@163.com',
    '18818060415'
  );
INSERT INTO admins (name, password, email, mobile)
VALUES (
    '王五',
    '123456',
    '18818060415@163.com',
    '18818060415'
  );
INSERT INTO admins (name, password, email, mobile)
VALUES (
    '赵六',
    '123456',
    '18818060415@163.com',
    '18818060415'
  );