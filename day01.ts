const list = input.split('\n').slice(1, -1).map((key, value) => {
  return key.trim().split('   ')
})
const listA = list.map(([a, b]) => Number(a))
const listB = list.map(([a, b]) => Number(b))

const range = Array.from(Array(1000).keys())
const zippedList = range.map(element => {
  return [listA.sort()[element], listB.sort()[element]]
})


const diffs = zippedList.map(([a, b]) => {
  return Math.abs(Number(a) - Number(b))
})
const sum = diffs.reduce((acc, curr) => acc + curr, 0)
console.log(sum)


const list = input.split('\n').slice(1, -1).map((key, value) => {
  return key.trim().split('   ')
})
const listA = list.map(([a, b]) => Number(a))
const listB = list.map(([a, b]) => Number(b))

// const range = Array.from(Array(1000).keys())

let result = 0

listA.forEach(elementA => {
  let similarity = 0
  listB.forEach(elementB => {
    if (elementA === elementB) {
      similarity += 1
    }
  })
  result += similarity * elementA
})

console.log(result)
