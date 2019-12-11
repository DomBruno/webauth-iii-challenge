
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username: 'dbruno', password: 'pword', department: 'infosec'},
        {username: 'mindy', password: 'drwop', department: 'infosec'},
        {username: 'mork', password: 'mork', department: 'infosec'},
        {username: 'frodo', password: 'pwlorb', department: 'analysis'},
        {username: 'bilbo', password: 'free', department: 'analysis'},
        {username: 'raistlin', password: 'stuff', department: 'office'},
        {username: 'caramon', password: 'rocks', department: 'office'}
      ]);
    });
};
