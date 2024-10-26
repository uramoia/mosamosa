export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    export default function handler(req, res) {
      const { audioFile } = req.query;
      res.status(200).json({ message: `Playing ${audioFile}` });
    }
}
