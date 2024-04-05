
const pool = require("../pool");
const { toCamelCase } = require("../utils/to-camel-case");


class BlogRepo {

    /// FETCH
    static async find() {
        const {rows} = await pool.query(`SELECT * FROM blogs;`);
        return toCamelCase(rows);
    }

    /// Fetch By Category
    static async findByCategory(cat) {
        const {rows} = await pool.query(`SELECT * FROM blogs WHERE category = '${cat}';`);
        return toCamelCase(rows);
    }

    /// FETCH BY ID
    static async findById(id) {
        const {rows} = await pool.query(`SELECT * FROM blogs WHERE id = $1;`,[id]);

        return toCamelCase(rows)[0];
    }

    /// CREATE
    static async create(title,imageUrl,description,category) {
        const {rows} = await pool.query(`INSERT INTO blogs (title,imageUrl,description,category)VALUES ($1,$2,$3,$4) RETURNING *`, [title,imageUrl,description,category])

        return toCamelCase(rows)[0];
    }

    /// UPDATE
    static async update(id,title,imageUrl,description,category) {
        const {rows} = await pool.query(`UPDATE blogs SET title = $1, imageUrl= $2, description = $3, category = $4 WHERE id = $5 RETURNING *`, [title,imageUrl,description,category,id])

        return toCamelCase(rows)[0];
    
    }

    /// DELETE
    static async delete(id) {
        const {rows} = await pool.query(`DELETE FROM blogs WHERE id = $1 RETURNING *`,[id])

        return toCamelCase(rows)[0];
    }

}

module.exports = BlogRepo;