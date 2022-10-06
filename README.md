# App Kéo Thả "To do list"
># Tạo project ở local
><code>npm install -g express-generator</code><br>
><code>express</code><text>// Ấn Y để tiếp tục</text> <br>
><code>npm install</code><br>
><code>npm start</code><text>// Cài thêm <a href="https://www.npmjs.com/package/nodemon">nodemon</a>, xem hướng dẫn install <code>nodemon</code> thêm <a href="https://www.youtube.com/watch?v=jA7eczg-dTc">ở đây</a>. Gợi ý: update file index.js</text><br>
><text>url: http://127.0.0.1:3000/</text>

># Tạo DB
><text><strong>mongoDB</strong> :https://www.mongodb.com/</text><br>
><text><strong>Note 1:</strong> Replace <code><</code>password<code>></code> : mongodb+srv://ncthai:<code><</code>password<code>></code>@cluster0.awldtsh.mongodb.net/test => mongodb+srv://ncthai:thispassword@cluster0.awldtsh.mongodb.net/test.</text><br>
><text><strong>Note 2:</strong></text><br>
>Ở file .env sẽ thêm 2 dòng này: <code>PORT=6000</code> & <code>TOKEN_SECRET=thai012746</code>
><p>Nếu trường hợp gặp lỗi này<code>Cannot find module 'something'</code> thì mình sẽ lên gg install thêm package</p> 
><text><strong>Note 3:</strong> Điều kiện để gọi api(Token,..)</text>

# Test postman:
><text>Body/raw/JSON: {"name":"test user","email":"ncthai.ivs@gmail.com","password":"12345"}</text><br>
><text>Request URL method POST: <code>http://localhost:3000/api/auth/register</code></text></br>
><text>Request URL method POST: <code>http://localhost:3000/api/auth/login</code></text></br>
><text>Request URL method GET: <code>http://localhost:3000/api/users</code> </text>
  
># Authorization
><text>Sử dụng JWT</text><br>
><text>Tạo token cho user</text><br>
><text>Update thêm đoạn <code>TOKEN_SECRET=somethingrandom</code> vào file <code>.env</code></text>
><p><strong>Note 1</strong></p>
><p><code>Error: secretOrPrivateKey must have a value</code></p>
------------------------------------
<h1><strong>SOLUTION</strong></h1>
<p><em><span style="text-decoration: underline;"><strong>Solution 1: </strong></span></em></p>
<p>Go to the file app.js. After&nbsp;installing&nbsp;it&nbsp;with&nbsp;npm&nbsp;i&nbsp;dotenv,&nbsp;import&nbsp;it&nbsp;as&nbsp;early&nbsp;as&nbsp;possible&nbsp;in&nbsp;your&nbsp;application&nbsp;main&nbsp;file&nbsp;like&nbsp;this:</p>
<pre><code>require("dotenv").config();</code></pre>
<p>Watch more at (<a href="https://stackoverflow.com/questions/58673430/error-secretorprivatekey-must-have-a-value">https://stackoverflow.com/questions/58673430/error-secretorprivatekey-must-have-a-value</a>)</p>
