import { neon } from '@neondatabase/serverless';
import 'dotenv/config';
export const sql = neon(process.env.URL);
if (!sql) {
    console.log('Database connection failed');
}
else {
    console.log('Database connection successful');
}
//# sourceMappingURL=db.js.map