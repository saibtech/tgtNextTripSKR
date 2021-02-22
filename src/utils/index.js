export const stateReducer = (state, action) => {
  const { type, ...rest } = action
  switch (type) {
    case 'SINGLE':
      return { ...state, [rest.field]: rest.value }
    case 'MULTIPLE':
      return { ...state, ...rest.values.reduce((accum, currentValue) => ({ ...accum, [currentValue.field]: currentValue.value }), {}) }
    case 'MERGE':
    default:
      return { ...state, ...Object.keys(rest).reduce((accum, currentValue) => ({ ...accum, [currentValue]: rest[currentValue] }), {}) }
  }
}
