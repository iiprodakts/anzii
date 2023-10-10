


export default  {

    development: {

        database: [

            {

                name: 'mysql',
                connect: {

                    host: "localhost",
                    user: "anzii",
                    name: "anzii",
                    pass: "19900323"

                }

            }
        ]

    },
    staging: {

        database:{

            mysql: {

                host: 'mysql://user:pass@us-cdbr-east.cleardb.com',
                name: 'heroku_4a1dc3673c4114d '
            } 
        }

    },
    production:{

        database: {

            mysql: {

                host: 'mysql://user:pass@us-cdbr-east.cleardb.com',
                name: 'heroku_4a1dc3673c4114d '

            }
        }

        
    }
}