exports.up = knex => knex.schema.createTable("tags", table => {
    table.increments("id").primary();
    table.integer("user_id").references("id").inTable("users");
    table.integer("note_id").references("id").inTable("notes").onDelete("CASCADE");
    table.text("name").notNullable();
})

exports.down = knex => knex.schema.dropTable("tags");