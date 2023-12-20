import { useState, useEffect } from 'react'
import { Component, Div, Span } from './flags'
import { grids } from './grids'

const capitalize = (string) =>
  `${string[0].toUpperCase()}${string.slice(1).toLowerCase()}`

const unsnakecase = (string) => capitalize(string.replaceAll('_', ' '))

const base_params = {
  grid: 'new_year_2024',
  // animation
  step: 1,
  delay: 15,
  multiplier: 6.5,
  max_percentage_pattern: 81,
  max_percentage_basic: 66,
  // colors
  background: '#ffffff',
  pattern_step_1: '#f2f2f2',
  pattern_step_2: '#002aff',
  basic_step_1: '#f2f2f2',
  basic_step_2: '#a18521',
  // cells
  pattern_size: 100,
  basic_size: 100,
  square_mode: true,
  gradient_type: 'radial',
}

const url = new URL(window.location.href)
const search_params =
  (url.searchParams.size > 0 && url.searchParams) ||
  new URLSearchParams(base_params)
url.search = search_params.toString()
window.history.pushState({}, '', url)

const set_search_params = (name, value) => {
  search_params.set(name, value)
  url.search = search_params.toString()
  window.history.pushState({}, '', url)
}

const Home = () => {
  const [is_playing, set_is_playing] = useState(true)
  const [counter, set_counter] = useState(0)
  const [params, set_params] = useState(Object.fromEntries(search_params))

  useEffect(() => {
    if (!is_playing) return
    const interval = setInterval(() => {
      set_counter((counter) => counter + Number(params.step))
    }, params.delay)

    return () => clearInterval(interval)
  }, [is_playing, params.delay, params.step])

  const displayed_grid = grids[params.grid]

  return (
    <Page style={{ background: params.background }}>
      <Settings style={{ overflow: 'auto', backdropFilter: 'blur(5px)' }}>
        <Setting>
          <Label>Pattern</Label>
          <Select
            value={params.grid}
            onChange={(event) => {
              set_search_params('grid', event.target.value)
              set_params({ ...params, grid: event.target.value })
            }}
          >
            {Object.keys(grids).map((grid_name) => (
              <option key={grid_name} value={grid_name}>
                {unsnakecase(grid_name)}
              </option>
            ))}
          </Select>
        </Setting>

        <Category bt mt20>
          <Title>Animation</Title>
          <Setting>
            <Label>Step</Label>
            <Input
              min="0.5"
              max="5"
              step="0.1"
              type="range"
              value={Number(params.step)}
              onChange={(event) => {
                set_search_params('step', event.target.value)
                set_params({ ...params, step: Number(event.target.value) })
              }}
            ></Input>
          </Setting>
          <Setting>
            <Label>Delay</Label>
            <Input
              min="0"
              max="50"
              step="1"
              type="range"
              value={Number(params.delay)}
              onChange={(event) => {
                set_search_params('delay', event.target.value)
                set_params({ ...params, delay: Number(event.target.value) })
              }}
            />
          </Setting>
          <Setting>
            <Label>Multiplier</Label>
            <Input
              min="0.5"
              max="20"
              step="0.5"
              type="range"
              value={params.multiplier}
              onChange={(event) => {
                set_search_params('multiplier', event.target.value)
                set_params({
                  ...params,
                  multiplier: Number(event.target.value),
                })
              }}
            />
          </Setting>
          <Setting>
            <Label>Max percentage pattern</Label>
            <Input
              min="30"
              max="100"
              step="1"
              type="range"
              value={params.max_percentage_pattern}
              onChange={(event) => {
                set_search_params('max_percentage_pattern', event.target.value)
                set_params({
                  ...params,
                  max_percentage_pattern: Number(event.target.value),
                })
              }}
            />
          </Setting>
          <Setting>
            <Label>Max percentage basic</Label>
            <Input
              min="0"
              max="120"
              step="1"
              type="range"
              value={params.max_percentage_basic}
              onChange={(event) => {
                set_search_params('max_percentage_basic', event.target.value)
                set_params({
                  ...params,
                  max_percentage_basic: Number(event.target.value),
                })
              }}
            />
          </Setting>
        </Category>

        <Category>
          <Title>Colors</Title>
          {Object.entries(params)
            .filter(
              ([key, value]) =>
                typeof value === 'string' && value.startsWith('#'), // get params with hexadecimal values
            )
            .map(([label, value]) => (
              <Setting key={label}>
                <Label>{unsnakecase(label)}</Label>
                <Input
                  type="color"
                  value={value}
                  onChange={(event) => {
                    set_search_params(label, event.target.value)
                    set_params({ ...params, [label]: event.target.value })
                  }}
                />
              </Setting>
            ))}
        </Category>

        <Category>
          <Title>Cells</Title>
          <Setting>
            <Label>Gradient type</Label>
            <Select
              value={params.gradient_type}
              onChange={(event) => {
                set_search_params('gradient_type', event.target.value)
                set_params({ ...params, gradient_type: event.target.value })
              }}
            >
              <option value="linear">Linear</option>
              <option value="radial">Radial</option>
              <option value="conic">Conic</option>
            </Select>
          </Setting>
          {[
            ['pattern_size', params.pattern_size],
            ['basic_size', params.basic_size],
          ].map(([label, value]) => (
            <Setting key={label}>
              <Label>{unsnakecase(label)}</Label>
              <Input
                min="5"
                max="100"
                step="1"
                type="range"
                value={value}
                onChange={(event) => {
                  set_search_params(label, event.target.value)
                  set_params({ ...params, [label]: Number(event.target.value) })
                }}
              />
            </Setting>
          ))}
          <Setting>
            <Label>Square mode</Label>
            <Switch>
              <Button
                o30={!params.square_mode}
                onClick={() => {
                  set_search_params('square_mode', true)
                  set_params({ ...params, square_mode: true })
                }}
              >
                ON
              </Button>
              <Button
                o30={params.square_mode}
                onClick={() => {
                  set_search_params('square_mode', false)
                  set_params({ ...params, square_mode: false })
                }}
              >
                OFF
              </Button>
            </Switch>
          </Setting>
        </Category>

        <PlayButton onClick={() => set_is_playing(!is_playing)}>
          {is_playing ? 'Pause' : 'Play'} animation
        </PlayButton>
      </Settings>

      <Grid
        style={{
          width: '95vh',
          maxWidth: '90vw',
          maxHeight: '95vh',
          gridTemplateRows: `repeat(${displayed_grid.length}, 1fr)`,
          gridTemplateColumns: `repeat(${displayed_grid[0].length}, 1fr)`,
        }}
      >
        {displayed_grid.map((row, row_index) =>
          row.map((is_filled, cell_index) => {
            const { gradient_type, square_mode } = params
            const { multiplier, max_percentage_pattern, max_percentage_basic } =
              params

            const cell_type = is_filled ? 'pattern' : 'basic'
            const diameter = params[`${cell_type}_size`]
            const size = `${diameter}%`
            const inc =
              (((cell_index + 1 + (row_index + 1)) * multiplier + counter) %
                95) +
              15

            const percentage = is_filled
              ? max_percentage_pattern - inc
              : Math.max(max_percentage_basic, inc * 2) - inc

            const background = `${gradient_type}-gradient(${
              params[`${cell_type}_step_1`]
            } ${percentage}%, ${params[`${cell_type}_step_2`]} ${percentage}%)`

            return (
              <Cell
                key={cell_index}
                className="cell"
                style={{
                  background: square_mode
                    ? params[`${cell_type}_step_2`]
                    : 'none',
                }}
              >
                <Dot
                  b_rad50p={!square_mode}
                  style={{ background, width: size, height: size }}
                />
              </Cell>
            )
          }),
        )}
      </Grid>

      <Credits style={{ backdropFilter: 'blur(5px)' }}>
        <Repository
          id="repository-link"
          href="https://github.com/MarieMalarme/greetizify"
          target="_blank"
        >
          {Arrow}
          <Span ml7>Code repository</Span>
        </Repository>
        <Div>
          ©{' '}
          <Link href="https://marie.studiodev.xyz/" target="_blank">
            Marie Malarme
          </Link>{' '}
          2023
        </Div>
      </Credits>
    </Page>
  )
}

