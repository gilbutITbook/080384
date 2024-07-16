const express = require("express");
const fs = require("fs/promises");
const path = require("path");
const app = express();
const port = 3000;
const dataFilePath = path.join(__dirname, "data.json");
app.use(express.json());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type"); // 오탈자
  next();
});

// GET: 모든 데이터 가져오기
app.get("/api/data", async (req, res) => {
  try {
    const data = await readDataFile();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});
// POST: 새로운 데이터 추가하기
app.post("/api/data", async (req, res) => {
  try {
    const newData = req.body;
    const data = await readDataFile();
    const writeData = {
      id: data.length + 1,
      name: `${newData.name} ${data.length + 1}`,
      description: `${newData.description} ${data.length + 1}`,
    };
    data.push(writeData);
    await writeDataFile(data);
    res.json(newData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
// PUT: 데이터 업데이트하기
app.put("/api/data/:id", async (req, res) => {
  try {
    const id = Number(req.params.id);
    const updatedData = req.body;
    const data = await readDataFile();
    const index = data.findIndex((item) => item.id === id);
    if (index !== -1) {
      data[index] = { ...data[index], ...updatedData };
      await writeDataFile(data);
      res.json(data[index]);
    } else {
      res.status(404).json({ error: "Not Found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});
// PATCH: 데이터 부분 업데이트하기
app.patch("/api/data/:id", async (req, res) => {
  try {
    const id = Number(req.params.id);
    const partialData = req.body;
    const data = await readDataFile();
    const index = data.findIndex((item) => item.id === id);
    if (index !== -1) {
      data[index] = { ...data[index], ...partialData };
      await writeDataFile(data);
      res.json(data[index]);
    } else {
      res.status(404).json({ error: "Not Found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});
// DELETE: 데이터 삭제하기
app.delete("/api/data/:id", async (req, res) => {
  try {
    const id = Number(req.params.id);
    const data = await readDataFile();
    const index = data.findIndex((item) => item.id === id);
    if (index !== -1) {
      const deletedItem = data.splice(index, 1)[0];
      await writeDataFile(data);
      res.json(deletedItem);
    } else {
      res.status(404).json({ error: "Not Found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});
// Helper 함수: 데이터 파일 읽기
async function readDataFile() {
  const data = await fs.readFile(dataFilePath, "utf-8");
  return data ? JSON.parse(data) : [];
}
// Helper 함수: 데이터 파일 쓰기
async function writeDataFile(data) {
  await fs.writeFile(dataFilePath, JSON.stringify(data, null, 2), "utf-8");
}
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
