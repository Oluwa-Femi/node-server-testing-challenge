
exports.up = function(knex, Promise) {
    return knex.schema.createTable('cars', tbl => {
      tbl.increments();

      tbl.string('type', 255).notNullable();
    });
  };

  exports.down = function(knex, Promise) {
    // undo the operation in up
    return knex.schema.dropTableIfExists('cars');
  };
