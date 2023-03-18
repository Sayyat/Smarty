import executeQuery from './db'

export async function register(phoneNumber, firstname, lastname) {
    // check if user already authorized
    const loginQuery = await executeQuery(`select * from users where phoneNumber = '${phoneNumber}';`, [])

    // sql query result has no error, and we have found user in database
    if (!loginQuery.error && loginQuery.result.length > 0) {
        if (loginQuery.result.length > 1) {
            console.log("There are more than 1 user in table users")
        }
        return loginQuery.result[0]
    }
    // sql query result has some error, or we did not find user in database
    const signUpQuery = await executeQuery(`insert into users (phoneNumber, firstname, lastname) values ('${phoneNumber}','${firstname}','${lastname}');`, [])

    const id = signUpQuery.result.insertId

    return {
        id: id,
        phoneNumber: phoneNumber,
        firstname: firstname,
        lastname: lastname
    }
}