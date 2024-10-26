export default function handler(req, res) {
  const { audioFile } = req.query;
  console.log("Received request for audioFile:", audioFile);
  
  // 音声ファイルのマッピング
  const audioFiles = {
    'Apple': '/Apple.wav',
    'Goukei': '/Goukei.wav'
    'Thanks': '/Thanks.wav',
    'Welcome': '/Welcome.wav',
    'Mikan': 'Mikan.wav'
  };

  if (audioFile && audioFiles[audioFile]) {
    console.log("Playing audio file:", audioFiles[audioFile]);
    res.status(200).json({ 
      message: 'Playing audio', 
      file: audioFiles[audioFile] 
    });
  } else {
    console.log("Invalid audio file specified:", audioFile);
    res.status(400).json({ 
      message: 'Invalid audio file specified' 
    });
  }
}
