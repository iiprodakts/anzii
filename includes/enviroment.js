


export default = {

    development: {

        database: {

            mysql: {

                host: "localhost",
                dbname: "kokapix"

            }
        }

    },
    staging: {

        database:{

            mysql: {

                host: 'mysql://user:pass@us-cdbr-east.cleardb.com',
                dbname: 'heroku_4a1dc3673c4114d '
            } 
        }

    },
    production:{

        mysql: {

            host: 'mysql://user:pass@us-cdbr-east.cleardb.com',
            dbname: 'heroku_4a1dc3673c4114d '
        }
    }
}