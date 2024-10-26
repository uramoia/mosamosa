export default function handler(req, res) {
  try {
    const { audioFile } = req.query;
    console.log("Received request for audioFile:", audioFile);
    
    // 音声ファイルのマッピング
    const audioFiles = {
      'Apple': '/Apple.wav',
      'Goukei': '/Goukei.wav'
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
  } catch (error) {
    console.error("Server error:", error);
    res.status(500).json({ 
      message: 'Server error', 
      error: error.message 
    });
  }
}
