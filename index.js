const express = require("express");
const axios = require("axios");
const bodyParser = require("body-parser");
const crypto = require("crypto");

const app = express();
const port = 3000;

// 配置静态文件目录
app.use(express.static("public"));

// 使用 body-parser 解析 POST 请求的 JSON 数据
app.use(bodyParser.json());

// appSecret 固定值
const appSecret = "5Ktul9tEP2";

// 处理 AJAX 请求并转发
app.post("/fullSimCard/changeFullNetwork", async (req, res) => {
  try {
    // 从前端请求体中获取 operator 值
    const { newIspId } = req.body;
    const operator = newIspId;
    if (!operator) {
      return res.status(400).json({ code: 1, message: "operator 参数缺失" });
    }

    // 固定参数
    const dt = Date.now();
    const appid = "LYWLMfDr64iPTzA7KDUb";
    const imei = "352365845243150";
    const secret = "q6a7zWJLqq9S0inAFh2GJ2FhiGK7YIGG";

    // 构造签名的参数
    const params = {
      dt,
      appid,
      imei,
      secret,
      operator,
    };

    // 1. 对参数按键名 ASCII 升序排序
    const sortedKeys = Object.keys(params).sort();
    const stringA = sortedKeys.map((key) => `${key}=${params[key]}`).join("&");

    // 2. 拼接 appSecret 并生成 MD5 签名
    const stringSignTemp = stringA + appSecret;
    const sign = crypto
      .createHash("md5")
      .update(stringSignTemp)
      .digest("hex")
      .toUpperCase();

    // 构造请求报文
    const requestBody = { ...params, sign };

    // 转发到指定地址
    const apiResponse = await axios.post(
      "http://129.204.34.245:8080/api/serviceAccept/switchOperator",
      requestBody
    );

    // 返回数据给前端
    const { data } = apiResponse;
    return res.json({
      code: "0",
      data: data.code,
    });
  } catch (error) {
    console.error("Error:", error.message);
    return res
      .status(500)
      .json({ code: 1, message: "服务器错误", error: error.message });
  }
});

// 启动服务器
app.listen(port, () => {
  console.log(`静态服务器运行在 http://localhost:${port}`);
});
