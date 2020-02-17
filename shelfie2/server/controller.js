module.exports = {
test: (res => {
    let test = 'hit'
    console.log(test)
    res.status(200).send('OYVEY').catch(err => res.status(500).send(err))
})

}