const Arrow = (
  <svg width={20} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130 130">
    <g fill="none" stroke="black" strokeWidth={8}>
      <polyline points="72.85,17.6 120.5,65.25 72.85,112.9" />
      <line x1="5.5" y1="65.25" x2="119.84" y2="65.25" />
    </g>
  </svg>
)

const Page = Component.flex.h100vh.w100p.ai_center.jc_center.div()
const Settings = Component.ba.absolute.t10.l10.pa20.b_rad8.max_h95p.div()
const Category = Component.bb.pv20.div()
const Title = Component.mb15.o60.div()
const Setting = Component.flex.ai_center.jc_between.mb5.div()
const Label = Component.mr15.label()
const Input = Component.input()
const Select = Component.b_black.bg_none.b_rad20.ph10.fs15.ol_none.select()
const Switch = Component.fs11.flex.w75.ai_center.jc_between.div()
const Button = Component.c_pointer.ba.ls1.b_rad20.pv2.ph7.div()
const Grid = Component.grid.main()
const Cell = Component.w100p.flex.ai_center.jc_center.article()
const Dot = Component.min_w5.min_h5.w30p.h30p.div()
const PlayButton =
  Component.b_rad25.bg_none.ba.pv10.ph20.fs16.w100p.mt30.c_pointer.button()
const Credits =
  Component.b_rad8.flex.flex_column.absolute.b15.r10.ph20.pv15.fs18.header()
const Link =
  Component.bb.black.b_black.text_dec_none.hover_electric5.hover_b_electric5.a()
const Repository =
  Component.mb10.black.hover_b_electric5.hover_electric5.text_dec_none.flex.ai_center.ba.b_rad25.pv5.ph15.a()

export default Home
