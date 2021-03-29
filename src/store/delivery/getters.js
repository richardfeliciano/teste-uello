export function GET_LOADER(state) {
  return state.loader
}

export function GET_DELIVERY(state) {
  return state.delivery
}

export function GET_DELIVERY_RESUME(state) {
  return state.delivery.resume
}

export function GET_DELIVERY_STEPS(state) {
  return state.delivery.steps
}

export function GET_ESTIMATED_TIME(state) {
  return state.delivery.estimated
}

export function GET_CUSTOMER(state) {
  return state.delivery.customer
}

export function GET_ADDRESSES(state) {
  return state.delivery.addresses
}

export function GET_HISTORY(state) {
  return state.delivery.history
}
