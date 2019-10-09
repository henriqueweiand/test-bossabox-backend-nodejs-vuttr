import Tools from '../models/Tools';
import Tags from '../models/Tags';

class CreateTools {
  async run({ title, link, description }) {
    const tool = await Tools.create({
      title,
      link,
      description,
    });

    return tool;
  }
}

export default new CreateTools();
