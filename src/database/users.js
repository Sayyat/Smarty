import executeQuery from './db'

export async function getUsers() {
    // check if user already authorized
    const selectQuery = await executeQuery("select * from users;", [])

    // sql query result has no error
    if (selectQuery.error) {
       return [];
    }

    return selectQuery.result
}