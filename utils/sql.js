//query
const QUERY_TABLE = (tablename) => `SELECT * FROM ${tablename}`;

//del
const INSERT_TABLE = (tablename, {
    key,
    val
}) => `INSERT INTO ${tablename} (${key}) VALUES (${val})`;
//add
const UPDATE_TABLE = (tablename, {
    pkey,
    pval
}, {
    key,
    val
}) => `UPDATE ${tablename} SET ${key}=${val} WHERE (${pkey}=${pval})`;
//edit
const DELETE_TABLE = (tablename, {
    pkey,
    pval
}) => `DELETE FROM ${tablename} WHERE (${pkey}=${pval})`;

module.exports = {
    QUERY_TABLE,
    INSERT_TABLE,
    UPDATE_TABLE,
    DELETE_TABLE
}