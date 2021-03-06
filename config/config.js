module.exports = {
    "development": {
        "username": "root",
        "password": "root",
        // "port": 8889,
        "database": "seeds_db",
        "host": "127.0.0.1",
        "dialect": "mysql"
    },
    "test": {
        "username": "root",
        "password": "root",
        // "port": 8889,
        "database": "database_test",
        "host": "127.0.0.1",
        "dialect": "mysql"
    },
    "production": {
        "username": process.env.DB_USER || "root",
        "password": process.env.DB_Password || "root",
        "database": process.env.DB_Database || "database_production",
        "host": process.env.DB_Host || "127.0.0.1",
        "dialect": "mysql"
    }
}