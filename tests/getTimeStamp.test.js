const getTimeStamp = require("../services/getTimeStamp")

const expected = { unix: 1451001600000, utc: "Fri, 25 Dec 2015 00:00:00 GMT" }

test("getTimeStamp from date = 2015-12-25", () => {
  const date = "2015-12-25"
  expect(getTimeStamp(date)).toEqual(expected)
})

test("getTimeStamp from unix = 1451001600000", () => {
  const unix = 1451001600000
  expect(getTimeStamp(unix)).toEqual(expected)
})
