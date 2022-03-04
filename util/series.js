const series = function(chartType, chartData) {
  let res = [];
  if (!Array.isArray(chartData[0])) {
    res.push({
      type: chartType,
      data: chartData
    })
  } else {
    for (let row of chartData) {
      res.push({
        type: type,
        data: row
      })
    }
  }
  return res;
}