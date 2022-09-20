import app from "./app.js";
import chalk from 'chalk';

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(chalk.blue(`Server is listening on port ${PORT}.`));
});
