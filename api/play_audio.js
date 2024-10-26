export default function handler(req, res) {
  const { audioFile } = req.query;

  // リクエストパラメータのログ出力
  console.log("Received request for audioFile:", audioFile);

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
    const fullUrl = `https://mosamosa.vercel.app/${audioFiles[audioFile]}`; // フルURLを生成
    console.log("Returning URL:", fullUrl); // レスポンスURLのログ出力
    res.status(200).json({ 
      message: 'Playing audio', 
      file: fullUrl // フルURLを返す
    });
  } else {
    console.error("Invalid audio file specified:", audioFile); // エラーログ出力
    res.status(400).json({ 
      message: 'Invalid audio file specified' 
    });
  }
}
