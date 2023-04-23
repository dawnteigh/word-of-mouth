# Word of Mouth v 1.0

Do you ever look at reviews before deciding where to go to eat out? What if you are in the mood for a specific dish, and you want to know which restaurant does it best? With reviews typically being centered around the restaurant or the reviewer's experience as a whole, you may be in for a whole lot of searching. Word of Mouth aims to answer your culinary query a whole lot faster. Search our database of meal reviews from other users to find the best chicken parmesan in town, or be a trailblazer for others and write your own reviews. On the other side, restaurants can use the reviews and user feedback to fine-tune their menus, retaining more popular dishes over ones that rate poorly. Version 1.0 features crowd-sourced restaurants and meals.

## Requirements
- [Ruby](https://www.ruby-lang.org/en/downloads/)
- [Bundler](https://bundler.io/)
- [NodeJS & npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
- [postgreSQL](https://www.postgresql.org/download/)

## Installation
- In this application's GitHub repo, click the fork button to create a copy for yourself. Next, in your own fork, click the 'Code' button, make sure SSH is selected, and copy what's there.<br>
- Head into your CLI (Command Line Interface) and navigate to the directory where Word of Mouth will live. Then run the following commands in order:
```shell
~your-computer/cool-apps$ git clone (the SSH you copied)
~your-computer/cool-apps$ cd word-of-mouth
~your-computer/cool-apps/word-of-mouth$ bundle install
~your-computer/cool-apps/word-of-mouth$ npm install --prefix client
~your-computer/cool-apps/word-of-mouth$ sudo service postgresql start
``` 
If the last command gives you issues, make sure you have postgreSQL installed with:
```shell
psql --version
```
If you need additional help or instructions, you can go [here](https://docs.microsoft.com/en-us/windows/wsl/tutorials/wsl-database#install-postgresql) for WSL or [here](https://www.codementor.io/@engineerapart/getting-started-with-postgresql-on-mac-osx-are8jcopb) for OSX.

## Usage
If you've installed Word of Mouth on your machine using the instructions above, you're going to need two terminals open.
In the first one, type:
```shell
~your-computer/cool-apps/word-of-mouth$ rails s
```
This will start the back end on http://localhost:3001. And for the front end (running on http://localhost:4000), the command is:
```shell
~your-computer/cool-apps/word-of-mouth$ npm start --prefix client
```
Using Word of Mouth is pretty straightforward; you will be directed to log in or sign up, and then afterwards you'll see the Home page and a navigation bar from which you can manage your reviews, seek out a specific meal, or create a new review. 
<br><br>

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## Roadmap
Obviously, a whole lot of work is left to be done to transform this side project into a legitimate app. Those goals will be outlined here.
Future additions/changes:

- Use real-world location data for restaurants

- Users can find the restaurants nearest them after providing their location

- Incorporate restaurant menus

- Fleshed out user profiles and interactions (friends lists, activity feed)

- Add user email for password recovery and such.

- Ready-made rewards program, based on visits, that restaurants can utilize 

- Image uploading for reviews

- Better looking UI. Flexible and comprehensive styling for different viewports.

## Acknowledgements
- Word of Mouthutilizes styled components from [Semantic UI React](https://react.semantic-ui.com/).
- Application front end created using [Create React App](https://create-react-app.dev/).


## License
[MIT](https://choosealicense.com/licenses/mit/)

