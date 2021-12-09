1. 使用 Postman 软件导入以下两个文件：
Model Derivative.postman_collection.json
Model_Derivative.postman_environment.json

2. 使用 Postman软件，使用以下信息换取 accessToken:

clint_id: NBGHiFdSnhzehexndWrgr8umNU0LLoRA
client_secret: w5RSbL9XSdltbv1j

accessToken 有效期为 3600 秒。

3. 教学文档：
https://forge.autodesk.com/en/docs/viewer/v7/developers_guide/viewer_basics/starting-html/


4. 我已经按照教学文档，使用Autodesk Forge API, 把黄衍洁制作的冷却塔模型上传至 Autodesk BIM 360 平台（就是云存储）， 
documentId = 'urn:dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6Ympqc2YvYmJiLmZieA=='

使用 VS Code 的 Go Live 插件，或者其他 IDE 提供的任何 web server, 加载 index.html 文件即可展示模型，并进行简单互动。

** 直接用浏览器打开 index.html 文件不行。