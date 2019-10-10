import Tools from '../models/Tools';
import Tags from '../models/Tags';

class CreateTools {
  async run({ title, link, description, tags }) {
    const tool = await Tools.create({
      title,
      link,
      description,
    });

    if (tags) {
      tags.map(async tag => {
        const [associate] = await Tags.findOrCreate({
          where: { name: tag },
        });

        await tool.setTags(associate);
      });
    }

    const response = await Tools.findOne({
      include: [
        {
          model: Tags,
          as: 'tags',
          required: false,
          attributes: ['name'],
          through: { attributes: [] },
        },
      ],
      where: { id: tool.id },
    });

    return response;
  }
}

export default new CreateTools();
