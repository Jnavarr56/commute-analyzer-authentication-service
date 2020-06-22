import app from './app';
import * as dotenv from 'dotenv';

dotenv.config();

const PORT: string | undefined = process.env.PORT;

if (!PORT) {
	throw new Error('Missing PORT specification');
}

app.listen(PORT, () => {
	console.log(`authentication-service running on port ${PORT}!`);
});
