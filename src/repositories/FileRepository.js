const fs = require("fs");

export class FileRepositry {
  constructor(filePath) {
    this.filePath = filePath;
  }

  save(item) {
    fs.writeFileSync(this.filePath, JSON.stringify(item), "utf8");
  }

  get() {
    return fs.readFileSync(this.filePath, "utf8");
  }
}
