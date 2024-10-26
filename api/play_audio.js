export default function handler(req, res) {
  const { audioFile } = req.query;
  
  // CORSヘッダーの設定
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // 音声ファイルのマッピング
  const audioFiles = {
    'Apple': '/Apple.wav',
    'Goukei': '/Goukei.wav'
  };

  if (audioFile && audioFiles[audioFile]) {
    const fullUrl = `https://mosamosa.vercel.app${audioFiles[audioFile]}`; // フルURLを生成
    res.status(200).json({ 
      message: 'Playing audio', 
      file: fullUrl // フルURLを返す
    });
  } else {
    res.status(400).json({ 
      message: 'Invalid audio file specified' 
    });
  }
}
