exports.up = async function (knex) {
  await knex.schema
    .createTable("recipes", (table) => {
      table.increments("id");
    })
    .createTable("ingredients", (table) => {
      table.increments("id");
    })
    .createTable("steps", (table) => {
      table.increments("id");
    })
    .createTable("step_ingredients", (table) => {
      table.increments("id");
    });
};

exports.down = async function (knex) {
  await knex.schema
    .dropTableIfExists("step_ingredients")
    .dropTableIfExists("steps")
    .dropTableIfExists("ingredients")
    .dropTableIfExists("recipes");
};
