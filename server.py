from http.server import BaseHTTPRequestHandler, HTTPServer
import os

class RequestHandler(BaseHTTPRequestHandler):
    def do_GET(self):
        if self.path == '/play_audio':
            self.send_response(200)
            self.send_header('Content-type', 'text/html')
            self.end_headers()
            self.wfile.write(b"Playing audio")
            os.system("start https://example.com/your_audio_file.mp3")
        else:
            self.send_response(404)
            self.end_headers()

server_address = ('', 8000)  # ポート8000を使用
httpd = HTTPServer(server_address, RequestHandler)
print('サーバーが起動しました。ポート8000で待機中...')
httpd.serve_forever()
