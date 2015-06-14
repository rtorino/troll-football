## Senior JS developer competency test

#### Task 1. Floats.

- [ ] Please explain why this code `console.log(0.1 + 0.2 == 0.3);` outputs `false` in console? 
- [ ] Please suggest fix to make this expression working as expected.

#### Task 2. Sum function.

- [ ] Write a `sum` function which will work properly when invoked using either syntax below: 

```javascript
console.log(sum(2,3)); // Outputs 5 
console.log(sum(2)(3)); // Outputs 5
``` 

- [ ] Make the function working for any number of arguments.

#### Task 3. Loops.

Consider you have code snippet like this: 

```javascript
for (var i = 0; i < 5; i++) {
  var btn = document.createElement('button');
  btn.appendChild(document.createTextNode('Button ' + i));
  btn.addEventListener('click', function(){ console.log(i); });
  document.body.appendChild(btn);
}
```

- [ ] What will be the output when user clicks on `Button 1` and why? 
- [ ] Please, suggest a fix to get the expected behavior.

#### Task 4. Cache buster function.

Write a JS function `cachebuster`. 
- [ ] The function should return the same unique value during 5 minutes, another one unique value during next 5 minutes and so on. 
The actual value can be any string. 
- [ ] Please implement the simplest possible solution (less code is better).


```javascript
function cachebuster() {
    // Your code here
}
setInterval(function(){console.log(cachebuster())}, 60 * 1000); 

```

#### Task 5. Angular JS app.

Create account at http://www.football-data.org/. 
Use [the API](http://api.football-data.org/docs/latest/index.html) to build simple Angular JS application.

See below the API endpoints you need to use:

- [ ] `GET http://api.football-data.org/alpha/soccerseasons`: Returns the list of seasons.
- [ ] `GET http://api.football-data.org/alpha/soccerseasons/{season_id}/fixtures`: Returns results of the matches in a specific season.
 
Please implement 2 page screens:

- [ ] `Seasons list`: List of all seasons and button which follow to a season results.
- [ ] `Season results`: Table with the season results. 

Please implement search filter on the `Season results` page: 

- [ ] The filter should consider `Team A` and `Team B` columns. 
- [ ] It must be applied only if the input length is more than 3 characters. 
- [ ] It must highlight all matches in the table (by applying background color).   

You can use [the app mockups](https://www.dropbox.com/s/bn3y6ut7rc24apg/Mocks.zip?dl=0). 

## Instructions

- Please clone this repo in a new `Bitbucket` (or `GitHub`) private repo.
- Edit `README.md` file to provide answers on tasks `Tasks 1-4`. 
- Implement Angular JS app described in `Task 5` and push changes in your repo.
- Please grant access to your private repo for a GH or BitBucket user `tyomo4ka` so we can review your work. 

We suppose this test require from 2 to 3 hours. Thanks in advance for your time spent on this test! 
