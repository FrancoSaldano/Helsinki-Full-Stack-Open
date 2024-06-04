import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
const app = express()


//TODO Seguir desde "Optimizando el despligue del frontend"

app.use(express.static('dist'))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(
	morgan(
		':method :url :status :res[content-length] - :response-time ms :post-data'
	)
)
morgan.token('post-data', (request, response) => {
	if (request.method === 'POST') return JSON.stringify(request.body)
	else return ''
})

let persons = [
	{
		name: 'Luis',
		number: '345678',
		id: 1,
	},
	{
		name: 'Ana',
		number: '901234',
		id: 5,
	},
	{
		name: 'Elena',
		number: '567890',
		id: 2,
	},
	{
		name: 'asdfasdf',
		number: '45464',
		id: 3,
	},
]
const generateId = () => {
	const maxId = persons.length > 0 ? Math.max(...persons.map((n) => n.id)) : 0
	return maxId + 1
}
const findIn = (thing, object) => {
	return object.find(
		(el) =>
			(el.name.toLowerCase() || el.number.toLowerCase()) ===
				thing.toLowerCase() || thing === ' '
	)
}

app.get('/', (request, response) => {
	response.send('<h1>Hello World</h1>')
})
app.get('/api/persons', (request, response) => {
	response.json(persons)
})
app.get('/api/persons/:id', (request, response) => {
	const id = Number(request.params.id)
	console.log(id)
	const person = persons.find((person) => {
		console.log(
			person.id,
			typeof person.id,
			id,
			typeof id,
			typeof person.id === typeof id
		)
		return person.id === id
	})
	if (person) {
		response.json(person)
	} else {
		response.status(404).end()
	}
})
app.get('/api/info', (request, response) => {
	const total = persons.length
	const date = new Date()
	return response.send(
		`<p>Phonebook has info for ${total}</p></br><p>${date}</p>`
	)
})
app.post('/api/persons', (request, response) => {
	const body = request.body

	if (!body.name || !body.number) {
		return response.status(400).json({ error: 'content missing' })
	}
	if (findIn(body.name, persons)) {
		return response.status(406).json({ error: 'name must be unique' })
	}

	const person = {
		name: body.name,
		number: body.number || '',
		id: generateId(),
	}

	console.log(response.body)
	persons = persons.concat(person)
	response.json(person)
})
app.delete('/api/persons/:id', (request, response) => {
	const id = request.params.id
	persons = persons.filter((person) => person.id != id)

	response.status(204).end()
})
//MIDDLEWARES
const unknownEndpoint = (request, response) => {
	response.status(404).send({ error: 'unknown endpoint' })
}
app.use(unknownEndpoint) //cuando la ruta no apunta a ningún lado

const PORT = process.env.PORT || 3011
app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`)
})
