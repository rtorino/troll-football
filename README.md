## Senior JS developer competency test

#### Task 1. Floats.

- [X] Please explain why this code `console.log(0.1 + 0.2 == 0.3);` outputs `false` in console?
* **Answer:** This code output `false` because numbers in JavaScript are all treated with floating point precision.
- [X] Please suggest fix to make this expression working as expected.
* **Answer:** To fix this, we need to post-process the result. There are several ways to post-process but I found following method to be the most accurate:

```javascript
Math.round(parseFloat((0.30000000000000004 * Math.pow(10, 2)).toFixed(2))) / Math.pow(10, 2);
```

#### Task 2. Sum function.

- [X] Write a `sum` function which will work properly when invoked using either syntax below:

```javascript
function sum(a, b) {
  if (b !== undefined) {
    return a + b;
  } else {
    return function(b) {
      return a + b;
    };
  }
}

console.log(sum(2,3)); // Outputs 5
console.log(sum(2)(3)); // Outputs 5
```

- [X] Make the function working for any number of arguments.
* **Answer:** Currying. We need to curry the `sum` function so we can make it work with any number of parameters.

```javascript
function curry(fx) {
  var arity = fx.length;

  return function f1() {
    var args = Array.prototype.slice.call(arguments, 0);
    if (args.length >= arity) {
      return fx.apply(null, args);
    }
    else {
      return function f2() {
        var args2 = Array.prototype.slice.call(arguments, 0);
        return f1.apply(null, args.concat(args2)); 
      }
    }
  };
}
```

Calling `curry` with a multiple arity function produces a new function which, when called, either returns a partially applied version of the original or the result of full application. 

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

- [X] What will be the output when user clicks on `Button 1` and why?
* **Answer:** `5`
-  [X] Please, suggest a fix to get the expected behavior.
* **Answer:** I'm not sure what's the expected behavior here, whether we just want to output `5` whatever button is clicked or we want something different. If we want button element index, then we'll get it based click event target.

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

- [X] `GET http://api.football-data.org/alpha/soccerseasons`: Returns the list of seasons.
- [X] `GET http://api.football-data.org/alpha/soccerseasons/{season_id}/fixtures`: Returns results of the matches in a specific season.

Please implement 2 page screens:

- [X] `Seasons list`: List of all seasons and button which follow to a season results.
- [X] `Season results`: Table with the season results.

Please implement search filter on the `Season results` page:

- [X] The filter should consider `Team A` and `Team B` columns.
- [X] It must be applied only if the input length is more than 3 characters.
- [X] It must highlight all matches in the table (by applying background color).

You can use [the app mockups](https://www.dropbox.com/s/bn3y6ut7rc24apg/Mocks.zip?dl=0).

## Instructions

- Please clone this repo in a new `Bitbucket` (or `GitHub`) private repo.
- Edit `README.md` file to provide answers on tasks `Tasks 1-4`.
- Implement Angular JS app described in `Task 5` and push changes in your repo.
- Please grant access to your private repo for a GH or BitBucket user `tyomo4ka` so we can review your work.

We suppose this test require from 2 to 3 hours. Thanks in advance for your time spent on this test!

## Getting up and running

1. Clone this repo from `https://rtorino@bitbucket.org/rtorino/js-competency-test.git`
2. Run `npm install` from the root directory
3. Run `gulp dev` (may require installing Gulp globally `npm install gulp -g`)
4. Your browser will automatically be opened and directed to the browser-sync proxy address