import executeQuery from './db'

export async function getAllImages() {
    // check if user already authorized
    const selectQuery = await executeQuery("select * from images;", [])

    // sql query result has no error
    if (selectQuery.error) {
        return [];
    }

    return selectQuery.result
}
export async function uploadImage({userId,extension,caption, base64data}) {
    // base64data = "Hello"
    // check if user already authorized
    const query = await executeQuery("insert into images(userId,extension,caption, base64data) values (?, ?, ?, ?);", [userId, extension, caption, base64data])

    // sql query result has no error
    if (query.error) {
        return false;
    }

    return true
}

