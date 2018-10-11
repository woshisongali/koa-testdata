function findData () {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('long time val')
    }, 1000)
  })
}

async function test () {
  const v = await findData()
  console.log(v)
}

test()