import Tools from '../models/Tools';

class DeleteTools {
  async run({ title, link, description }) {
    const tool = await Tools.create({
      title,
      link,
      description,
    });

    return tool;
  }
}

export default new DeleteTools();
