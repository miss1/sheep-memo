export const QUERY_USERS = 'select * from login'
export const QUERY_SPECIAL_DAYS = 'select * from special order by time desc'
export const QUERY_SPECIAL_DAYS_Timeline = 'select * from special where type != 1 order by time asc'
export const QUERY_LETTERS = 'select * from letter order by time desc'