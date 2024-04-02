const fs = require("fs");

class FileRepositry {
  constructor(filePath) {
    this.filePath = filePath;

    this.save = this.save.bind(this);
    this.get = this.get.bind(this);
  }

  save(item) {
    fs.writeFileSync(this.filePath, JSON.stringify(item), "utf8");
  }

  get() {
    return JSON.parse(fs.readFileSync(this.filePath, "utf8"));
  }
}

module.exports = { FileRepositry };
