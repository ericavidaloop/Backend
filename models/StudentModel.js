import pool from '../config/db.js';

export const getStudent = async () =>{
    const[rows] = await pool.query("SELECT * FROM `tblstudent`");
    return rows;
}

export const insertStudent = async (id, name, srcode, course) => {
    const [result] = await pool.query(
        "INSERT INTO tblstudent (name, srcode, course) VALUES (?, ?, ?)",
        [id, name, srcode, course]
    );
    return result.insertId;
};

export const updateStudent = async (id, name, srcode, course, studentId) => {
    const [result] = await pool.query(
        "UPDATE tblstudent SET name = ?, genre = ?, status = ? WHERE id = ?",
        [id, name, srcode, course, studentId]
    );
    return result.affectedRows;
};

export const deleteStudent = async (studentId) => {
    const [result] = await pool.query(
        "DELETE FROM tblstudent WHERE id = ?",
        [studentId]
    );
    return result.affectedRows;
};