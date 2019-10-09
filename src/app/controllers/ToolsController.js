import Tools from '../models/Tools';
import Tags from '../models/Tags';

import CreateTools from '../services/CreateTools';
import DeleteTools from '../services/DeleteTools';

class AppointmentController {
  async index(req, res) {
    const { tag } = req.query;

    const tools = await Tools.findAll({
      where: { user_id: req.userId, canceled_at: null },
      attributes: ['id', 'date', 'past', 'cancelable'],
      include: [
        {
          model: Tags,
          as: 'provider',
          attributes: ['name'],
        },
      ],
    });

    return res.json(tools);
  }

  async store(req, res) {
    const { provider_id, date } = req.body;

    const tools = await CreateTools.run({
      provider_id,
      user_id: req.userId,
      date,
    });

    return res.json(tools, 201);
  }

  async delete(req, res) {
    const tool = await DeleteTools.run({
      id: req.params.id,
    });

    return res.json(tool, 204);
  }
}

export default new AppointmentController();
