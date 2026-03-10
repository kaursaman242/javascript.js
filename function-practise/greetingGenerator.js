function greetUser(name) {
  const hour = new Date().getHours();
  let time;

  if (hour < 12) {
    time = "morning";
  } else if (hour < 18) {
    time = "afternoon";
  } else {
    time = "evening";
  }

  return `Hello ${name}, good ${time}!`;
}

console.log(greetUser("Samandeep"));
