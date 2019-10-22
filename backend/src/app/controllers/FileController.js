import File from '../models/File';

class FileController {
	// Here the file is stored in the database
	// For simplicity, originalname and filename are stored on the name and path variables
	async store(req, res) {
		const { originalname: name, filename: path } = req.file;

		const file = await File.create({
			name,
			path,
		});

		return res.json(file);
	}

	async show(req, res) {
		const { id } = req.params;

		const file = await File.findByPk(id);

		return res.json(file);
	}
}

export default new FileController();
