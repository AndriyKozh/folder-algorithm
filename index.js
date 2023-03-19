const fs = require("fs");

const { db } = require("./DB");

const arrays = [
  "гідроелектростанція",
  "станція",
  "гідро",
  "гадюка",
  "електро",
  "словосполучення",
  "слово",
  "сполучення",
];

// const { db } = require("../../model/dbConnection");

// setInterval(() => {
//   const mysqlQuery =
//     "SELECT user_history_youtube_id FROM user_history_youtube WHERE test = 'false' AND statusSub='subtitleSaved'  ORDER BY viewe DESC";

//   db.query(mysqlQuery, function (err, results) {
//     if (err) {
//       console.error(err);
//     }
//     const rowID = Object.values(results[0]);
//     console.log(rowID);

//     const sqlQuery =
//       "UPDATE user_history_youtube SET test=? WHERE user_history_youtube_id=?";
//     db.query(sqlQuery, [1, rowID], (err, result) => {
//       if (err) {
//         console.log(err);
//         // reject(err);
//       }
//       console.log(result);
//     });

//     //   runFunctions(rowID);
//   });
// }, 5000);

function frequency(objWords) {
  const objWord = require(`../json_subtitle/${objWords}/count_${objWords}.json`);
  const arrays = Object.keys(objWord);
  console.log(arrays);
  function createDir(path) {
    const parts = path.split("/");
    const filename = parts.pop() + ".txt";
    for (let i = 1; i <= parts.length; i++) {
      const subPath =
        "./src/subtitle/wordAndIndexInFolders/" + parts.slice(0, i).join("/");
      console.log(subPath);
      if (!fs.existsSync(subPath)) {
        fs.mkdirSync(subPath);
      }
    }
    const filePath =
      "./src/subtitle/wordAndIndexInFolders/" +
      parts.join("/") +
      "/" +
      filename;

    // console.log(filePath);
    if (!fs.existsSync(filePath)) {
      fs.writeFileSync(filePath, "008nuF8xIUQ");
    }
  }
  for (const word of arrays) {
    createDir(word.split("").join("/"));
  }
}
frequency(arrays);
