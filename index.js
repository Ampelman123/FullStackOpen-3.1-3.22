require ('dotenv').config()
const morgan = require('morgan')
const Person = require('./models/person')
const express = require('express')
const cors = require('cors');
const { response } = require('express');
const person = require('./models/person');
const app = express()



app.use(express.json())
app.use(morgan(':everypost'))
app.use(cors())
app.use(express.static('build'))


morgan.token('everypost', function(req, res) {
    console.log(JSON.stringify(req.body), 'huhu'); 
})








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
    Person.exists({name: body.name}).then(x => {
        if (x) {
            return res.status(400).json({
                error: 'Person already in your phonebook'
            })
        }
    })
    
    console.log(req.body);
    const person = new Person({
        name: body.name ,
        number: body.number,
    })
    person.save().then(savedPerson => {
        res.json(savedPerson)
    })

})
app.get('/api/persons/', (req, res) => {
    Person.find({}).then(persons =>{
        res.json(persons)
    })
    
})
app.get('/api/info', (req, res) => {
    let date = new Date();

    Person.find({}).then(x=>{
        //I hate myself for doing that
        let str = "<div>"+"<p>"+'Phonebook has info for '+x.length+' people'+"</p>"+"<p>"+date.toUTCString()+"</p>"+"</div>"
        res.status(200).send(str)
    })
   
    
    
})
app.get('/api/persons/:id', (req, res) => {

    Person.findById(req.params.id)
    .then(person => {
        res.json(person)
    })
    .catch(()=>res.status(404).send('Error: Person does not exist'))
    
})
app.delete('/api/persons/:id', (req, res) => {
    Person.findByIdAndRemove(req.params.id).then(()=>res.status(204).end())

    
    
})

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})