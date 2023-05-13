import sqlite3 from 'sqlite3';
import Database from './db_func.js';

const DB_NAME = 'database'

const db = new Database(DB_NAME);

// db.createTable('test');
db.insertData('test', 'BTC/USDT', 25468);
db.showTable('test');
db.closeConnection();