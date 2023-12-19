const format_grid = (grid_string) =>
  grid_string
    // create an array of rows as strings
    .replaceAll(' ', '')
    .split('\n')
    // create an array of cells as boolean values for each row
    .map((row_string) =>
      row_string.split('').map((character) => character === '■'),
    )

const snowflake = format_grid(
  ` · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · ·
    · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · ·
    · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · ·
    · · · · · · · · · · · · · · · · ■ · · · · · · · · · · · · · · · ·
    · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · ·
    · · · · · · · · · · · · · · · ■ · ■ · · · · · · · · · · · · · · ·
    · · · · · · · · ■ · · · · · · · ■ · · · · · · · ■ · · · · · · · ·
    · · · · · · · · · · ■ · · · · · ■ · · · · · ■ · · · · · · · · · ·
    · · · · · · · · · ■ ■ · · · ■ · · · ■ · · · ■ ■ · · · · · · · · ·
    · · · · · · · · · · · · ■ · · ■ · ■ · · ■ · · · · · · · · · · · ·
    · · · · · · · · · · · ■ ■ · · · ■ · · · ■ ■ · · · · · · · · · · ·
    · · · · · · · · · · · · · ■ · · ■ · · ■ · · · · · · · · · · · · ·
    · · · · · · · · · · ■ · · · ■ · ■ · ■ · · · ■ · · · · · · · · · ·
    · · · · · · · ■ · · · ■ · · · ■ ■ ■ · · · ■ · · · ■ · · · · · · ·
    · · · · · ■ · · ■ ■ · · ■ ■ ■ ■ · ■ ■ ■ ■ · · ■ ■ · · ■ · · · · ·
    · · · · · · · ■ · · · ■ · · · ■ ■ ■ · · · ■ · · · ■ · · · · · · ·
    · · · · · · · · · · ■ · · · ■ · ■ · ■ · · · ■ · · · · · · · · · ·
    · · · · · · · · · · · · · ■ · · ■ · · ■ · · · · · · · · · · · · ·
    · · · · · · · · · · · ■ ■ · · · ■ · · · ■ ■ · · · · · · · · · · ·
    · · · · · · · · · · · · ■ · · ■ · ■ · · ■ · · · · · · · · · · · ·
    · · · · · · · · · ■ ■ · · · ■ · · · ■ · · · ■ ■ · · · · · · · · ·
    · · · · · · · · · · ■ · · · · · ■ · · · · · ■ · · · · · · · · · ·
    · · · · · · · · ■ · · · · · · · ■ · · · · · · · ■ · · · · · · · ·
    · · · · · · · · · · · · · · · ■ · ■ · · · · · · · · · · · · · · ·
    · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · ·
    · · · · · · · · · · · · · · · · ■ · · · · · · · · · · · · · · · ·
    · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · ·
    · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · ·
    · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · ·
    · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · ·`,
)

const logo_01 = format_grid(
  ` · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · ·
    · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · ·
    · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · ·
    · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · ·
    · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · ·
    · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · ·
    · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · ·
    · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · ·
    · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · ·
    · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · ·
    · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · ·
    · · · · · · · · · · · · ■ ■ ■ ■ · · ■ ■ · · · · · · · · · · · · ·
    · · · · · · · · · · · · ■ ■ ■ ■ ■ · · ■ ■ · · · · · · · · · · · ·
    · · · · · · · · · · · · ■ ■ · ■ ■ · · ■ ■ · · · · · · · · · · · ·
    · · · · · · · · · · · · ■ ■ · ■ ■ · · ■ ■ · · · · · · · · · · · ·
    · · · · · · · · · · · · ■ ■ · ■ ■ · · ■ ■ · · · · · · · · · · · ·
    · · · · · · · · · · · · ■ ■ · ■ ■ · · ■ ■ · · · · · · · · · · · ·
    · · · · · · · · · · · · ■ ■ · ■ ■ · · ■ ■ · · · · · · · · · · · ·
    · · · · · · · · · · · · ■ ■ ■ ■ ■ · · ■ ■ · · · · · · · · · · · ·
    · · · · · · · · · · · · · ■ ■ ■ ■ · · · ■ · · · · · · · · · · · ·
    · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · ·
    · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · ·
    · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · ·
    · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · ·
    · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · ·
    · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · ·
    · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · ·
    · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · ·
    · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · ·
    · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · ·`,
)

const new_year_2024 = format_grid(
  ` · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · ·
    · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · ·
    · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · ·
    · · · · · · · · · · ■ ■ ■ · · · · · · · ■ ■ ■ · · · · · · · · · ·
    · · · · · · · · · ■ · · · ■ · · · · · ■ · · · ■ · · · · · · · · ·
    · · · · · · · · ■ · · · · · ■ · · · ■ · · · · · ■ · · · · · · · ·
    · · · · · · · · ■ · · · · · ■ · · · ■ · · · · · ■ · · · · · · · ·
    · · · · · · · · ■ · · · · · ■ · · · ■ · · · · · ■ · · · · · · · ·
    · · · · · · · · · · · · · · ■ · · · ■ · · · · · ■ · · · · · · · ·
    · · · · · · · · · · · · · ■ · · · · ■ · · · · · ■ · · · · · · · ·
    · · · · · · · · · · · ■ ■ · · · · · ■ · · · · · ■ · · · · · · · ·
    · · · · · · · · · ■ ■ · · · · · · · ■ · · · · · ■ · · · · · · · ·
    · · · · · · · · ■ · · · · · · · · · · ■ · · · ■ · · · · · · · · ·
    · · · · · · · · ■ ■ ■ ■ ■ ■ ■ · · · · · ■ ■ ■ · · · · · · · · · ·
    · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · ·
    · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · ·
    · · · · · · · · · · ■ ■ ■ · · · · · · · · · ■ ■ · · · · · · · · ·
    · · · · · · · · · ■ · · · ■ · · · · · · · ■ · ■ · · · · · · · · ·
    · · · · · · · · ■ · · · · · ■ · · · · · · ■ · ■ · · · · · · · · ·
    · · · · · · · · ■ · · · · · ■ · · · · · ■ · · ■ · · · · · · · · ·
    · · · · · · · · ■ · · · · · ■ · · · · · ■ · · ■ · · · · · · · · ·
    · · · · · · · · · · · · · · ■ · · · · ■ · · · ■ · · · · · · · · ·
    · · · · · · · · · · · · · ■ · · · · · ■ · · · ■ · · · · · · · · ·
    · · · · · · · · · · · ■ ■ · · · · · ■ · · · · ■ · · · · · · · · ·
    · · · · · · · · · ■ ■ · · · · · · · ■ ■ ■ ■ ■ ■ ■ ■ · · · · · · ·
    · · · · · · · · ■ · · · · · · · · · · · · · · ■ · · · · · · · · ·
    · · · · · · · · ■ ■ ■ ■ ■ ■ ■ · · · · · · · · ■ · · · · · · · · ·
    · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · ·
    · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · ·
    · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · ·`,
)

export const grids = { new_year_2024, logo_01, snowflake }
