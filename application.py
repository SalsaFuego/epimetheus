from flask import Flask

app = Flask(__name__)

@app.route("/")
def index():
    return "Hello, world"

@app.route("/nic")
def nic():
    return "Hello, Nic"

@app.route("/<string:asdf>")
def hello(asdf):
    return f"Hello, {asdf}"
