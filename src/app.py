import os

from flask import Flask, render_template
from flask.helpers import send_from_directory
from flask_assets import Environment, Bundle


##############################################

app     = Flask(__name__, static_url_path='/static')
env     = Environment(app)

env.url = app.static_url_path
env.config['SECRET_KEY'] = 'asdfghjklk'
env.config['LIBSASS_INCLUDES'] = [os.path.join(app.root_path, 'node_modules')]

js_core   = Bundle('js/core.js',
                   '../node_modules/bootstrap/js/dist/*.js',
                   filters='jsmin',
                   output='js/core_bundle.min.js')
scss_core = Bundle('sass/project.scss',
                   filters='libsass,cssmin',
                   depends=['/node_modules', '**/*.scss'],
                   output='css/core.min.css')

env.register('scss_core', scss_core)
env.register('js_core', js_core)


##############################################

@app.route('/static/<path:path>')
def static_assets(path):
   return send_from_directory('static', path)

##############################################
# Home
@app.route('/')
def home():
   return render_template('pages/index.html', active_page='home')

@app.route('/about/')
def about():
   return render_template('pages/about.html', active_page='about')

##############################################

@app.route('/apps/advisor/')
def advisor_page():
   return render_template('apps/advisor/advisor.html', active_page='advisor')

##############################################

if __name__ == '__main__':
    app.run(port=3000, debug=True)
