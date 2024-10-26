export default function handler(req, res) {
  const { audioFile } = req.query;

  // CORSヘッダーの設定
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // 音声ファイルのマッピング
  const audioFiles = {
    'Apple': 'https://mosamosa.vercel.app/Apple.wav',
    'Goukei': 'https://mosamosa.vercel.app/Goukei.wav'
  };

  if (audioFile && audioFiles[audioFile]) {
    res.status(200).json({ 
      message: 'Playing audio', 
      file: audioFiles[audioFile] 
    });
  } else {
    res.status(400).json({ 
      message: 'Invalid audio file specified' 
    });
  }
}
