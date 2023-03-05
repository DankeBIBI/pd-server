(()=>{var e={108:(e,t,s)=>{var i=s(464),o=s(84);function n(){return(new Date).getTime()}var r,a=Array.prototype.slice,u={};r="undefined"!=typeof global&&global.console?global.console:"undefined"!=typeof window&&window.console?window.console:{};for(var c=[[function(){},"log"],[function(){r.log.apply(r,arguments)},"info"],[function(){r.log.apply(r,arguments)},"warn"],[function(){r.warn.apply(r,arguments)},"error"],[function(e){u[e]=n()},"time"],[function(e){var t=u[e];if(!t)throw new Error("No such label: "+e);delete u[e];var s=n()-t;r.log(e+": "+s+"ms")},"timeEnd"],[function(){var e=new Error;e.name="Trace",e.message=i.format.apply(null,arguments),r.error(e.stack)},"trace"],[function(e){r.log(i.inspect(e)+"\n")},"dir"],[function(e){if(!e){var t=a.call(arguments,1);o.ok(!1,i.format.apply(null,t))}},"assert"]],d=0;d<c.length;d++){var l=c[d],f=l[0],p=l[1];r[p]||(r[p]=f)}e.exports=r},607:function(e,t,s){"use strict";var i=s(108),o=this&&this.__awaiter||function(e,t,s,i){return new(s||(s=Promise))((function(o,n){function r(e){try{u(i.next(e))}catch(e){n(e)}}function a(e){try{u(i.throw(e))}catch(e){n(e)}}function u(e){var t;e.done?o(e.value):(t=e.value,t instanceof s?t:new s((function(e){e(t)}))).then(r,a)}u((i=i.apply(e,t||[])).next())}))},n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const r=n(s(406)),a=n(s(97)),u=n(s(17)),c=n(s(731)),d=n(s(4)),l=s(332),f=n(s(645)),p=s(629),y=s(895),_=(0,s(380).distributionRouter)(f.default.useDB),h=new r.default;h.use((0,a.default)(u.default.join(__dirname,"./static"))),h.use((0,d.default)({multipart:!0,formidable:{keepExtensions:!0}})),h.use((0,c.default)()),h.use((0,l.response)()).use((0,l.fail)()),h.use(_.routes()),_.allowedMethods({throw:!0}),(0,y.TIMER)((()=>{})),(()=>{try{h.listen(f.default.port,(()=>o(void 0,void 0,void 0,(function*(){i.log(`服务启动！端口是${f.default.port}`)}))))}catch(e){p.tools.startLog("失败")}})()},191:function(e,t,s){"use strict";const i=(this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}})(s(645)),o=s(629),n=i.default.mongoDB,r=n.user,a=[`mongodb://${o.tools.decrypt(n.user_name[r])}:${o.tools.decrypt(n.password)}@${i.default.host}:${n.dbHost}/${n.dataBase}`,`mongodb+srv://photo_base:${o.tools.decrypt(n.password)}@cluster0.uk7mxbo.mongodb.net/${n.dataBase}`],u=`mongodb://localhost:27017/${n.dataBase}`;e.exports={server:n.is_local?u:a[r],rules:n.rules}},345:function(e,t,s){"use strict";var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.blog=void 0;const o=s(953),n=s(629),r=i(s(645)),a=new o.Schema({author:{type:Number,ref:`${n.tools.getConfig().name}_user_info`},title:String,content:String,image:[],create_time:{type:String,default:Date}});a.statics.findby;const u=`${r.default.name}_blog`;t.blog=o.model(u,a,u)},354:function(e,t,s){"use strict";var i=this&&this.__awaiter||function(e,t,s,i){return new(s||(s=Promise))((function(o,n){function r(e){try{u(i.next(e))}catch(e){n(e)}}function a(e){try{u(i.throw(e))}catch(e){n(e)}}function u(e){var t;e.done?o(e.value):(t=e.value,t instanceof s?t:new s((function(e){e(t)}))).then(r,a)}u((i=i.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.BLOG=void 0;const o=s(345),n=s(655);t.BLOG=class{static createBlog(e,t){return i(this,void 0,void 0,(function*(){try{const t=yield o.blog.create(Object.assign({},e.request.body));e.success("创建成功",t)}catch(t){e.fail(t.message)}}))}static userBlog(e){return i(this,void 0,void 0,(function*(){let t=e.request.body;const s=yield o.blog.find(t).populate({path:"author",select:["name","phone"]});e.success("查找成功",s)}))}static trys(e){return i(this,void 0,void 0,(function*(){const t=yield n.USER_M.findAll({});e.success("123",t)}))}}},561:(e,t,s)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.uploadLog=void 0;const i=s(953),{tools:o}=s(629),n=new i.Schema({user:String,source_version:{type:Number,default:o._version()},file_size:String,img:String,date:String,status:String}),r=`${o.getConfig().name}_upload_log`;t.uploadLog=i.model(r,n,r)},557:function(e,t,s){"use strict";var i=this&&this.__awaiter||function(e,t,s,i){return new(s||(s=Promise))((function(o,n){function r(e){try{u(i.next(e))}catch(e){n(e)}}function a(e){try{u(i.throw(e))}catch(e){n(e)}}function u(e){var t;e.done?o(e.value):(t=e.value,t instanceof s?t:new s((function(e){e(t)}))).then(r,a)}u((i=i.apply(e,t||[])).next())}))},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.UPLOAD=void 0;const n=s(629),r=o(s(147)),a=s(561),u=o(s(645)),c=s(426),d=s(189);t.UPLOAD=class{static upload(e){return i(this,void 0,void 0,(function*(){let t=e.request.body;if(!t.user_id)return void e.fail("请先登录");if(!(yield(0,c.findUser)({_id:t.user_id})))return void e.fail("用户不存在");r.default.existsSync("static")||r.default.mkdirSync("static");let s=`static/upload/${t.folder}`;const o=t=>new Promise(((s,i)=>{r.default.exists(t,(i=>{if(i)s(!0);else{try{r.default.mkdirSync(t)}catch(s){e.fail(t+"创建失败")}s(!0)}}))})),l=()=>new Promise(((e,t)=>{r.default.exists(s,(t=>i(this,void 0,void 0,(function*(){if(t)e(!0);else{let t=s.split("/"),i=t[0];for(let s=0;s<t.length;s++)s>0&&(i=`${i}/${t[s]}`,yield o(i),s==t.length-1&&e(!0))}}))))})),f=e.request.files.file,p={user:t.user_id,status:"上传成功",file_size:f.size<1e6?(f.size/1e3).toFixed(2)+"KB":(f.size/1e3/1e3).toFixed(2)+"MB",date:n.tools.date(),img:`http://${u.default.host}:${u.default.port}/upload/${t.folder}/${f.name}`},y=()=>i(this,void 0,void 0,(function*(){try{return yield d.OSS.upload(f.name,f.path)}catch(t){e.fail(t)}})),_=()=>i(this,void 0,void 0,(function*(){yield l();const e=r.default.createReadStream(f.path),t=`${s}/${f.name}`,i=r.default.createWriteStream(t);return yield new Promise(((t,s)=>{e.pipe(i),t(!0)})),yield a.uploadLog.create(p),p}));try{const s=t.is_local?yield _():yield y();e.success("上传成功",s)}catch(t){e.fail(501,"上传失败",t)}}))}}},914:function(e,t,s){"use strict";var i=this&&this.__awaiter||function(e,t,s,i){return new(s||(s=Promise))((function(o,n){function r(e){try{u(i.next(e))}catch(e){n(e)}}function a(e){try{u(i.throw(e))}catch(e){n(e)}}function u(e){var t;e.done?o(e.value):(t=e.value,t instanceof s?t:new s((function(e){e(t)}))).then(r,a)}u((i=i.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.SERVER_LOG=void 0;const o=s(256);class n extends o.server_log{static startLog(e,t){return i(this,void 0,void 0,(function*(){const t=e.request.url.split("/api/startLog?msg=")[1];o.server_log.create({state:decodeURIComponent(t)})}))}}t.SERVER_LOG=n},256:(e,t,s)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.server_log=void 0;const i=s(629),o=s(953),n=new o.Schema({start_time:{type:String,default:i.tools.date()},state:{type:String}}),r=`${i.tools.getConfig().name}_server_log`;t.server_log=o.model(r,n,r)},778:(e,t,s)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TOOLS=void 0;const i=s(629);t.TOOLS=class{static encryption(e){const t=e.request.url.split("/api/encryption?msg=")[1];e.body=i.tools.encryption(t)}static decrypt(e){const t=e.request.url.split("/api/decrypt?msg=")[1];e.body=i.tools.decrypt(t)}}},426:function(e,t,s){"use strict";var i=this&&this.__awaiter||function(e,t,s,i){return new(s||(s=Promise))((function(o,n){function r(e){try{u(i.next(e))}catch(e){n(e)}}function a(e){try{u(i.throw(e))}catch(e){n(e)}}function u(e){var t;e.done?o(e.value):(t=e.value,t instanceof s?t:new s((function(e){e(t)}))).then(r,a)}u((i=i.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.USER=t.findUser=void 0;const o=s(376),n=s(629);t.findUser=e=>i(void 0,void 0,void 0,(function*(){return(yield o.user.find(e)).length>0})),t.USER=class{static createUserInfo(e,s){return i(this,void 0,void 0,(function*(){let s=e.request.body;s.password=n.tools.encryption(s.password);try{if(yield(0,t.findUser)({phone:s.phone}))e.success("用户已存在");else{let t=Number(String(s.phone).substring(7,11)+Math.floor(9999*Math.random()));const i=yield o.user.create(Object.assign(Object.assign({},s),{_id:t}));yield o.user_p.create(Object.assign(Object.assign({},s),{userInfo:i._id,id:t})),e.success("创建成功",i)}}catch(t){e.fail(t.message)}}))}static login(e,s){return i(this,void 0,void 0,(function*(){let s=e.request.body,i={phone:Number(s.user)},r={_id:Number(s.user)};try{if(11==s.user.length){if(yield(0,t.findUser)(i)){const t=yield o.user_p.findOne(i).populate("userInfo"),r=t.password;return void(s.password==n.tools.decrypt(r)?e.success("登陆成功",t.userInfo):e.success("密码错误"))}return void e.success("手机号未注册")}if(yield(0,t.findUser)(r)){const t=yield o.user_p.findOne({userInfo:s.user}).populate("userInfo"),i=t.password;s.password==n.tools.decrypt(i)?e.success("登陆成功",t.userInfo):e.success("密码错误")}else e.success("用户ID不存在")}catch(t){e.fail(t.message)}}))}static deleteUserInfo(e,t){return i(this,void 0,void 0,(function*(){try{yield o.user.deleteOne({age:1}),e.body="删除成功"}catch(t){e.body="删除失败"}}))}static updateUserInfo(e,t){return i(this,void 0,void 0,(function*(){const t=e.request.body;let s={};t.name&&(s={name:t.name}),t.head_url&&(s={head_url:t.head_url}),t.sex&&(s={sex:t.sex}),t.phone&&(s={phone:t.phone});try{const i=yield o.user.findOne({_id:Number(t.user_id)});i.set(s),i.save(),e.success("更新成功",i)}catch(t){e.fail(t)}}))}static getUserInfo(e,t){return i(this,void 0,void 0,(function*(){try{const t=yield o.user.find({});e.success("请求成功",t)}catch(t){e.fail(t.message)}}))}}},376:(e,t,s)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.user_p=t.user=void 0;const i=s(953),{tools:o}=s(629),n=new i.Schema({_id:Number,name:{type:String,required:[!0,"昵称为必填字段"],maxLength:10,minLength:2,trim:!0},phone:{type:Number,required:[!0,"手机号为必填字段"],minLength:11,maxLength:11,trim:!0},sex:{type:Number,required:!1,enmu:[0,1,2],default:0},age:{type:Number,min:1,max:150},head_url:{type:String},create_params:{version:{type:String,default:o.version()},time:{type:String,default:o.date()}}}),r=new i.Schema({userInfo:{type:Number,ref:`${o.getConfig().name}_user_info`},id:{type:Number},phone:{type:Number,required:[!0,"手机号为必填字段"],minLength:11,maxLength:11,trim:!0},password:{type:String,required:[!0,"密码为必填字段"],trim:!0},__v:{type:String,defalut:o._version()}}),a=`${o.getConfig().name}_user_info_p`,u=`${o.getConfig().name}_user_info`,c=i.model(u,n,u);t.user=c;const d=i.model(a,r,a);t.user_p=d},953:(e,t,s)=>{"use strict";var i=s(108);const o=s(185),{server:n,rules:r,mongoDB:a}=s(191);o.connect(n,r).then((()=>{i.log("链接成功",n)})).catch((e=>{i.log("链接失败",n,e)})),e.exports=o},906:function(e,t,s){"use strict";var i=s(108),o=this&&this.__awaiter||function(e,t,s,i){return new(s||(s=Promise))((function(o,n){function r(e){try{u(i.next(e))}catch(e){n(e)}}function a(e){try{u(i.throw(e))}catch(e){n(e)}}function u(e){var t;e.done?o(e.value):(t=e.value,t instanceof s?t:new s((function(e){e(t)}))).then(r,a)}u((i=i.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.BLOG=void 0;const n=s(911),r=s(655);n.BLOG_M.belongsTo(r.USER_M,{as:"author",foreignKey:"u_id",targetKey:"u_id"}),n.BLOG_COLLECT_M.belongsTo(r.USER_M,{as:"author",foreignKey:"u_id",targetKey:"u_id"}),n.BLOG_COLLECT_M.belongsTo(n.BLOG_M,{as:"blog",foreignKey:"b_id",targetKey:"id"});class a extends n.BLOG_M{static createBlog(e){return o(this,void 0,void 0,(function*(){const{author:t,title:s,content:o,image:n}=e.request.body;try{const i=yield a.create({u_id:t,title:s,content:o,pic:JSON.stringify(n)});e.success("创建成功",i)}catch(e){i.error(e)}}))}static getUserBlog(e){return o(this,void 0,void 0,(function*(){const{author:t}=e.request.body;let s={};t&&(s={where:{u_id:t||""}});try{let t=yield a.findAll(Object.assign(Object.assign({},s),{attributes:{exclude:["u_id"]},include:[{model:r.USER_M,as:"author",attributes:["u_id","u_name","head_url"]}]}));t.length>0&&t.forEach(((e,s)=>{e.pic&&e.pic.length>10&&(t[s].pic=JSON.parse(t[s].pic))})),e.success("查找成功",t)}catch(e){i.error(e)}}))}static setBlogStarAndViews(e){return o(this,void 0,void 0,(function*(){const{id:t,views:s,star:i}=e.request.body,o=yield n.BLOG_M.findOne({where:{id:Number(t)}});s&&(yield o.set({views:o.views+Number(s)})),i&&(yield o.set({star:o.star+Number(i)})),yield o.save(),e.success(s?"浏览量+1":"点赞成功",o)}))}static collectTheBlog(e){return o(this,void 0,void 0,(function*(){const{user_id:t,id:s,pic:o,title:r}=e.request.body;try{if(yield n.BLOG_COLLECT_M.findOne({where:{u_id:t,b_id:s}}))return void e.success("这篇图文已经收藏过了");const i=yield n.BLOG_COLLECT_M.create({u_id:t,b_id:s,pic:o,title:r});e.success("收藏成功！",i.create_time)}catch(e){i.error(e)}}))}static userCollectedTheBlog(e){return o(this,void 0,void 0,(function*(){const{user_id:t}=e.request.body;if(t)try{const s=yield n.BLOG_COLLECT_M.findAll({where:{u_id:t},include:[]});e.success("",s)}catch(e){i.error(e)}else e.fail("用户ID不存在")}))}static blogDetail(e){return o(this,void 0,void 0,(function*(){const{id:t}=e.request.body;try{const s=yield n.BLOG_M.findOne({where:{id:t},include:[{model:r.USER_M,as:"author"}]});if(s){let t=s;t.pic=JSON.parse(t.pic),e.success("查找成功",s)}else e.fail("文章不存在或已删除")}catch(e){i.error(e)}}))}}t.BLOG=a},911:(e,t,s)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.BLOG_COLLECT_M=t.BLOG_M=t.interfaces=void 0;const i=s(868);Object.defineProperty(t,"interfaces",{enumerable:!0,get:function(){return i.interfaces}});class o extends i.Model{}t.BLOG_M=o,o.init({id:{type:i.DataTypes.INTEGER,primaryKey:!0},u_id:{type:i.DataTypes.INTEGER,unique:!0},title:i.DataTypes.STRING,content:i.DataTypes.TEXT,pic:i.DataTypes.TEXT,views:i.DataTypes.INTEGER,star:i.DataTypes.INTEGER},Object.assign({modelName:"pd_blog"},i.rules));class n extends i.Model{}t.BLOG_COLLECT_M=n,n.init({id:{type:i.DataTypes.INTEGER,primaryKey:!0},u_id:{type:i.DataTypes.INTEGER},b_id:{type:i.DataTypes.INTEGER,unique:!0},pic:i.DataTypes.STRING,title:i.DataTypes.STRING},Object.assign(Object.assign({},i.rules),{modelName:"pd_blog_collect"}))},963:function(e,t,s){"use strict";var i=s(108),o=this&&this.__awaiter||function(e,t,s,i){return new(s||(s=Promise))((function(o,n){function r(e){try{u(i.next(e))}catch(e){n(e)}}function a(e){try{u(i.throw(e))}catch(e){n(e)}}function u(e){var t;e.done?o(e.value):(t=e.value,t instanceof s?t:new s((function(e){e(t)}))).then(r,a)}u((i=i.apply(e,t||[])).next())}))},n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.TOOLS=void 0;const r=n(s(147)),a=s(189),u=s(468),c=s(655),d=s(216);u.UPLOAD_LOG_M.belongsTo(c.USER_M,{as:"userInfo",foreignKey:"u_id",targetKey:"u_id"}),t.TOOLS=class{static getProjectInfo(e){return o(this,void 0,void 0,(function*(){try{const t=yield u.PROJECT_SETTING_M.findAll({});let s=t.length,i=Math.floor(Math.random()*s);e.success("项目配置获取成功",t[i])}catch(t){i.error(t),e.success("项目配置获取失败",501)}}))}static encryption(e){const t=e.request.url.split("/api/encryption?msg=")[1];e.body=u.tools.encryption(decodeURIComponent(t))}static decrypt(e){const t=e.request.url.split("/api/decrypt?msg=")[1];e.body=u.tools.decrypt(decodeURIComponent(t))}static upload(e){return o(this,void 0,void 0,(function*(){const t=e.request.body;if(!t.user_id)return void e.fail("请登录",501);if(0==(yield(0,d.findUser)({u_id:t.user_id})))return void e.fail("用户未注册",501);r.default.existsSync("static")||r.default.mkdirSync("static");let s=`static/upload/${t.folder}`;const n=t=>new Promise(((s,i)=>{r.default.exists(t,(i=>{if(i)s(!0);else{try{r.default.mkdirSync(t)}catch(s){e.fail(t+"创建失败")}s(!0)}}))})),c=()=>new Promise(((e,t)=>{r.default.exists(s,(t=>o(this,void 0,void 0,(function*(){if(t)e(!0);else{let t=s.split("/"),i=t[0];for(let s=0;s<t.length;s++)s>0&&(i=`${i}/${t[s]}`,yield n(i),s==t.length-1&&e(!0))}}))))})),l=e.request.files.file,f={user:t.user_id,status:"上传成功",size:l.size<1e6?(l.size/1e3).toFixed(2)+"KB":(l.size/1e3/1e3).toFixed(2)+"MB",date:u.tools.date(),filePath:`http://${u.config.host}:${u.config.port}/upload/${t.folder}/${l.name}`},p=()=>o(this,void 0,void 0,(function*(){try{const e=yield a.OSS.upload(t.folder+"/"+l.name,l.path);return f.filePath=e.res.requestUrls[0],Object.assign(Object.assign({},f),{code:e.res.statusCode})}catch(t){e.fail(t)}})),y=()=>o(this,void 0,void 0,(function*(){yield c();const e=r.default.createReadStream(l.path),t=`${s}/${l.name}`,i=r.default.createWriteStream(t);return yield new Promise(((t,s)=>{e.pipe(i),t(!0)})),f}));try{const s=t.is_local?yield y():yield p();if(yield u.UPLOAD_LOG_M.create({u_id:t.user_id,size:f.size}),200==s.code&&!t.is_local)return e.success("上传成功",s);if(200!=s.code&&!t.is_local)return e.fail(501,"上传失败");e.success("上传成功",s)}catch(t){i.log("🚀这是打印的数据哦 ~ error:",t),e.fail(501,"上传失败")}}))}}},468:(e,t,s)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.interfaces=t.tools=t.config=t.PROJECT_SETTING_M=t.UPLOAD_LOG_M=void 0;const i=s(868);Object.defineProperty(t,"config",{enumerable:!0,get:function(){return i.config}}),Object.defineProperty(t,"tools",{enumerable:!0,get:function(){return i.tools}}),Object.defineProperty(t,"interfaces",{enumerable:!0,get:function(){return i.interfaces}});class o extends i.Model{}t.UPLOAD_LOG_M=o,o.init({id:{type:i.DataTypes.INTEGER,primaryKey:!0},u_id:{type:i.DataTypes.INTEGER,unique:!0},size:i.DataTypes.STRING},Object.assign(Object.assign({},i.rules),{modelName:"pd_upload"}));class n extends i.Model{}t.PROJECT_SETTING_M=n,n.init({id:{type:i.DataTypes.INTEGER,primaryKey:!0},project_name:i.DataTypes.STRING,index_ad:i.DataTypes.STRING,index_tip:i.DataTypes.STRING},Object.assign(Object.assign({},i.rules),{modelName:"pd_project_setting"}))},216:function(e,t,s){"use strict";var i=s(108),o=this&&this.__awaiter||function(e,t,s,i){return new(s||(s=Promise))((function(o,n){function r(e){try{u(i.next(e))}catch(e){n(e)}}function a(e){try{u(i.throw(e))}catch(e){n(e)}}function u(e){var t;e.done?o(e.value):(t=e.value,t instanceof s?t:new s((function(e){e(t)}))).then(r,a)}u((i=i.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.USER=t.findUser=void 0;const n=s(655);n.USER_P_M.belongsTo(n.USER_M,{as:"userInfo",foreignKey:"u_id",targetKey:"u_id"}),t.findUser=e=>o(void 0,void 0,void 0,(function*(){return!!(yield n.USER_M.findOne({where:Object.assign({},e)}))}));class r extends n.USER_M{static getUserInfo(e){return o(this,void 0,void 0,(function*(){const t=yield r.findAll();e.success("查询成功",t)}))}static login(e){return o(this,void 0,void 0,(function*(){const t=e.request.body,s={phone:Number(t.user)},i={u_id:Number(t.user)};try{const o=11==t.user.length?yield n.USER_M.findOne({where:Object.assign({},s),attributes:{exclude:["id"]}}):yield n.USER_M.findOne({where:Object.assign({},i),attributes:{exclude:["id"]}});o?(yield n.USER_P_M.findAll({where:{u_id:o.u_id}}))[0].u_password===t.password?e.success("登录成功",o):e.success("密码错误"):e.success(11==t.user.length?"手机号未注册":"用户ID不存在")}catch(t){e.fail(t.message)}}))}static createUser(e){return o(this,void 0,void 0,(function*(){const{name:s,phone:o,password:r}=e.request.body;try{if(yield(0,t.findUser)({phone:o}))e.success("用户已注册");else{let t=Number(String(o).substring(7,11)+Math.floor(9999*Math.random())),i={u_id:t,u_name:s,phone:o},a={u_id:t,u_password:r};const u=yield n.USER_M.create(i);yield n.USER_P_M.create(a),e.success("注册成功",u)}}catch(e){i.error(e)}}))}static updateUserInfo(e){return o(this,void 0,void 0,(function*(){const{name:t,head_url:s,sex:o,phone:a,user_id:u}=e.request.body;let c;t&&(c={u_name:t}),s&&(c={head_url:s}),o&&(c={sex:o}),a&&(c={phone:a});try{yield n.USER_M.update(Object.assign({},c),{where:{u_id:u}}),e.success("更新成功",yield r.findOne({where:{u_id:u}}))}catch(e){i.error(e)}}))}static deleteUserInfo(e){return o(this,void 0,void 0,(function*(){const{user_id:t}=e.request.body;try{yield r.destroy({where:{u_id:t}}),e.success("用户注销成功",`再见、${t}`)}catch(e){i.error(e)}}))}}t.USER=r},655:(e,t,s)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.USER_P_M=t.USER_M=void 0;const i=s(868);class o extends i.Model{}t.USER_M=o,o.init({id:{type:i.DataTypes.INTEGER,primaryKey:!0},u_id:{type:i.DataTypes.INTEGER,unique:!0},u_name:{type:i.DataTypes.STRING},phone:{type:i.DataTypes.STRING},head_url:{type:i.DataTypes.STRING},sex:{type:i.DataTypes.INTEGER,defaultValue:0},age:{type:i.DataTypes.INTEGER,defaultValue:1},integral:{type:i.DataTypes.INTEGER,defaultValue:0},lever:{type:i.DataTypes.INTEGER,defaultValue:0}},Object.assign({modelName:"pd_user"},i.rules));class n extends i.Model{}t.USER_P_M=n,n.init({id:{type:i.DataTypes.INTEGER,primaryKey:!0},u_id:{type:i.DataTypes.INTEGER},u_password:i.DataTypes.STRING},Object.assign(Object.assign({modelName:"pd_user_p"},i.rules),{timestamps:!1}))},868:function(e,t,s){"use strict";var i=s(108),o=this&&this.__createBinding||(Object.create?function(e,t,s,i){void 0===i&&(i=s);var o=Object.getOwnPropertyDescriptor(t,s);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[s]}}),Object.defineProperty(e,i,o)}:function(e,t,s,i){void 0===i&&(i=s),e[i]=t[s]}),n=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var s in e)"default"!==s&&Object.prototype.hasOwnProperty.call(e,s)&&o(t,e,s);return n(t,e),t},a=this&&this.__awaiter||function(e,t,s,i){return new(s||(s=Promise))((function(o,n){function r(e){try{u(i.next(e))}catch(e){n(e)}}function a(e){try{u(i.throw(e))}catch(e){n(e)}}function u(e){var t;e.done?o(e.value):(t=e.value,t instanceof s?t:new s((function(e){e(t)}))).then(r,a)}u((i=i.apply(e,t||[])).next())}))},u=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.mysql=t.sequelize=t.interfaces=t.rules=t.config=t.tools=t.Model=t.DataTypes=void 0;const c=u(s(645));t.config=c.default;const d=s(629);Object.defineProperty(t,"tools",{enumerable:!0,get:function(){return d.tools}});const l=r(s(150));t.interfaces=l;const f=s(496);Object.defineProperty(t,"Model",{enumerable:!0,get:function(){return f.Model}}),Object.defineProperty(t,"DataTypes",{enumerable:!0,get:function(){return f.DataTypes}});const p=u(s(993)).default;t.mysql=p;const y=s(496),_=c.default.mySQL,h=_.BASE,g=new y(_.DATABASE,d.tools.decrypt(_.USERNAME[h]),d.tools.decrypt(_.PASSWORD[h]),{host:_.HOST[h],dialect:"mysql",define:{freezeTableName:!0,createdAt:"create_time",updatedAt:"update_time"},timezone:"+08:00",logging:!0});t.sequelize=g,g.sync();const v={sequelize:g};t.rules=v,a(void 0,void 0,void 0,(function*(){try{yield g.authenticate(),i.log("链接成功",_.HOST[h])}catch(e){i.error("连接失败",e)}}))},123:(e,t,s)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.KEY=void 0;const i=s(868);class o extends i.Model{}t.KEY=o,o.init({u_key:{type:i.DataTypes.STRING,primaryKey:!0}},Object.assign(Object.assign({},i.rules),{modelName:"pd_key",timestamps:!1}))},380:function(e,t,s){"use strict";var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.distributionRouter=void 0;const o=i(s(821)),n=i(s(402));t.distributionRouter=e=>({mongo:o.default,mysql:n.default}[e])},821:function(e,t,s){"use strict";var i=this&&this.__awaiter||function(e,t,s,i){return new(s||(s=Promise))((function(o,n){function r(e){try{u(i.next(e))}catch(e){n(e)}}function a(e){try{u(i.throw(e))}catch(e){n(e)}}function u(e){var t;e.done?o(e.value):(t=e.value,t instanceof s?t:new s((function(e){e(t)}))).then(r,a)}u((i=i.apply(e,t||[])).next())}))},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const n=new(o(s(752)).default)({prefix:"/api"}),r=s(426),a=s(557),u=s(778),c=s(354),d=s(914);n.get("/getUserInfo",r.USER.getUserInfo).post("/createUserInfo",r.USER.createUserInfo).post("/update",r.USER.updateUserInfo).post("/delete",r.USER.deleteUserInfo).post("/login",r.USER.login).post("/updateUserInfo",r.USER.updateUserInfo).post("/upload",a.UPLOAD.upload).get("/encryption",u.TOOLS.encryption).get("/decrypt",u.TOOLS.decrypt).post("/createBlog",c.BLOG.createBlog).post("/userBlog",c.BLOG.userBlog).get("/startLog",d.SERVER_LOG.startLog).get("/bb",c.BLOG.trys).get("/",(e=>i(void 0,void 0,void 0,(function*(){e.body="DANKEBIBI"})))),t.default=n},402:function(e,t,s){"use strict";var i=this&&this.__awaiter||function(e,t,s,i){return new(s||(s=Promise))((function(o,n){function r(e){try{u(i.next(e))}catch(e){n(e)}}function a(e){try{u(i.throw(e))}catch(e){n(e)}}function u(e){var t;e.done?o(e.value):(t=e.value,t instanceof s?t:new s((function(e){e(t)}))).then(r,a)}u((i=i.apply(e,t||[])).next())}))},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const n=new(o(s(752)).default)({prefix:"/api"}),r=s(216),a=s(963),u=s(906);n.get("/getUserInfo",r.USER.getUserInfo).post("/createUserInfo",r.USER.createUser).post("/updateUserInfo",r.USER.updateUserInfo).post("/deleteUserInfo",r.USER.deleteUserInfo).post("/login",r.USER.login).post("/upload",a.TOOLS.upload).get("/encryption",a.TOOLS.encryption).get("/decrypt",a.TOOLS.decrypt).get("/getProjectInfo",a.TOOLS.getProjectInfo).post("/createBlog",u.BLOG.createBlog).post("/userBlog",u.BLOG.getUserBlog).post("/setBlogStarAndViews",u.BLOG.setBlogStarAndViews).post("/userCollectedTheBlog",u.BLOG.userCollectedTheBlog).post("/collectTheBlog",u.BLOG.collectTheBlog).post("/blogDetail",u.BLOG.blogDetail).get("/",(e=>i(void 0,void 0,void 0,(function*(){e.body="DANKEBIBI"})))),t.default=n},332:function(e,t,s){"use strict";var i=this&&this.__awaiter||function(e,t,s,i){return new(s||(s=Promise))((function(o,n){function r(e){try{u(i.next(e))}catch(e){n(e)}}function a(e){try{u(i.throw(e))}catch(e){n(e)}}function u(e){var t;e.done?o(e.value):(t=e.value,t instanceof s?t:new s((function(e){e(t)}))).then(r,a)}u((i=i.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.fail=t.response=void 0;const o=s(123);t.response=()=>(e,t)=>i(void 0,void 0,void 0,(function*(){const{pd_key:s}=e.request.header;(yield((e,t)=>i(void 0,void 0,void 0,(function*(){return!!(yield o.KEY.findOne({where:{u_key:e}}))||(t.response.status=996,t.body={code:0,tip:"应用未绑定"},!1)})))(s,e))&&(e.success=(t,s)=>{e.response.status=200,e.body={code:1,tip:t,data:s}},e.fail=(t,s)=>{e.response.status=s||501,e.body={code:0,tip:t}},yield t())})),t.fail=()=>(e,t)=>i(void 0,void 0,void 0,(function*(){try{e.body||(e.body={code:404,tip:"by DANKEBIBI @ node-api-server 服务"}),yield t()}catch(t){e.body={code:504,tip:"请求出错"},e.status=504}}))},895:function(e,t,s){"use strict";var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.TIMER=void 0;const o=i(s(344));t.TIMER=e=>{o.default.scheduleJob("10 * * * * *",(()=>{e()}))}},189:function(e,t,s){"use strict";var i=s(108),o=this&&this.__awaiter||function(e,t,s,i){return new(s||(s=Promise))((function(o,n){function r(e){try{u(i.next(e))}catch(e){n(e)}}function a(e){try{u(i.throw(e))}catch(e){n(e)}}function u(e){var t;e.done?o(e.value):(t=e.value,t instanceof s?t:new s((function(e){e(t)}))).then(r,a)}u((i=i.apply(e,t||[])).next())}))},n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.OSS=void 0;const r=n(s(645)),a=s(629),u=new(s(543))({region:r.default.aliOss.region,accessKeyId:a.tools.decrypt(r.default.aliOss.accessKeyId),accessKeySecret:a.tools.decrypt(r.default.aliOss.accessKeySecret),bucket:r.default.aliOss.bucket});class c{static ossList(){return o(this,void 0,void 0,(function*(){try{return yield this.client.listBuckets()}catch(e){return!1}}))}static upload(e,t){return o(this,void 0,void 0,(function*(){try{return yield this.client.put(e,t)}catch(e){i.log(e)}}))}}t.OSS=c,c.client=u},645:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={projectName:"photo_base",name:"pb",host:"47.115.218.121",port:8080,version:"1.0.1",useDB:"mysql",aliOss:{bucket:"pd-base",region:"oss-cn-heyuan",accessKeyId:"yyDKEqqDKEppDKEssDKEKKDKEWWDKEzzDKEccDKEXXDKEyyDKENNDKEjjDKEppDKE89040DKEppDKECCDKEppDKEZZDKEggDKE55650DKERRDKEZZDKEGGDKEOODKE70DKE159",accessKeySecret:"DDDKERRDKEeeDKERRDKEddDKE174168DKEffDKEssDKE304794DKEvvDKEddDKEccDKEHHDKECCDKEccDKEUUDKEYYDKEBBDKExxDKErrDKEiiDKEAADKEuuDKE217710DKEVVDKEhhDKEqqDKEggDKEvvDKEKKDKE59DKE738",path:"https://pd-base.oss-cn-heyuan.aliyuncs.com/"},mongoDB:{is_local:!1,user:0,user_name:["ggDKEllDKEllDKEiiDKE157DKE988","iiDKEvvDKEeeDKEiiDKEvvDKEhhDKE-DKEwwDKEkkDKE494DKE955"],password:"2153604DKE717868DKE1794670DKE0DKEvvDKEppDKEmmDKEzzDKEWWDKE911DKE394",dbHost:"27017",dataBase:"photo_base",rules:{useNewUrlParser:!0,useUnifiedTopology:!0,authSource:"admin"}},mySQL:{is_local:!0,BASE:0,HOST:["47.115.218.121","localhost"],USERNAME:["ggDKEllDKEllDKEiiDKE459DKE789","ggDKEllDKEllDKEiiDKE459DKE789"],PASSWORD:["1514688DKE504896DKE1262240DKE0DKEvvDKEppDKEmmDKEzzDKEWWDKE368DKE686","ggDKEllDKEllDKEiiDKE459DKE789"],dbHost:"3306",DATABASE:"pd-base"}}},150:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0})},140:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.formatString=void 0,t.formatString=e=>({a:"ZZ",b:"YY",c:"XX",d:"WW",e:"VV",f:"UU",g:"TT",h:"SS",i:"RR",j:"QQ",k:"PP",l:"OO",m:"NN",n:"MM",o:"LL",p:"KK",q:"JJ",r:"II",s:"HH",t:"GG",u:"FF",v:"EE",w:"DD",x:"CC",y:"BB",z:"AA",A:"zz",B:"yy",C:"xx",D:"ww",E:"vv",F:"uu",G:"tt",H:"ss",I:"rr",J:"qq",K:"pp",L:"oo",M:"nn",N:"mm",O:"ll",P:"kk",Q:"jj",R:"ii",S:"hh",T:"gg",U:"ff",V:"ee",W:"dd",X:"cc",Y:"bb",Z:"aa",ZZ:"a",YY:"b",XX:"c",WW:"d",VV:"e",UU:"f",TT:"g",SS:"h",RR:"i",QQ:"j",PP:"k",OO:"l",NN:"m",MM:"n",LL:"o",KK:"p",JJ:"q",II:"r",HH:"s",GG:"t",FF:"u",EE:"v",DD:"w",CC:"x",BB:"y",AA:"z",zz:"A",yy:"B",xx:"C",ww:"D",vv:"E",uu:"F",tt:"G",ss:"H",rr:"I",qq:"J",pp:"K",oo:"L",nn:"M",mm:"N",ll:"O",kk:"P",jj:"Q",ii:"R",hh:"S",gg:"T",ff:"U",ee:"V",dd:"W",cc:"X",bb:"Y",aa:"Z"}[e])},629:function(e,t,s){"use strict";var i=this&&this.__awaiter||function(e,t,s,i){return new(s||(s=Promise))((function(o,n){function r(e){try{u(i.next(e))}catch(e){n(e)}}function a(e){try{u(i.throw(e))}catch(e){n(e)}}function u(e){var t;e.done?o(e.value):(t=e.value,t instanceof s?t:new s((function(e){e(t)}))).then(r,a)}u((i=i.apply(e,t||[])).next())}))},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.tools=void 0;const n=o(s(645)),r=s(140),a=s(167).default;t.tools=class{static date(){const e=new Date;return`${e.getFullYear()}-${e.getMonth()+1}-${e.getDate()}  ${e.getHours()}:${e.getMinutes()}:${e.getSeconds()}`}static version(){return n.default.version}static _version(){return n.default.version.replace(/\./gm,"")}static encryption(e){const t=Math.floor(999*Math.random()),s=Math.floor(999*Math.random());return(e=>{let i=e.split(""),o=i.reverse();return o.forEach(((e,i)=>{e>=0&&(o[i]=String(e*t*s)),/^[a-z]*$/g.test(e)&&(o[i]=(0,r.formatString)(e.toUpperCase())),/^[A-Z]*$/g.test(e)&&(o[i]=(0,r.formatString)(e.toLowerCase())),"%"==e&&(o[i]="DKEBIBI")})),i.push(String(t)),i.push(String(s)),o.join("DKE")})(e)}static decrypt(e){return(t=>{let s=e.split("DKE").reverse();return s.forEach(((e,t)=>{t>1&&(e>=0&&(s[t]=String(e/s[0]/s[1])),/^[a-z]*$/g.test(e)&&(s[t]=(0,r.formatString)(e.toUpperCase())),/^[A-Z]*$/g.test(e)&&(s[t]=(0,r.formatString)(e.toLowerCase())),"DKEBIBI"==e&&(s[t]=""))})),s.splice(0,2),s.join("")})()}static getConfig(){return n.default}static startLog(e){return i(this,void 0,void 0,(function*(){yield a.get(`http://localhost:8080/api/startLog?msg=启动${e}`)}))}}},543:e=>{"use strict";e.exports=require("ali-oss")},84:e=>{"use strict";e.exports=require("assert")},167:e=>{"use strict";e.exports=require("axios")},406:e=>{"use strict";e.exports=require("koa")},4:e=>{"use strict";e.exports=require("koa-body")},731:e=>{"use strict";e.exports=require("koa-cors")},752:e=>{"use strict";e.exports=require("koa-router")},97:e=>{"use strict";e.exports=require("koa-static")},185:e=>{"use strict";e.exports=require("mongoose")},993:e=>{"use strict";e.exports=require("mysql2")},344:e=>{"use strict";e.exports=require("node-schedule")},496:e=>{"use strict";e.exports=require("sequelize")},464:e=>{"use strict";e.exports=require("util")},147:e=>{"use strict";e.exports=require("fs")},17:e=>{"use strict";e.exports=require("path")}},t={};!function s(i){var o=t[i];if(void 0!==o)return o.exports;var n=t[i]={exports:{}};return e[i].call(n.exports,n,n.exports,s),n.exports}(607)})();