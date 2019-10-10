import Tools from '../models/Tools';
import Tags from '../models/Tags';

import CreateTools from '../services/CreateTools';
import DeleteTools from '../services/DeleteTools';

class AppointmentController {
  async index(req, res) {
    const { tag } = req.query;

    const tools = await Tools.findAll({
      where: { user_id: req.userId, canceled_at: null },
      attributes: ['id', 'title', 'link', 'description'],
      include: [
        {
          model: Tags,
          as: 'ToolsTags',
          attributes: ['name'],
        },
      ],
    });

    return res.status(200).json(tools);
  }

  async store(req, res) {
    const tools = await CreateTools.run(req.body);

    return res.status(201).json(tools);
  }

  async delete(req, res) {
    const tool = await DeleteTools.run({
      id: req.params.id,
    });

    return res.status(204).json(tool);
  }
}

export default new AppointmentController();
