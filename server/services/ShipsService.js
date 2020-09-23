import { dbContext } from "../db/DbContext"
import { BadRequest } from "../utils/Errors"


class ShipService {
  async getAll() {
    return await dbContext.Ships.find({})
  }

  async getById(id) {
    let data = await dbContext.Ships.findOne({ _id: id })
    if (!data) {
      throw new BadRequest("Invalid ID ")
    }
    return data
  }

  async create(rawData) {
    let data = await dbContext.Ships.create(rawData)
    return data
  }

  async edit(id, update) {
    let data = await dbContext.Ships.findOneAndUpdate({ _id: id }, update, { new: true })
    if (!data) {
      throw new BadRequest("Invalid ID ");
    }
    return data;
  }

  async delete(id,) {
    let data = await dbContext.Ships.findOneAndRemove({ _id: id });
    if (!data) {
      throw new BadRequest("Invalid ID ");
    }
  }

}


export const shipService = new ShipService()