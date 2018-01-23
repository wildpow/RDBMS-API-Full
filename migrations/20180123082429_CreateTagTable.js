
exports.up = function(knex, Promise) {
  return knex.schema.createTable("tags", function(tbl){
    tbl.primary().increments();
    tbl.string("tag", 16).notNullable();
    tbl.timestamp("created_At").default(knex.fn.now());
    });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("tags");
};
