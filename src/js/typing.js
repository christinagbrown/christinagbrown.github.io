new TypeIt("#typewriter", {
  speed: 50,
  loop: true
}).pause(750)
  .type("HR Professional", {delay: 2000})
  .delete(null, {delay: 1000})
  .type("Adventurer", {delay: 2000})
  .go();