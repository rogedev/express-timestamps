const { isUnix } = require("./isUnix")

function getDate(dateStr) {
  let date = new Date()

  if (!!dateStr) {
    const is_unix = isUnix(dateStr)

    if (is_unix) date.setTime(dateStr)

    if (!is_unix) date = new Date(dateStr)
  }

  return date
}

module.exports = { getDate }
