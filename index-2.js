console.log("hello world");
song();
function refrain() {
    let words = "";
  words += "You're as smooth as Tennessee whiskey\n"
  words += "You're as sweet as strawberry wine\n"
  words += "You're as warm as a glass of brandy\n"
  words += "and honey, i stay stoned on your love all the time\n"
  return (words);
}
function song() {
    let r;
    r = refrain();
  // verse 1
  console.log("Used to spend my nights out in a barroom");
  console.log("Liquor was the only love i'd known");
  console.log("But you rescued me from reachin' for the bottom");
  console.log("And brought me back from being too far gone");
  console.log("");
  console.log("");

  console.log (r);

  // verse 2
  console.log("I've looked for love in all the same old places");
  console.log("Found the bottom of the bottle's always dry");
  console.log("But when you poured out your heart, I didn't waste it");
  console.log("'Cause there's nothing like your love to get me high");
  console.log("");
  console.log("");

  console.log (r);

  console.log (r);

  console.log("You're as smooth as Tennessee whiskey");
  console.log("Tennessee whiskey");
  console.log("Tennessee whiskey");
  console.log("");
  console.log("");

  console.log("You're as smooth as Tennessee whiskey");
  console.log("Tennessee whiskey");
  console.log("Tennessee whiskey");
}