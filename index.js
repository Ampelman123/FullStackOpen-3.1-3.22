const morgan = require('morgan')
const express = require('express')
const app = express()

app.use(express.json())
app.use(morgan(':everypost'))

morgan.token('everypost', function(req, res) {
    console.log(JSON.stringify(req.body), 'huhu'); 
})

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
    const maxId = persons.length > 0
        ? Math.max(...persons.map(n => n.id))
        : 0
    return maxId + 1
}

app.post('/api/persons', (req, res) => {
    const body = req.body

    
    if (!body.name) {
        return res.status(400).json({
            error: 'body is missing name'
        })
    }
    if (!body.number) {
        return res.status(400).json({
            error: 'body is missing number'
        })
    }
    if (persons.map(person => person.name).includes(body.name)) {
        return res.status(400).json({
            error: 'Person already in your phonebook'
        })
    }
    console.log(req.body);
    const person = {
        id: generateId(),
        name: body.name ,
        number: body.number,
    }
    persons = persons.concat(person)

    res.status(201).json(person)
})
app.get('/api/persons/', (req, res) => {
    return res.status(200).json(persons)
})
app.get('/info', (req, res) => {
    let date = new Date();
    //I hate myself for doing that
    let str = "<div>"+"<p>"+'Phonebook has info for '+persons.length+' people'+"</p>"+"<p>"+date.toUTCString()+"</p>"+"</div>"
    res.status(200).send(str)
    
})
app.get('/api/persons/:id', (req, res) => {
    const id = Number(req.params.id)
    person = persons.filter(person => person.id === id)
    if(person){
        res.status(200).json(person)
    }else{
        res.status(404).send('Error: Person does not exist')
    }
    
})
app.delete('/api/persons/:id', (req, res) => {
    const id = Number(req.params.id)
    persons = persons.filter(person => person.id !== id)

    res.status(204).end()
    
})

const PORT = 3002
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})