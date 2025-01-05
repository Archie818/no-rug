import { TokenAnalyzer } from "./tokenAnalyzer";

async function main() {
  const analyzer = new TokenAnalyzer(
    "YOUR_SOLANA_RPC_URL",
    "YOUR_OPENAI_API_KEY"
  );

  const tokenAddress = "TOKEN_ADDRESS";
  const result = await analyzer.analyzeToken(tokenAddress);

  console.log("代币数据:", result.tokenData);
  console.log("风险分析:", result.riskAnalysis);
}

main().catch(console.error);
