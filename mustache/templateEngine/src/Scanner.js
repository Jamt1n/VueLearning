/*
  扫描器类
*/

export default class Scanner {
  constructor(templateStr) {
    // console.log(templateStr);
    this.templateStr = templateStr;
    // 指针
    this.pos = 0;
    // 尾巴
    this.tail = templateStr;
  }

  // 路过，没返回值
  scan(tag) {
    if (this.tail.indexOf(tag) == 0) {
      // tag多长就移几位 比如{{移动2位
      this.pos += tag.length;
      // 尾要变
      this.tail = this.templateStr.substring(this.pos);
    }
  }

  // 指针扫描，直到遇到指定内容，返回路过的文字
  scanUntil(stopTag) {
    // 记录执行本方法的pos
    const pos_backup = this.pos;
    // 尾的头不是stopTap就是没扫描到
    while (!this.eos() && this.tail.indexOf(stopTag) != 0) {
      this.pos++;
      // 尾从当前字符开始
      this.tail = this.templateStr.substr(this.pos);
    }

    return this.templateStr.substring(pos_backup, this.pos);
  }

  eos() {
    return this.pos >= this.templateStr.length;
  }
}
