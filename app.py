from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route("/submit", methods=["POST"])
def submit():
    data = request.get_json() or {}
    itemName = data.get("itemName")
    itemDescription = data.get("itemDescription")

    # Here you would process/store the data (e.g., MongoDB).
    # For assignment demo, we just print to the container logs.
    print("Received from Frontend:", itemName, itemDescription)

    return jsonify({"status": "success", "itemName": itemName})

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
