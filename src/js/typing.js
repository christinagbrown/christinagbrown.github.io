new TypeIt("#typewriter", {
  speed: 50,
  loop: true
}).pause(750)
  .type("Programs Coordinator", {delay: 2000})
  .delete(null, {delay: 1000})
  .type("Adventurer", {delay: 2000})
  .go();
