from flask import Flask
import threading
import time

app = Flask(__name__)

@app.route('/')
def home():
    return "Server is running 24/7"

def run():
    app.run(host="0.0.0.0", port=3000)

def keep_alive():
    while True:
        print("Running...")
        time.sleep(60)

threading.Thread(target=keep_alive).start()

run()
