import initSqlJs from 'sql.js';
import { QUERY_USERS } from './sql'

let db = null;

export async function connectDB () {
  try {
    const sqlPromise = initSqlJs({locateFile: () => 'database/sql-wasm.wasm'});
    const dataPromise = fetch('database/data.db').then(res => res.arrayBuffer());
    const [SQL, buf] = await Promise.all([sqlPromise, dataPromise]);
    db = new SQL.Database(new Uint8Array(buf));
    return Promise.resolve();
  } catch (err) {
    console.log(err)
    return Promise.reject();
  }
}

export function checkPassword () {
  let res = db.exec(QUERY_USERS);
  return {id: res[0].values[0][0], password: res[0].values[0][1] + ''}
}

export function queryData (sql) {
  let res = db.exec(sql);
  if (!res || res.length === 0) return [];
  let keys = res[0].columns;
  let data = res[0].values;
  return data.map(val => {
    let d = {};
    for (let i = 0; i < keys.length; i++) {
      d[keys[i]] = val[i];
    }
    return d;
  })
}