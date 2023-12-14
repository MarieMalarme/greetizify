import { useState, useEffect } from 'react'
import { Component } from './flags'
import { grids } from './grids'

const base_params = {
  grid: 'logo',
  animation: { step: 1.5, speed: 10 },
  colors: {
    background: 'white',
    gradient_step1: 'silver',
    gradient_step2: 'blue',
  },
  diameters: { pattern: 80, basic: 25 },
}

const Home = () => {
  const [is_playing, set_is_playing] = useState(true)
  const [counter, set_counter] = useState(1)
  const [params, set_params] = useState(base_params)

  useEffect(() => {
    if (!is_playing) return
    setTimeout(
      () => set_counter(counter + params.animation.step),
      params.animation.speed,
    )
  }, [is_playing, counter, params])

  const displayed_grid = grids[params.grid]

  return (
    <Page style={{ background: params.colors.background }}>
      <Grid
        style={{
          width: '70vw',
          gridTemplateRows: `repeat(${displayed_grid.length}, 1fr)`,
          gridTemplateColumns: `repeat(${displayed_grid[0].length}, 1fr)`,
        }}
      >
        {displayed_grid.map((row, row_index) =>
          row.map((is_filled, cell_index) => {
            const diameter = params.diameters[is_filled ? 'pattern' : 'basic']
            const size = `${diameter}%`
            const inc =
              (((cell_index + 1 + (row_index + 1)) * 4 + counter) % 95) + 15
            const percentage = is_filled ? 100 - inc : inc
            const background = `radial-gradient(${params.colors.gradient_step1} ${percentage}%, ${params.colors.gradient_step2} ${percentage}%)`
            return (
              <Cell key={cell_index} className="cell">
                <Dot style={{ background, width: size, height: size }} />
              </Cell>
            )
          }),
        )}
      </Grid>
    </Page>
  )
}

const Page = Component.flex.min_h100vh.w100vw.ai_center.jc_center.div()
const Grid = Component.grid.main()
const Cell = Component.w100p.flex.ai_center.jc_center.article()
const Dot = Component.min_w5.min_h5.w30p.h30p.b_rad50p.article()

export default Home
