const connect = require("./db/connection")
const moment = require('moment'); // require

async function getAll() {
  const sql = `SELECT posts.*, user.name FROM EspiritoSanto.posts
  INNER JOIN EspiritoSanto.user ON posts.user_id=user.user_id`

  const [result] = await (await connect()).query(sql)
  return result
}

const getAllByID = async (id) => {
  const [[result]] = await (await connect()).query('SELECT * FROM  posts WHERE posts_id =?', [id])

  return result
}

const newPost = async (title, date, milagres, user_id) => {
  const convtDate = moment(date).format('YYYY-MM-DD HH:MM:SS')

  const [{ insertId }] = await (await connect()).query(
    'INSERT INTO posts (title, user_id, date, milagres) VALUE (?,?,?,?)',
    [title, user_id, convtDate, milagres],
  );
  return { posts_id: insertId,  title, user_id, date, milagres };
};

const deletePost = async (id) => {
  await (await connect()).query('DELETE FROM posts WHERE posts_id =?', [id])
}

const updatePost = async (title, date, milagres, id, user_id) => {
   const idFull = Number(id)
  const convtDate = moment(date).format()

  await (await connect()).query(
    'UPDATE posts set title = ?, user_id = ?, date = ?, milagres = ? WHERE posts_id = ?',
    [title, user_id, convtDate, milagres, id],
  )
  return { posts_id: idFull, title, user_id, date, milagres }
}

module.exports = {
  getAll,
  newPost,
  getAllByID,
  deletePost,
  updatePost,
}