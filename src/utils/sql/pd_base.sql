 -- pd-server & pd-base database 2023-02-21
 #by DANKEBIBI
 #/////////////////////////////////////
 
 /*
 # 注意设置引擎pd_user_p
 */
 

 
 #//////////////////////////////////
BEGIN; SET foreign_key_checks = 0; COMMIT;
#//////////////////////////////////
 /*
  -- PD-KEY
 */
DROP TABLE if EXISTS pd_key;
CREATE TABLE pd_key(
 	u_key VARCHAR (255) NOT NULL PRIMARY KEY
) CHARSET = UTF8 ENGINE = INNODB ; BEGIN;
INSERT INTO pd_key VALUES ('RRDKEYYDKERRDKEYYDKEVVDKEPPDKEMMDKEZZDKEWWDKE_DKEMMDKERRDKENNDKEWWDKEZZDKE_DKEIIDKEVVDKEEEDKEIIDKEVVDKEHHDKE-DKEWWDKEKKDKE171DKE6'); COMMIT;
 
 /*
  -- 项目设定
 */
DROP TABLE if EXISTS pd_project_setting;
CREATE TABLE pd_project_setting(
 		id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY COMMENT '索引',
 		project_name VARCHAR (255) NOT NULL COMMENT '项目名称',
 		index_ad TEXT NOT NULL COMMENT '首页广告',
 		index_tip TEXT NOT NULL COMMENT '首页提示语',
 		create_time DATETIME COMMENT '创建时间',
		update_time DATETIME COMMENT '修改时间'
) CHARSET = UTF8 ENGINE = INNODB ; 
BEGIN;
INSERT INTO pd_project_setting VALUES (1,'照片库','https://pd-base.oss-cn-heyuan.aliyuncs.com/project/INDEXIMG/sky.jpg','今天的天气不错','2023-2-3  12:9:0','2023-2-3  12:9:0');
INSERT INTO pd_project_setting VALUES (2,'照片库','https://pd-base.oss-cn-heyuan.aliyuncs.com/project/INDEXIMG/water.jpg','今天的天气不错,雅虎！！！！！！','2023-2-3  12:9:0','2023-2-3  12:9:0');
INSERT INTO pd_project_setting VALUES (3,'照片库','https://pd-base.oss-cn-heyuan.aliyuncs.com/project/INDEXIMG/ground.jpg','今天的天气不错嘻嘻嘻嘻嘻','2023-2-3  12:9:0','2023-2-3  12:9:0'); COMMIT;
 /*
  -- 用户表
 */
DROP TABLE if EXISTS pd_user;
CREATE TABLE pd_user(
 	id INT UNSIGNED NOT NULL AUTO_INCREMENT COMMENT '索引',
 	u_id INT(8) UNSIGNED NOT NULL COMMENT '用户ID',
 	u_name VARCHAR(255) NOT NULL COMMENT '名称',
 	phone VARCHAR (11) NOT NULL COMMENT '手机',
 	head_url VARCHAR(255) COMMENT '头像',
 	sex INT (1) DEFAULT 1 COMMENT '性别',
 	age INT (10) DEFAULT 1 COMMENT '年龄',
 	integral INT (10) COMMENT '积分',
 	lever INT DEFAULT 1 COMMENT '等级',
 	create_time DATETIME COMMENT '创建时间',
	update_time DATETIME COMMENT '修改时间', PRIMARY KEY(id), UNIQUE KEY(u_id)
) CHARSET=UTF8 ENGINE = INNODB; BEGIN;
INSERT INTO pd_user VALUES (1,82022094,'野猪佩奇','13425278202','https://pd-base.oss-cn-heyuan.aliyuncs.com/icon.png',1,100,10000,1,'2023-2-3  12:9:0','2023-2-3  12:9:0');
INSERT INTO pd_user VALUES (2,36072330,'靓仔','13129713607','https://pd-base.oss-cn-heyuan.aliyuncs.com/icon.png',2,99,238930,1,'2023-2-3  12:9:0','2023-2-3  12:9:0'); COMMIT; 


 /*
  -- 密码表
 */
DROP TABLE if EXISTS pd_user_p;
CREATE TABLE pd_user_p(
	id INT AUTO_INCREMENT PRIMARY KEY COMMENT '索引',
	u_id INT(8) UNSIGNED NOT NULL COMMENT '用户ID',
 	u_password VARCHAR (255) NOT NULL COMMENT '密码', FOREIGN KEY (u_id) REFERENCES pd_user(u_id) ON
UPDATE CASCADE ON
DELETE CASCADE 
) CHARSET = UTF8 ENGINE = innodb; BEGIN ;
INSERT INTO pd_user_p VALUES (1,82022094,123);
INSERT INTO pd_user_p VALUES (2,36072330,123); COMMIT ;

 /*
  -- 文章表
 */
DROP TABLE if EXISTS pd_blog;
CREATE TABLE pd_blog(
 	id INT AUTO_INCREMENT PRIMARY KEY COMMENT '索引',
 	u_id INT(8) UNSIGNED NOT NULL COMMENT '用户ID',
 	title VARCHAR (255) NOT NULL COMMENT '标题',
 	content TEXT COMMENT '内容',
 	pic TEXT COMMENT '图组',
 	views INT DEFAULT 0 COMMENT '浏览量', 
 	star INT DEFAULT 0 COMMENT '赞',
	create_time DATETIME COMMENT '创建时间',
	update_time DATETIME COMMENT '修改时间', FOREIGN KEY (u_id) REFERENCES pd_user(u_id) ON
UPDATE CASCADE ON
DELETE CASCADE 
) CHARSET = UTF8 ENGINE = INNODB ; BEGIN;
INSERT INTO pd_blog (u_id,title,content,pic) VALUES (82022094,'今天的天气不错','Hello World!',1+1); COMMIT; 
 


 /*
  -- 上传记录表
 */
DROP TABLE if EXISTS pd_upload;
CREATE TABLE pd_upload(
 	id INT AUTO_INCREMENT PRIMARY KEY COMMENT '索引',
 	u_id INT(8) UNSIGNED NOT NULL COMMENT '用户ID',
 	size VARCHAR(255) COMMENT '文件大小',
	create_time DATETIME COMMENT '创建时间',
	update_time DATETIME COMMENT '修改时间', FOREIGN KEY (u_id) REFERENCES pd_user(u_id) ON
UPDATE CASCADE ON
DELETE CASCADE 
) CHARSET = UTF8 ENGINE = INNODB ; BEGIN;
INSERT INTO pd_upload (u_id,size) VALUES (82022094,'100MB'); COMMIT; 
#//////////////////////////////////
BEGIN; SET foreign_key_checks = 1; COMMIT;
#//////////////////////////////////

-- 
-- UPDATE pd_user SET u_id = 12312312 WHERE u_id = 36072330;
-- -- UPDATE pd_user_p SET u_id = 111111 WHERE u_id = 36072330;
-- SELECT * FROM pd_user
-- SELECT * FROM pd_user_p
-- select * from pd_blogpd_blog
-- mysqlmysql`pd-base`pd_user_pALTER  table pd_user ADD lever int DEFAULT 0
