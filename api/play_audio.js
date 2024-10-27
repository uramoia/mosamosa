import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const { audioFile } = req.query;

  console.log("Received request for audioFile:", audioFile);

  const audioFiles = {
    'Apple': 'Apple.wav',
    'Goukei': 'Goukei.wav'
  };

  if (audioFile && audioFiles[audioFile]) {
    const filePath = path.join(process.cwd(), 'public', audioFiles[audioFile]);
    
    if (fs.existsSync(filePath)) {
      const stat = fs.statSync(filePath);
      res.writeHead(200, {
        'Content-Type': 'audio/wav',
        'Content-Length': stat.size
      });
      const readStream = fs.createReadStream(filePath);
      readStream.pipe(res);
    } else {
      console.error("Audio file not found:", filePath);
      res.status(404).json({ message: 'Audio file not found' });
    }
  } else {
    console.error("Invalid audio file specified:", audioFile);
    res.status(400).json({ message: 'Invalid audio file specified' });
  }
}
