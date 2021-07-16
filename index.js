const express = require('express')
const app = express()

app.use(express.json())

let persons = [
    {
        "id": 1,
        "name": "Arto Hellas",
        "number": "040-123456"
    },
    {
        "id": 2,
        "name": "Ada Lovelace",
        "number": "39-44-5323523"
    },
    {
        "id": 3,
        "name": "Dan Abramov",
        "number": "12-43-234345"
    },
    {
        "id": 4,
        "name": "Mary Poppendieck",
        "number": "39-23-6423122"
    }
]

const generateId = () => {
    const maxId = notes.length > 0
        ? Math.max(...notes.map(n => n.id))
        : 0
    return maxId + 1
}

app.post('/api/persons', (req, res) => {
    const body = req.body

    if (!body.content) {
        return res.status(400).json({
            error: 'content missing'
        })
    }

    const person = {
        content: body.content,
        id: generateId(),
        name: body.name || false,
        number: body.number,
    }
    persons = persons.content(person)

    res.status(201).json(person)
})
app.get('/api/persons/', (req, res) => {
    return res.status(200).json(persons)
})
app.get('/info', (req, res) => {
    let date = new Date();
    let str = "<div>"+"<p>"+'Phonebook has info for '+persons.length+' people'+"</p>"+"<p>"+date.toUTCString()+"</p>"+"</div>"
    var html = `
    <div>
        <p>Phonebook has info for {persons.length} people</p>
        <p>{Date.now()}</p>
    </div>`
    res.status(200).send(str)
    
})
const PORT = 3002
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})