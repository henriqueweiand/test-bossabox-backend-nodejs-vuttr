import Tools from '../models/Tools';
import Tags from '../models/Tags';

import CreateTools from '../services/CreateTools';
import DeleteTools from '../services/DeleteTools';

class AppointmentController {
  async index(req, res) {
    const { tags } = req.query;

    const tools = await Tools.findAll({
      include: [
        {
          model: Tags,
          as: 'tags',
          required: false,
          attributes: ['name'],
          through: { attributes: [] },
          // raw: true,
        },
      ],
      // where: { tag },
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
