function getTimeStamp(dateStr) {
  const date = getDate(dateStr)

  if (!date.getDate()) return { error: "Invalid Date" }

  const unix = date.getTime()
  const utc = date.toUTCString()

  return { unix, utc }
}
function getDate(dateStr) {
  let date = new Date()

  if (!!dateStr) {
    const isUnix = isUnix(dateStr)

    if (isUnix) date.setTime(dateStr)

    if (!isUnix) date = new Date(dateStr)
  }

  return date
}
function isUnix(value) {
  return /^\d*$/.test(value)
}
module.exports = getTimeStamp
