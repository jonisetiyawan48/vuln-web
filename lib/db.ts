import mysql, { type ResultSetHeader, type RowDataPacket } from 'mysql2/promise';

const pool = mysql.createPool({
  host: process.env.DB_HOST || '127.0.0.1',
  port: Number(process.env.DB_PORT || 3306),
  database: process.env.DB_NAME || 'koperasi',
  user: process.env.DB_USER || 'koperasi',
  password: process.env.DB_PASSWORD || 'koperasi_dev_password',
  waitForConnections: true, connectionLimit: 10, queueLimit: 0,
});
export type DBRow = RowDataPacket;
export { pool };
export async function query<T extends RowDataPacket[] = RowDataPacket[]>(sql: string, params: unknown[] = []) { const [rows] = await pool.execute<T>(sql, params); return rows; }
export async function unsafeQuery<T extends RowDataPacket[] = RowDataPacket[]>(sql: string) { const [rows] = await pool.query<T>(sql); return rows; }
export async function execute(sql: string, params: unknown[] = []) { const [result] = await pool.execute<ResultSetHeader>(sql, params); return result; }
export const labMode = process.env.LAB_MODE !== 'false';
