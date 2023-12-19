const { getDate } = require("./getDate")

function getTimeStamp(dateStr) {
  const date = getDate(dateStr)

  if (!date.getDate()) {
    return {
      error: "Invalid Date",
    }
  }

  const unix = date.getTime()
  const utc = date.toUTCString()

  return {
    unix,
    utc,
  }
}

module.exports = getTimeStamp
