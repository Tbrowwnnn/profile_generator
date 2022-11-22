const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your first name? ', (answer1) => {
  rl.question('Do you have any hobbies? ', (answer2) => {
    rl.question('How many years have you been doing that? ', (answer3) => {
      rl.question('What is your favourite food? ', (answer4) => {
        rl.question('What is your favourite video game? ', (answer5) => {
          rl.question('How many hours have you put into it? ', (answer6) => {

            console.log(`Thank you: ${answer1}\nYour favourite hobby is: ${answer2}\nYou have been doing that for: ${answer3} years\nYour favourite food is: ${answer4}\nFavourite video game: ${answer5}\nHours of your life wasted: ${answer6}`);

            rl.close();
          });
        });
      });
    });
  });
});


