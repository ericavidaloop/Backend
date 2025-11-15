import pool from '../config/db.js';

export const getBooks = async () =>{
    const[rows] = await pool.query('SELECT * FROM tbl');
    return rows;
}

export const insertBook = async (title, genre, status) => {
    const [result] = await pool.query(
        "INSERT INTO tbl (title, genre, status) VALUES (?, ?, ?)",
        [title, genre, status]
    );
    return result.insertId;
};

export const updateBook = async (title, genre, status, booksId) => {
    const [result] = await pool.query(
        "UPDATE tbl SET title = ?, genre = ?, status = ? WHERE id = ?",
        [title, genre, status, booksId]
    );
    return result.affectedRows;
};

export const deleteBook = async (booksId) => {
    const [result] = await pool.query(
        "DELETE FROM tbl WHERE id = ?",
        [booksId]
    );
    return result.affectedRows;
};


