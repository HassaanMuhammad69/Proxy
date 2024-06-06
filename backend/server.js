import express from "express"

const app = express()

app.get('/',(req,res)=>{
    res.send('Server is ready')
})


app.get('/api/jokes',(req,res)=>{
    const jokes=[
        {
            id: 1,
            title: "Joke one",
            content: "This is a joke"
        },
        {
            id: 2,
            title: "Joke two",
            content: "This is a joke"
        },
        {
            id: 3,
            title: "Joke three",
            content: "This is a joke"
        }
    ]
    res.send(jokes)
})


const port= process.env.PORT || 3000

app.listen(port,()=>{
    console.log(`Server at http://localhost:${port}`)
})

