import { Application, Request, Response } from "express"

import api from "../api/api";

const router = require('express').Router()

router.get("/:id", async (req: Request, res: Response) => {
        
    const { id } = req.params

    await api.get(`/${id}`)
        .then(pokemons => res.json(pokemons.data))
        .catch(err => res.status(400).json(`Error: ${err}`))

})

module.exports = (app: Application) => app.use('/pokemon', router)