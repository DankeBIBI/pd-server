export default {
    projectName: 'photo_base',
    name: 'pb',
    host: '47.115.218.121',
    port: 8080,
    version: '1.0.1',
    aliOss: {
        bucket:'pd-base',
        region:'oss-cn-heyuan',
        accessKeyId: 'yyDKEqqDKEppDKEssDKEKKDKEWWDKEzzDKEccDKEXXDKEyyDKENNDKEjjDKEppDKE89040DKEppDKECCDKEppDKEZZDKEggDKE55650DKERRDKEZZDKEGGDKEOODKE70DKE159',
        accessKeySecret: 'DDDKERRDKEeeDKERRDKEddDKE174168DKEffDKEssDKE304794DKEvvDKEddDKEccDKEHHDKECCDKEccDKEUUDKEYYDKEBBDKExxDKErrDKEiiDKEAADKEuuDKE217710DKEVVDKEhhDKEqqDKEggDKEvvDKEKKDKE59DKE738'
    },
    mongoDB: {
        is_local: false,
        user: 0,
        user_name: [
            'ggDKEllDKEllDKEiiDKE157DKE988',
            'iiDKEvvDKEeeDKEiiDKEvvDKEhhDKE-DKEwwDKEkkDKE494DKE955'
        ],
        password: '2153604DKE717868DKE1794670DKE0DKEvvDKEppDKEmmDKEzzDKEWWDKE911DKE394',
        dbHost: '27017',
        dataBase: 'photo_base',
        rules: { useNewUrlParser: true, useUnifiedTopology: true, authSource: 'admin' }
    },
    mySQL:{
        is_local: true,
        user: 0,
        user_name: [
            'ggDKEllDKEllDKEiiDKE491DKE411',
        ],
        password: 'ggDKEllDKEllDKEiiDKE491DKE411',
        dbHost: '3306',
        dataBase: 'pd-base',
        rules: { useNewUrlParser: true, useUnifiedTopology: true, authSource: 'admin' }
    }
}