import Tools from '../models/Tools';

class DeleteTools {
  async run({ id }) {
    await Tools.destroy({
      where: {
        id,
      },
    });

    return true;
  }
}

export default new DeleteTools();
