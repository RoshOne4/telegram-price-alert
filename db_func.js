import sqlite3 from 'sqlite3';

sqlite3.verbose()

class Database {

	//Create and/or open DB
	constructor(dbName) {
		this.db = new sqlite3.Database(`./${dbName}.db`, (err) => {
		  if (err)
		    console.error(err.message);
		  console.log('Connected to the chinook database.');
		});
	}

	//Create table
	createTable = (table) => {
		this.db.serialize(() => {
			this.db.run(`CREATE TABLE ${table} (symbol TEXT, price NUMBER)`);
		});
	}

	//Insert data in table
	insertData(table, symbol, price) {
		this.db.serialize(() => {
			this.db.run(`INSERT INTO ${table} VALUES ('${symbol}', '${price}');`);
		});
	}

	//Show table
	showTable(table) {
		this.db.serialize(() => {
			this.db.each(`SELECT * FROM ${table};`, (err, row) => {
		    console.log(row);
  		});
		});
	}

	//Close DB connection
	closeConnection() {
		this.db.close();
	}

}

export default Database;