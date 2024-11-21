const os = require("os");
const express = require("express");
const axios = require("axios");
const bodyParser = require("body-parser");
const crypto = require("crypto");

const app = express();
const port = 3000;

// 获取本地 IP 地址
function getLocalIPAddress() {
  const interfaces = os.networkInterfaces();
  for (const interfaceName in interfaces) {
    const iface = interfaces[interfaceName];
    for (const alias of iface) {
      if (alias.family === "IPv4" && !alias.internal) {
        return alias.address;
      }
    }
  }
  return "127.0.0.1"; // 如果未找到外部地址，返回 localhost
}

// 配置静态文件目录
app.use(express.static("public"));

// 使用 body-parser 解析 POST 请求的 JSON 数据
app.use(bodyParser.json());

// appSecret 固定值
const appSecret = "5Ktul9tEP2";

// 处理 AJAX 请求并转发
app.post("/api/fullSimCard/changeFullNetwork", async (req, res) => {
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
    const stringSignTemp = stringA + "&appSecret=" + appSecret;
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
    const code = data.code + "";
    return res.json({
      code,
      data: data.operator,
      message: getMessage(code),
    });
  } catch (error) {
    console.error("Error:", error.message);
    return res
      .status(500)
      .json({ code: 1, message: "服务器错误", error: error.message });
  }
});

function getMessage(code) {
  const msgMap = {
    0: "正常",
    1: "appid，secret，sign有误",
    4: "运营商有误",
    1001: "1001：连接设备超时",
    1002: "1002：设备异常",
    1003: "1003：设备异常",
    9999: "意外错误",
  };
  return msgMap[code] || "未知错误";
}

// 启动服务器
app.listen(port, () => {
  const localIP = getLocalIPAddress();
  console.log(`静态服务器运行在:`);
  console.log(`- 本地访问: http://localhost:${port}`);
  console.log(`- 局域网访问: http://${localIP}:${port}`);
});
