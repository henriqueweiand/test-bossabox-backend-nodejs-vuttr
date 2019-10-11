import _ from 'lodash';

import Tools from '../models/Tools';
import Tags from '../models/Tags';

import CreateTools from '../services/CreateTools';
import DeleteTools from '../services/DeleteTools';

class ToolsController {
  async index(req, res) {
    const { tags } = req.query;

    const tools = await Tools.findAll({
      include: [
        {
          model: Tags,
          as: 'tags',
          required: true,
          where: {
            name: tags,
          },
        },
      ],
    });

    const result = tools.map(tool => {
      const toolData = tool.toJSON();
      toolData.tags = toolData.tags.map(tag => tag.name);

      return toolData;
    });

    return res.status(200).json(result);
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

export default new ToolsController();
