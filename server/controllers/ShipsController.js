import express from 'express'
import BaseController from "../utils/BaseController";
import auth0provider from "@bcwdev/auth0provider";
import { shipService } from '../services/ShipsService'
import socketService from "../services/SocketService"




//PUBLIC
export class ShipsController extends BaseController {
  constructor() {
    super("api/ships")
    this.router
      .get('', this.getAll)
      .get('/:id', this.getById)
      .post('', this.create)
      .put('/:id', this.edit)
      .delete('/:id', this.delete)
  }


  async getAll(req, res, next) {
    try {
      let data = await shipService.getAll()
      return res.send(data)
    }
    catch (err) { next(err) }
  }

  async getById(req, res, next) {
    try {
      let data = await shipService.getById(req.params.id)
      return res.send(data)
    } catch (error) { next(error) }
  }

  async create(req, res, next) {
    try {
      let data = await shipService.create(req.body)
      socketService.messageRoom("ships", "newShip", data)
      return res.status(201).send(data)
    } catch (error) { next(error) }
  }

  async edit(req, res, next) {
    try {
      let update = await shipService.edit(req.params.id, req.body)
      socketService.messageRoom("ships" + req.params.id, "newBid", update)
      return res.send(update)
    } catch (error) { next(error) }
  }

  async delete(req, res, next) {
    try {
      await shipService.delete(req.params.id)
      socketService.messageRoom("ships" + req.params.id, "deleteShip")
      return res.send("Successfully deleted")
    } catch (error) { next(error) }
  }
}


