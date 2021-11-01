from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def coffee_index():
  return render_template('coffee_index.html')


@app.route('/coffee/recipes')
def coffee_recipes():
  return render_template('coffee_recipes.html')


@app.route('/coffee/variables')
def coffee_vars():
  return render_template('coffee_vars.html')

if __name__ == '__main__':
  app.run(debug=True)