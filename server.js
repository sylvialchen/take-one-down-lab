const express = require("express")
const app = express()
const port = 3000

app.listen(port, () => {
    console.log("listening on port", port)
})

// On the home page (get "/"), users should see:
// "99 Bottles of beer on the wall"
// a link that says "take one down, pass it around"
// this should link to /98, where the number represents the number of bottles left.

app.get("/", (req, res) => {
    res.send(`99 Bottles of beer on the wall <a href="/98">take one down, pass it around</a>`)
})

// When a number is given in the url (get "/:number_of_bottles"), users should see:
// The number of bottles of beer on the wall (i.e. 98 Bottles of beer on the wall.)
// a link to "take one down, pass it around", where the href is number of bottles in the parameter minus 1.

// If there are 0 bottles left, do not show a link to "take one down"
// Add a link to start over, which directs the user back to the home page.

app.get("/:number_of_bottles", (req, res) => {
    if (req.params.number_of_bottles === "0") {
        res.send(`0 Bottles of beer on the wall <br><a href="/}">start over</a>`)
    } else {
        res.send(`${req.params.number_of_bottles} Bottles of beer on the wall <br><a href="/${req.params.number_of_bottles - 1}">take one down, pass it around</a>`)
    }
})
