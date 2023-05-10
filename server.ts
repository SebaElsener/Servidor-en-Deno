
import {
    Application,
    opine,
    serveStatic,
    urlencoded,
    json
} from "https://deno.land/x/opine@2.2.0/mod.ts"
import { renderFileToString } from "https://deno.land/x/dejs@0.8.0/mod.ts";
 
const app: Application = opine()

app.use(json())
app.use(urlencoded())
app.use(serveStatic('public'))
app.set("views", "./public/views");
app.set("view engine", "ejs");
app.engine("ejs", renderFileToString);

app.get('/', (req, res) => {
    res.render('index')
})
app.post('/', (req, res) => {
    const data = req.body
    res.send(data)
})

app.listen(3000, () => {
    console.log("Opine started on port 3000")
})
