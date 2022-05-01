// const Config = require('../../config/default');
// const MySQL = require('mysql2/promise');
// const _execute = Symbol('execute');
// let _instance;

// class DbFactory {
//     constructor() {
//         if(_instance) return _instance;

//         this.writePool = MySQL.createPool(Config.db);
//         this.readPool = null;
//         if(Config.rdb.length) {
//             let idx_rdb = Math.floor(Math.random() * Config.rdb.length);
//             this.readPool = MySQL.createPool(Config.rdb[idx_rdb]);
//         } else {
//             this.readPool = MySQL.createPool(Config.rdb);
//         }
//         _instance = this;   
//     }

//     async read(query: string, value) {
//         try {
//             return await this[_execute](this.readPool, query, value);
//         } catch (error) {
//             return Promise.reject(error);
//         }
//     }

//     async readFromMaster(query: string, value) {
//         try {
//             console.log('readFromMaster: [query]: ', query);
//             return await this[_execute](this.writePool, query, value);
//         } catch (error) {
//             return Promise.reject(error);
//         }
//     }

//     async create(query: string, value) {
//         try {
//             return await this[_execute](this.writePool, query, value);
//         } catch (error) {
//             return Promise.reject(error);
//         }
//     }

//     async update(query: string, value) {
//         try {
//             return await this[_execute](this.writePool, query, value);
//         } catch (error) {
//             return Promise.reject(error);
//         }
//     }
//     async delete(query: string, value) {
//         try {
//             return await this[_execute](this.writePool, query, value);
//         } catch (error) {
//             return Promise.reject(error);
//         }
//     }

//     async beginTransaction() {
//         let connection = null;
//         try {
//             const cur_pool = this.writePool;
//             connection = await cur_pool.getConnection();
//             await connection.beginTransaction();

//             return connection;
//         } catch(err) {
//             connection.release();
//             console.log(`beginTransaction Error`);
//             console.error(`beginTransaction Error`);
//             throw err;
//         }
//     }

//     async executeWithTrans(connection, query, value) {
//         try {
//             const [rows, fields] = await connection.execute(query: string, value);
//             connection.unprepare(query);
//             return Promise.resolve(rows);
//         } catch(err) {
//             await connection.rollback();
//             connection.release();
//             console.log(`executeWithTrans Error`);
//             console.error(`executeWithTrans Error`);
//             throw err;
//         }
//     }

//     async rollbackTransaction(connection) {
//         try {
//             await connection.rollback();
//             connection.release();

//             return Promise.resolve(true);
//         } catch(err) {
//             connection.release();
//             console.log(`rollbackTransaction Error`);
//             console.error(`rollbackTransaction Error`);
//             throw err;
//         }
//     }

//     async commitTransaction(connection) {
//         try {
//             await connection.commit();
//             connection.release();

//             return Promise.resolve(true);
//         } catch(err) {
//             connection.release();
//             console.log(`commitTransaction Error`);
//             console.error(`commitTransaction Error`);
//             throw err;
//         }
//     }

//     async [_execute] (dbPool, query, value) {
//         let connection = null;
//         try {
//             // create the connection
//             connection = await dbPool.getConnection();
//             let [rows, fields] = await connection.execute(query: string, value);
//             connection.unprepare(query);
//             connection.release();
//             return Promise.resolve(rows);

//         } catch (Exception) {
//             console.log("DB Error", Exception);
//             console.error("QUERY: ", query);
//             console.error("PARAMS: ", value);
//             if (connection) {
//                 connection.release();
//             }
//             return Promise.reject(Exception);
//         }
//     }
// }

// module.exports = new DbFactory();