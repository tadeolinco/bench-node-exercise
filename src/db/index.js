import pg from 'pg'

const pool = new pg.Pool({
  user: 'cbkuakvrfrrciu',
  host: 'ec2-23-21-162-90.compute-1.amazonaws.com',
  database: 'd7la61fqjg2sou',
  password: '78fa3ce70abc039fdc025dc6259b4a05428180a04428d11d17eb804b2d76d6b5',
  port: 5432,
})
console.log('Successfully connected to DB')

export const query = (text, params) => pool.query(text, params)
