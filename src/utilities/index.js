export function sleep(time = 1000) {
  return new Promise((resolve) => setTimeout(resolve, time))
}

export function alertError(message) {
  alert(JSON.stringify(message))
}
