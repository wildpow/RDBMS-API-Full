
exports.up = function(knex, Promise) {
  return knex.schema.createTable("posts", function(tbl) {
    tbl.primary().increments()
    tbl.integer("userId").references("id").inTable("users");
    tbl.string("text").notNullable();
    tbl.timestamp("created_At").defaultTo(knex.fn.now());
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("posts")
};
