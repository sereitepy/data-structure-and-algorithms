/*
TODO: 1578. Minimum Time to Make Rope Colorful
Alice has n balloons arranged on a rope. You are given a 0-indexed string colors where colors[i] is the color of the ith balloon.

Alice wants the rope to be colorful. She does not want two consecutive balloons to be of the same color, so she asks Bob for help. Bob can remove some balloons from the rope to make it colorful. You are given a 0-indexed integer array neededTime where neededTime[i] is the time (in seconds) that Bob needs to remove the ith balloon from the rope.

Return the minimum time Bob needs to make the rope colorful.
*/

function makeBalloonColorful(colors, neededTime) {
  let color = colors[0]
  let index = 1
  let minimumTime = 0
  const visited = new Array(colors.length).fill(false)
  visited[index - 1] = true

  while (index < neededTime.length) {
    console.log(colors)
    let currentColor = colors[index]

    // the same or not?
    if (color === currentColor) {
      const colorTime = neededTime[index - 1]
      const currentColorTime = neededTime[index]
      // const minTime = Math.min(colorTime, currentColorTime)
      let minTime = 0

      if (colorTime < currentColorTime) {
        minTime = colorTime
        minimumTime += minTime
        // color = colors[index]

        // remove the balloon
        colors = colors.split('')
        remove(colors, index - 1)
        colors = colors.join('')

        // remove the balloon time
        remove(neededTime, index - 1)
        console.log(
          `Since ${colorTime} is LESS than ${currentColorTime}. We remove ${
            index - 1
          }, so now our Array looks like colors: ${colors}, neededTime: ${neededTime}`
        )
      } else {
        minTime = currentColorTime
        minimumTime += minTime
        // color = colors[index - 1]

        // remove the balloon
        colors = colors.split('')
        remove(colors, index)
        colors = colors.join('')

        // remove the balloon time
        remove(neededTime, index)
        console.log(
          `Since ${currentColorTime} is LESS than ${colorTime}. We remove ${index}, so now our Array looks like colors: ${colors}, neededTime: ${neededTime}`
        )
      }

      // console.log('------------------------------')
      // console.log(colorTime, currentColorTime, ':', minTime, ':', minimumTime)
      // console.log(`Is ${color} equal to ${currentColor}`)
      // console.log('------------------------------')

      // index++
      console.log(`The comparision is between ${color} and ${currentColor}`)
    } else {
      // color = colors[index]
      console.log(`${color} is NOT equal to ${currentColor}`)
      // index++
    }
    visited[index] = true
    color = colors[index]
    index++
  }

  if (minimumTime > 0) {
    console.log(
      minimumTime,
      `final colors: [${colors}], neededTime: ${neededTime}`
    )
  } else {
    console.log(0)
  }
}

// makeBalloonColorful('aaabbbabbbb', [3, 5, 10, 7, 5, 3, 5, 5, 4, 8, 1])

function remove(array, index) {
  let i = index
  while (i < array.length) {
    array[i] = array[i + 1]
    i++
  }
  array.pop()
  console.log('================')
}

// remove([3, 5, 10, 7, 5, 3, 5, 5, 4, 8, 1], 3)

const chatWord = (colors, neededTime) => {
  let totalCost = 0

  for (let i = 0; i < colors.length - 1; i++) {
    if (colors[i] === colors[i + 1]) {
      // Remove the cheaper balloon
      totalCost += Math.min(neededTime[i], neededTime[i + 1])

      // TRICK: Update neededTime[i+1] to be the max
      // This handles groups of 3+ same colors
      neededTime[i + 1] = Math.max(neededTime[i], neededTime[i + 1])
    }
  }

  console.log(totalCost, colors, neededTime)
}

// chatWord('aaabbbabbbb', [3, 5, 10, 7, 5, 3, 5, 5, 4, 8, 1])

// my final solution
function myFinal(colors, neededTime) {
  let minTime = 0
  for (let i = 0; i < colors.length; i++) {
    if (colors[i] === colors[i + 1]) {
      minTime += Math.min(neededTime[i], neededTime[i + 1])
      neededTime[i + 1] = Math.max(neededTime[i], neededTime[i + 1])
      console.log(neededTime)
    }
  }
  console.log(minTime)
}

myFinal('aaabbbabbbb', [3, 5, 10, 7, 5, 3, 5, 5, 4, 8, 1])
