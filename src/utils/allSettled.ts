export function allSettled(promises: Promise<unknown>[]) {
  let result = promises.map((promise) => promise.then(
    (value) => ({ status: 'resolved', value }),
    (reason) => ({ status: 'rejected', reason })
  ))

  return Promise.all(result)
}
