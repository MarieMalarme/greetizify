import { atomizify, flagify } from 'atomizify'

// generate the atomic CSS classes
atomizify()

// generate classes flags to use on react components
export const { Component, Div, Span } = flagify()
