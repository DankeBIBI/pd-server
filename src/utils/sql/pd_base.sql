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
  -- 用户表
 */
DROP TABLE if EXISTS pd_user;
CREATE TABLE pd_user(
 	id INT UNSIGNED NOT NULL AUTO_INCREMENT,
 	u_id INT(8) UNSIGNED NOT NULL,
 	u_name VARCHAR(255) NOT NULL,
 	u_phone VARCHAR (11) NOT NULL,
 	create_time DATETIME NOT NULL,
	update_time DATETIME NOT NULL,PRIMARY KEY(id), UNIQUE KEY(u_id)
) CHARSET=UTF8 ENGINE = innodb; BEGIN;
INSERT INTO pd_user VALUES (1,82022094,'野猪佩奇','13425278202','2023-2-3 12:9:0','2023-02-21');
INSERT INTO pd_user VALUES (2,36072330,'靓仔','13129713607','2023-2-3  12:9:0','2023-02-21'); COMMIT; 


 /*
  -- 密码表
 */
DROP TABLE if EXISTS pd_user_p;
CREATE TABLE pd_user_p(
	u_id INT(8) UNSIGNED NOT NULL,
 	u_password VARCHAR (255) NOT NULL, FOREIGN KEY (u_id) REFERENCES pd_user(u_id) ON
UPDATE CASCADE ON
DELETE CASCADE 
) CHARSET = UTF8 ENGINE = innodb; BEGIN ;
INSERT INTO pd_user_p VALUES (82022094,123);
INSERT INTO pd_user_p VALUES (36072330,123); COMMIT ;

 /*
  -- 文章表
 */
DROP TABLE if EXISTS pd_blog;
CREATE TABLE pd_blog(
 	b_id INT AUTO_INCREMENT PRIMARY KEY,
 	u_id INT(8) UNSIGNED NOT NULL,
 	title VARCHAR (255) NOT NULL,
 	content TEXT,
 	pic VARCHAR (255),
 	views INT, FOREIGN KEY (u_id) REFERENCES pd_user(u_id) ON
UPDATE CASCADE ON
DELETE CASCADE 
) CHARSET = UTF8 ENGINE = INNODB ; BEGIN;
INSERT INTO pd_blog (u_id,title,content,pic) VALUES (82022094,'今天的天气不错','Hello World!',1+1); COMMIT; 
#//////////////////////////////////
BEGIN; SET foreign_key_checks = 1; COMMIT;
#//////////////////////////////////
-- 
-- UPDATE pd_user SET u_id = 12312312 WHERE u_id = 36072330;
-- -- UPDATE pd_user_p SET u_id = 111111 WHERE u_id = 36072330;
-- SELECT * FROM pd_user
-- SELECT * FROM pd_user_p
-- select * from pd_blog
