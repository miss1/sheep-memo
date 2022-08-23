import initSqlJs from 'sql.js';
import moment from 'moment'
import { QUERY_USERS, QUERY_SPECIAL_DAYS } from './sql'

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

export function queryAllSpecialDay () {
  let res = db.exec(QUERY_SPECIAL_DAYS);
  if (!res || res.length === 0) return [];
  let keys = res[0].columns;
  let data = res[0].values;
  return data.map(val => {
    let d = {};
    for (let i = 0; i < keys.length; i++) {
      d[keys[i]] = val[i];
    }
    if (d.type === 1) {
      d.duration = '';
      d.days = moment(d.time).diff(moment(), 'days');
    } else {
      let { _data } = moment.duration(moment().diff(moment(d.time)));
      d.duration = _data.years + ' Years ' + _data.months + ' Month ' + _data.days + ' Day';
      d.days = moment().diff(moment(d.time), 'days');
    }
    return d;
  })
}