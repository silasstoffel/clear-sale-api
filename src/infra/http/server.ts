import { app } from './app';

const HOST = process.env.HOST || 'http://localhost';
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`⚡️[clear-sale-api]: Server is running at ${HOST}:${PORT}`);
});