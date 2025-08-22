/**
 * 检查当前是否在 VSCode 内核的 IDE 中运行 pnpm install
 */

console.log("🔍 正在检查 IDE 环境...");

function isVSCode() {
  // 方法 1: 检测 VSCode 的环境变量
  if (process.env.VSCODE_PID) return true;

  // 方法 2: 检测 VSCode 内置终端特有变量
  if (process.env.TERM_PROGRAM === 'vscode') return true;

  return false;
}

if (isVSCode()) {
  console.log('✅ 当前 IDE 是 VSCode 内核，安装依赖中...');
} else {
  console.error(
    '❌ 检测到当前IDE不是基于 VSCode 内核，请使用基于 VSCode 内核的IDE，打开并安装依赖！推荐：Visual Studio Code',
  );
  process.exit(1);
}
