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
        const currentTag = await Tags.findOne({ where: { name: tag } });

        if (!currentTag) {
          const associate = await Tags.create({
            name: tag,
          });
        }

        console.log('associa', associate);
      });
    }

    return tool;
  }
}

export default new CreateTools();
