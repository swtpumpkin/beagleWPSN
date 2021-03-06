
exports.up = (knex, Promise) => {
  return knex.schema.createTable('user', t => {
    t.increments()
    t.string('provider').notNullable()
    t.string('provider_user_id').notNullable()
    t.string('nickname')
    t.string('access_token')
    t.string('profile_photo')
    t.integer('like').defaultTo(0)
  })
};

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('user')
};
