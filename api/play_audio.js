export default function handler(req, res) {
  const { audioFile } = req.query;
  res.status(200).json({ message: `Playing ${audioFile}` });
}
