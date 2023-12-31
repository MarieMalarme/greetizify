import { atomizify, flagify } from 'atomizify'

// generate the atomic CSS classes
atomizify({
  custom_classes: {
    pv2: 'padding-top: 3px; padding-bottom: 2px',
    ph7: 'padding-left: 7px; padding-right: 7px',
    ml7: 'margin-left: 7px',
    b15: 'bottom: 15px',
  },
})

// generate classes flags to use on react components
export const { Component, Div, Span } = flagify()
