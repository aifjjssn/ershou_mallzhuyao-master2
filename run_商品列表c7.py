from flask import Flask,render_template, request,redirect,url_for,session
from mysql_util import MysqlUtil
import random
app = Flask(__name__)
app.secret_key = 'mrsoft12345678' # 设置秘钥

@app.route('/')
def index():

    db = MysqlUtil()
    sql = 'SELECT * FROM product_temp'
    products = db.fetchall(sql)  # 获取多条记录
    print(products)

    return render_template("/test/product_list.html",products=products)

app.run(debug=True)