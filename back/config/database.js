module.exports = {
    "development": {
        "username": "postgres",
        "password": "root",
        "database": "postgres_dev",
        "host": "localhost",
        "dialect": "postgres"
    },
    "test": {
        "dialect": "sqlite",
        "storage": "data/test-db.sqlite3"
    },
    "production": {
        "username": "user_postgres",
        "password": "senha",
        "database": "nome_db",
        "host": "localhost",
        "dialect": "postgres"
    }
}