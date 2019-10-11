/* eslint-disable no-restricted-syntax */
/* eslint-disable no-await-in-loop */
import Tools from '../models/Tools';
import Tags from '../models/Tags';

class CreateTools {
  async run({ title, link, description, tags }) {
    const associateTags = [];
    const tool = await Tools.create({
      title,
      link,
      description,
    });

    if (tags) {
      for (const tag of tags) {
        const [associate] = await Tags.findOrCreate({
          where: { name: tag },
        });

        await tool.setTags(associate);
        await associateTags.push(tag);
      }
    }

    return {
      ...tool.get({
        plain: true,
      }),
      tags: associateTags,
    };
  }
}

export default new CreateTools();
