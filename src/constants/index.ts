export enum generateStatus {
  loading = 0,
  success = 1,
  fail = 2,
}

export const generateStatusMap = {
  0: '生成中',
  1: '生成成功',
  2: '生成失败',
}

export const convert = (num: number): string => {
  if (num === undefined || num === null) {
      return ''
  }

  const acode = 'A'.charCodeAt(0);
  let tmpCol = num + 1; //col是从0开始，此处按1开始算
  let colStr = '';
  while (tmpCol > 0) {
      let m = tmpCol % 26;
      tmpCol = Math.floor(tmpCol / 26);
      if (m === 0) {
          // 'Z', 26进制没有0，Z位需要借位
          tmpCol -= 1;
          colStr = 'Z' + colStr;
      } else {
          colStr = String.fromCharCode(m + acode - 1) + colStr;
      }
  }
  return colStr;
}