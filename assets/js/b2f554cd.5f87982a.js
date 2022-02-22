"use strict";(self.webpackChunklun_dao=self.webpackChunklun_dao||[]).push([[477],{10:function(n){n.exports=JSON.parse('{"blogPosts":[{"id":"mev","metadata":{"permalink":"/blog/mev","editUrl":"https://github.com/lun-dao/LunDAO/tree/main/packages/create-docusaurus/templates/shared/blog/mev.md","source":"@site/blog/mev.md","title":"MEV - \u6700\u5927\u53ef\u63d0\u53d6\u50f9\u503c","description":"\u89e3\u91cb MEV (\u6700\u5927\u53ef\u63d0\u53d6\u50f9\u503c) \u7684\u6210\u56e0\u4ee5\u53ca\u539f\u7406\uff0c\u4e26\u4e14\u7c21\u8ff0\u76ee\u524d\u7684\u89e3\u6c7a\u65b9\u6848\u3002","date":"2022-02-13T00:00:00.000Z","formattedDate":"February 13, 2022","tags":[{"label":"MEV","permalink":"/blog/tags/mev"},{"label":"Miner Extractable Value","permalink":"/blog/tags/miner-extractable-value"},{"label":"Maximal Extractable Value","permalink":"/blog/tags/maximal-extractable-value"}],"readingTime":13.975,"truncated":true,"authors":[{"name":"Yuren Ju","title":"Engineering Manager @ Perpetual Protocol","url":"https://yurenju.medium.com/","imageURL":"https://github.com/yurenju.png","key":"yurenju"}]},"content":"\u6700\u5927\u53ef\u63d0\u53d6\u50f9\u503c (Maximal Extractable Value, MEV) \u662f\u4e00\u7a2e\u900f\u904e\u6539\u8b8a\u4ea4\u6613\u9806\u5e8f\u4f86\u7372\u5f97\u5229\u76ca\u7684\u65b9\u6cd5\u3002\u6bd4\u5982\u8aaa\u7926\u5de5\u53ef\u4ee5\u5728 Uniswap \u4ea4\u6613\u4e2d\u767c\u73fe\u53ef\u4ee5\u71df\u5229\u7684\u6a5f\u6703\u4e26\u4e14\u81ea\u52d5\u5316\u7684\u57f7\u884c\u7279\u5b9a\u7684\u7b56\u7565\u4f86\u71df\u5229\uff0c\u800c\u9019\u6a23\u7684\u884c\u70ba\u6709\u53ef\u80fd\u6703\u8b93\u539f\u672c\u7684\u4ea4\u6613\u8005\u8667\u640d\uff0c\u4f46\u6709\u8da3\u7684\u662f\u9019\u4e5f\u6c92\u6709\u9055\u53cd\u5340\u584a\u93c8\u7684\u898f\u5247\uff0c\u53ea\u662f\u5229\u7528\u5340\u584a\u93c8\u4f86\u5b8c\u6210\u7684\u4e00\u7a2e\u884c\u70ba\uff0c\u7576\u7136\u9019\u6a23\u7684\u884c\u70ba\u6709\u53ef\u80fd\u50b7\u5bb3\u5340\u584a\u93c8\u7684\u751f\u614b\u7cfb\u3002\u672c\u6587\u5c07\u6703\u4ee5 Ethereum \u4f5c\u70ba\u7bc4\u4f8b\u4f86\u8b1b\u89e3\u9019\u6a23\u884c\u70ba\u7684\u904b\u4f5c\u539f\u7406\u3002\\n\\n\x3c!--truncate--\x3e\\n\\n\u9996\u5148\u6211\u5011\u9700\u8981\u4e86\u89e3\u5728 Ethereum \u4ea4\u6613\u662f\u600e\u9ebc\u88ab\u57f7\u884c\u7684\u3002\\n\\n## \u767c\u751f\u4ea4\u6613\u524d\uff0c\u4f60\u7684 tx \u5728\u54ea\u88e1\uff1f\\nAlice \u60f3\u8981\u9001\u51fa\u4e00\u500b\u4ea4\u6613\u5728 Uniswap \u4e0a\u9762\u5c07 3000 USDC \u63db\u6210 1 ETH\uff0c\u7576\u6309\u4e0b MetaMask \u4e0a\u9762\u7684\u9001\u51fa\u4e4b\u5f8c\uff0c\u5be6\u969b\u4e0a\u4ed6\u7684\u4ea4\u6613\u662f\u600e\u9ebc\u6a23\u88ab\u8655\u7406\u7684\u5462\uff1f\\n\\n\u300c\u5728 Uniswap \u4e0a\u7528 3000 USDC \u4ea4\u63db 1 ETH\u300d\u9019\u4ef6\u4e8b\u60c5\u6211\u5011\u53ef\u4ee5\u770b\u6210\u662f Alice \u7684\u610f\u5716\uff0c\u4e00\u4ef6\u4ed6\u60f3\u8981\u57f7\u884c\u7684\u4e8b\u60c5\uff0c\u7a31\u70ba pending transaction\u3002\u9019\u500b pending tx \u6703\u88ab\u50b3\u9001\u5230 Ethereum \u4e0a\u9762\u7684\u7bc0\u9ede\uff0c\u800c\u7bc0\u9ede\u4e4b\u9593\u6703\u4e92\u76f8\u4ea4\u63db pending tx\uff0c\u76e1\u53ef\u80fd\u7684\u8b93\u66f4\u591a\u7bc0\u9ede\u77e5\u9053\u4f7f\u7528\u8005\u6709\u9019\u500b\u9700\u6c42\uff0c\u9019\u4e9b\u9084\u6c92\u88ab\u6253\u5305\u5230\u5340\u584a\u88e1\u9762\u7684 pending tx \u5c31\u6703\u88ab\u653e\u5230\u7bc0\u9ede\u7279\u5b9a\u5340\u57df\u5148\u5132\u85cf\u8d77\u4f86\uff0c\u9019\u500b\u5340\u57df\u53eb\u505a mempool\u3002\u800c\u6bcf\u500b\u7bc0\u9ede\u56e0\u70ba\u6703\u6536\u53d6\u4f86\u81ea\u4e0d\u540c\u5730\u65b9\u7684 pending tx\uff0c\u6240\u4ee5\u6bcf\u500b\u7bc0\u9ede\u7684 mempool \u5167\u5bb9\u53ef\u80fd\u90fd\u4e0d\u4e00\u6a23\uff0c\u6392\u5e8f\u4e5f\u6703\u4e0d\u4e00\u6a23\u3002\\n\\n![pending tx](mev/pending-tx.png)\\n\\n\u7bc0\u9ede\u6709\u5e7e\u7a2e\u4e0d\u540c\u7684\u578b\u614b\uff0c\u800c\u7926\u5de5\u4e5f\u662f\u7bc0\u9ede\u7684\u4e00\u7a2e\u578b\u614b\uff0c\u4ed6\u7684\u5de5\u4f5c\u662f\u8ca0\u8cac\u628a mempool \u88e1\u9762\u7684 pending tx \u6253\u5305\u8d77\u4f86\u8b8a\u6210\u4e00\u500b\u5340\u584a\uff0c\u7136\u5f8c\u8ddf\u5176\u4ed6\u7926\u5de5\u4e00\u8d77\u7af6\u722d\u8a18\u5e33\u6b0a\uff0c\u7576\u5176\u4e2d\u4e00\u500b\u7926\u5de5\u722d\u53d6\u5230\u4e86\u8a18\u5e33\u6b0a\u5f8c\uff0c\u9019\u500b\u5340\u584a\u5c31\u6703\u88ab\u767c\u4f48\u51fa\u53bb\uff0c\u6b64\u6642 Alice \u7684 pending tx \u624d\u8b8a\u6210\u4e00\u500b\u5df2\u7d93\u4e0a\u93c8\u7684\u4ea4\u6613 (transaction)\u3002\\n\\n## \u7926\u5de5\u600e\u9ebc\u6311\u9078 pending tx\\n\u56e0\u70ba\u5305\u88dd\u3001\u767c\u5e03\u5340\u584a\u662f\u4e00\u4ef6\u5229\u76ca\u5c0e\u5411\u7684\u4e8b\u60c5\uff0c\u6bcf\u767c\u5e03\u4e00\u500b\u5340\u584a\u7926\u5de5\u53ef\u4ee5\u5f97\u5230\u56fa\u5b9a\u7684\u5340\u584a\u734e\u52f5\uff0c\u9084\u6709\u5728\u9019\u500b\u5340\u584a\u88e1\u9762\u7684\u4ea4\u6613\u6240\u63d0\u4f9b\u7684\u4ea4\u6613\u8cbb\u3002\u6bd4\u5982\u8aaa 14143088 \u9019\u500b\u5340\u584a\u7e3d\u5171\u6709 360 \u500b\u88ab\u6253\u5305\u9032\u53bb\u7684\u4ea4\u6613\uff0c\u800c\u767c\u5e03\u9019\u500b\u5340\u584a\u53ef\u4ee5\u5f97\u5230\u7684\u56fa\u5b9a\u734e\u52f5\u662f 2 ETH (\u4f9d\u7167\u4eca\u5929\u7684\u532f\u7387\u662f 16 \u842c\u53f0\u5e63)\uff0c\u800c\u5f8c\u9762\u5169\u500b\u6578\u5b57 `2.410435284410848966 - 2.13247814979521476 ~= 0.2 ETH` \u5247\u662f\u6240\u6709\u4ea4\u6613\u63d0\u4f9b\u7684\u4ea4\u6613\u8cbb\u52a0\u7e3d\u3002\u70ba\u4ec0\u9ebc\u6709\u5169\u500b\u6578\u5b57\u6d89\u53ca\u5230 EIP-1559 \u9019\u908a\u5c31\u4e0d\u5148\u6df1\u5165\u8a0e\u8ad6\u3002\\n\\n![block 14143088](./mev/block-14143088.png)\\n\\n\u81f3\u65bc\u7926\u5de5\u662f\u600e\u9ebc\u6311\u9078\u54ea\u4e9b\u4ea4\u6613\u8981\u88ab\u653e\u5230\u9019\u500b\u5340\u584a\u88e1\u9762\uff0c\u57fa\u672c\u4e0a\u5c31\u662f\u524d\u9762\u8b1b\u7684\u5229\u76ca\u5c0e\u5411\u3002\u4e00\u822c\u7684\u60c5\u6cc1\uff0c\u7926\u5de5\u6703\u6392\u5e8f\u6240\u6709\u4ea4\u6613\u88e1\u9762\u63d0\u4f9b\u7684\u4ea4\u6613\u8cbb\uff0c\u4e26\u4e14\u512a\u5148\u6253\u5305\u63d0\u4f9b\u6bd4\u8f03\u591a\u4ea4\u6613\u8cbb\u7684\u4ea4\u6613\u3002\u6240\u4ee5\u4ea4\u6613\u8cbb\u63d0\u4f9b\u8f03\u591a\u7684\u4ea4\u6613\u6703\u6392\u5e8f\u5728\u524d\u9762\u88ab\u6253\u5305\u9032\u53bb\u5340\u584a\u88e1\u9762\uff0c\u5982\u679c\u4f60\u4ea4\u6613\u8cbb\u63d0\u4f9b\u7684\u5c11\uff0c\u5c31\u6703\u904e\u4e86\u5f88\u4e45\u7b49\u5230\u6240\u6709\u4ea4\u6613\u90fd\u6d88\u5316\u7684\u5dee\u4e0d\u591a\u624d\u6703\u8f2a\u5230\u4f60\u3002\\n\\n\u4f46\u9019\u908a\u662f\u6307\u4e00\u822c\u7684\u60c5\u6cc1\uff0c\u5be6\u969b\u4e0a\u8981\u628a\u4ec0\u9ebc\u4ea4\u6613\u6253\u5305\u9032\u53bb\u5340\u584a\u4e26\u6c92\u6709\u9650\u5236\uff0c\u7926\u5de5\u53ef\u4ee5\u7528\u5404\u7a2e\u65b9\u5f0f\u6c7a\u5b9a\u54ea\u4e9b\u5340\u584a\u8981\u6253\u5305\u3002\\n\\n## \u4e09\u660e\u6cbb\u653b\u64ca (Sandwich Attack)\\n\u7531\u65bc\u7926\u5de5\u53ef\u4ee5\u81ea\u884c\u6c7a\u5b9a\u54ea\u4e9b\u4ea4\u6613\u8981\u88ab\u6253\u5305\u9032\u53bb\u5340\u584a\u88e1\u9762\uff0c\u800c\u9019\u4e9b pending tx \u5728 mempool \u88e1\u9762\u662f\u4e00\u500b\u516c\u958b\u7684\u8cc7\u8a0a\uff0c\u4e00\u822c\u7bc0\u9ede\u6703\u63d0\u4f9b\u516c\u958b\u7684\u65b9\u6cd5\u8b93\u4efb\u4f55\u4eba\u53ef\u4ee5\u67e5\u8a62\u76ee\u524d mempool \u88e1\u9762\u6709\u54ea\u4e9b\u4ea4\u6613\u6b63\u5728\u7b49\u5f85\u88ab\u6253\u5305\u3002\\n\\n\u9019\u908a\u5c31\u51fa\u73fe\u4e86\u4e00\u4e9b\u53ef\u4ee5\u64cd\u4f5c\u7684\u7a7a\u9593\u3002\\n\\n\u524d\u9762\u8209\u4f8b\u7684 Alice \u6253\u7b97\u7528 3,000 USDC \u4ea4\u63db 1 ETH\uff0c\u800c\u6bcf\u6b21\u7684\u4ea4\u6613\u90fd\u6703\u5f71\u97ff\u4e0b\u4e00\u6b21\u4ea4\u6613\u7684\u50f9\u683c\u3002\\n\\n\u9019\u6a23\u7684\u4ea4\u6613\u5167\u5bb9\u662f\u53ef\u4ee5\u76f4\u63a5\u5f9e pending tx \u4e2d\u88ab\u89e3\u6790\u51fa\u4f86\u3002\u5982\u679c\u6709\u4eba\u767c\u73fe\u4e00\u7a2e\u81ea\u52d5\u7684\u908f\u8f2f\uff0c\u4ed6\u5206\u6790 mempool \u88e1\u9762\u7684\u6bcf\u4e00\u500b\u4ea4\u6613\uff0c\u4e26\u4e14\u627e\u5230\u4e00\u500b\u65b9\u6cd5\u53ef\u4ee5\u5f9e\u4e2d\u7372\u5229\uff0c\u6bd4\u5982\u8aaa Bob \u767c\u73fe mempool \u88e1\u9762\u6709 Alice \u9019\u7b46\u4ea4\u6613\uff0c\u800c\u4e14\u4ed6\u53ea\u8981\u53ef\u4ee5\u6392\u5e8f\u9019\u4e9b\u4ea4\u6613\u7684\u57f7\u884c\u9806\u5e8f\uff1a\\n1. Bob \u5148\u7528 6,000 USDC \u8cb7 2 ETH \u5c0e\u81f4 ETH \u6f32\u50f9\uff0c\u5f71\u97ff\u5230 Alice \u7684\u4ea4\u6613\\n2. Alice \u7528 3,000 USDC \u53ea\u80fd\u8cb7\u5230 0.8 ETH\uff0c\u6b64\u6642 ETH \u518d\u5ea6\u6f32\u50f9\\n3. Bob \u518d\u6b21\u628a 2 ETH \u8ce3\u6389\uff0c\u7531\u65bc Alice \u628a\u50f9\u683c\u4e5f\u588a\u9ad8\u4e86\uff0c\u6240\u4ee5 Bob \u53ef\u4ee5\u628a 2 ETH \u8ce3\u5230 6,600 USDC\\n\\n![MEV](./mev/mev.png)\\n\\n\u9019\u6a23 Bob \u53ea\u8981\u53ef\u4ee5\u6392\u5e8f\u4ea4\u6613\uff0c\u7b2c\u4e00\u6b65\u82b1\u8cbb\u7684 6000 USDC \u5728\u7b2c\u4e09\u6b65\u5c31\u8cfa\u56de\u4f86\u4e86\uff0c\u9019\u6a23\u5c31\u53ef\u4ee5\u6191\u7a7a\u8cfa 600 USDC\uff0c\u9019\u6a23\u7684\u884c\u70ba\u6211\u5011\u7a31\u70ba\u4e09\u660e\u6cbb\u653b\u64ca (Sandwich Attack)\\n\\n\u4f46\u662f\u8981\u600e\u9ebc\u66f4\u52d5\u4ea4\u6613\u9806\u5e8f\u5462\uff1f\u9019\u5c31\u662f\u4e00\u4ef6\u7926\u5de5\uff08\u6216\u662f\u4efb\u4f55\u53ef\u4ee5\u6539\u8b8a\u4ea4\u6613\u7684\u4eba\uff09\u80fd\u505a\u5230\u7684\u4e8b\u60c5\u4e86\u3002\u7576\u7926\u5de5\u767c\u73fe\u4e00\u500b\u4ea4\u6613\u5728\u4ed6\u524d\u5f8c\u593e\u64ca\u5169\u500b\u984d\u5916\u7684\u4ea4\u6613\u5c31\u53ef\u4ee5\u5f9e\u4e2d\u7372\u5229\u6642\uff0c\u540c\u6642\u4ed6\u9084\u8981\u6709\u80fd\u529b\u8b93\u7576\u4e0b\u9019\u500b\u5340\u584a\u662f\u80fd\u5920\u7531\u4ed6\u53d6\u5f97\u8a18\u5e33\u6b0a\u7684\u3002\u6240\u4ee5\u5be6\u969b\u767c\u751f\u7684\u6d41\u7a0b\u6703\u662f\uff1a\\n\\n1. \u7926\u5de5\u767c\u73fe\u53ef\u63d0\u53d6\u50f9\u503c\u7684\u4ea4\u6613\\n2. \u81ea\u52d5\u7522\u751f\u593e\u64ca\u7684\u4ea4\u6613\u4e26\u4e14\u6392\u5165\u5340\u584a\u5167\\n3. \u53d6\u5f97\u8a72\u5340\u584a\u7684\u8a18\u5e33\u6b0a\u4e26\u4e14\u7372\u5229\\n\\n\u800c\u7b2c\u4e09\u6b65\u7576\u4f60\u6709\u66f4\u9ad8\u7684\u7b97\u529b\u6642\uff0c\u80fd\u5920\u57f7\u884c\u6210\u529f\u7684\u6a5f\u7387\u8d8a\u5927\u3002\u5982\u679c\u767c\u73fe\u9019\u500b\u6a5f\u6703\u7684\u90a3\u500b\u5340\u584a\u6c92\u6709\u53d6\u5f97\u8a18\u5e33\u6b0a\uff0c\u9019\u500b\u6a5f\u6703\u5c31\u6d88\u5931\u4e86\uff0c\u4ed6\u539f\u672c\u7528\u4f86\u593e\u64ca\u7684\u5169\u500b\u4ea4\u6613\u5728\u4e0b\u500b\u5340\u584a\u5c31\u4e0d\u6703\u518d\u51fa\u73fe\u3002\u6bd4\u5982\u8aaa\u4e00\u500b\u7926\u5de5\uff08\u6216\u662f\u7926\u6c60\u3001\u7926\u5834\uff09\u6709\u5168\u7db2 20% \u7684\u7b97\u529b\uff0c\u5982\u679c\u5728\u6bcf\u6b21\u4ed6\u767c\u73fe\u6709\u5229\u53ef\u5716\u7684\u4ea4\u6613\u6642\u90fd\u81ea\u52d5\u7684\u767c\u51fa\u593e\u64ca\u4ea4\u6613\u4f01\u5716\u7372\u5229\uff0c\u900f\u904e\u4ed6\u76f8\u5c0d\u9ad8\u7684\u7b97\u529b\u7d2f\u7a4d\u4e0b\u4f86\u53ef\u80fd\u5c31\u6703\u662f\u5f88\u5927\u4e00\u7b46\u6536\u76ca\uff0c\u5373\u6642\u4ed6\u7684\u7b97\u529b\u6c92\u8fa6\u6cd5\u8b93\u4ed6\u6bcf\u6b21\u90fd\u80fd\u5920\u53d6\u5f97\u8a18\u5e33\u6b0a\u3002\\n\\n\u9019\u6a23\u7684\u4e09\u660e\u6cbb\u653b\u64ca\u884c\u70ba\u88ab\u7a31\u70ba Miner Extractable Value (MEV) \u6216\u662f Maximal Extractable Value\uff0c\u800c MEV \u53ea\u8981\u662f\u900f\u904e\u8b8a\u66f4\u4ea4\u6613\u9806\u5e8f\u5c31\u53ef\u4ee5\u6b78\u985e\u5230\u6b64\u7a2e\u884c\u70ba\uff0c\u9664\u4e86\u4e09\u660e\u6cbb\u653b\u64ca\u4e4b\u5916\u9084\u6709\u66f4\u7c21\u55ae\u7684 MEV \u65b9\u5f0f\u5982 front running\u3002\\n\\n## Front running\\nfront running \u662f\u53ea\u8981\u5075\u6e2c\u5230\u7279\u5b9a\u55ae\u4e00\u7b46\u4ea4\u6613\u767c\u73fe\u53ef\u4ee5\u7372\u5229\u6642\uff0c\u5c31\u6703\u767c\u51fa\u4e00\u6a21\u4e00\u6a23\u7684\u4ea4\u6613\uff0c\u4f46\u66f4\u9ad8 gas \u7684\u4ea4\u6613\u4f86\u7372\u5229\uff0c\u800c\u57f7\u884c\u5f8c\u53ef\u80fd\u539f\u672c\u57f7\u884c\u4ea4\u6613\u7684\u4eba\u7684\u4ea4\u6613\u5c31\u6703\u5931\u6557\uff08\u6216\u662f\u6e1b\u5c11\u7372\u5229\uff09\u3002\\n\\nfront running \u7684\u884c\u70ba\u5982\u679c\u4e0d\u662f\u7926\u5de5\u4e5f\u53ef\u4ee5\u505a\u5230\uff0c\u53ea\u8981\u82b1\u8cbb\u5927\u91cf\u7684 gas \u5373\u53ef\u3002\u6211\u5011\u7528\u4e00\u500b\u6e05\u7b97\u7684\u4f8b\u5b50\u4f86\u770b\u770b front running \u7684 MEV \u6703\u600e\u9ebc\u9032\u884c\u3002\\n\\n1. Alice \u62b5\u62bc\u5728 Compound \u7684 100 ETH \u56e0\u70ba\u62b5\u62bc\u54c1\u4e0d\u8db3\u7684\u539f\u56e0\u8981\u88ab\u6e05\u7b97\u4e86\uff0cCompound \u4ee5\u5e02\u50f9 1 ETH = 3000 USDC \u7684 95% \u62cd\u8ce3 Alice \u7684 100 ETH\uff0c\u539f\u672c\u50f9\u503c 300,000 USDC \u6253\u6298\u5f8c\u53ea\u5269 285,000 USDC\u3002\\n2. Bob \u898b\u5230\u6b64\u6a5f\u6703\u7acb\u523b\u7528 285,000 USDC \u60f3\u8981\u8cb7\u4e0b 100 ETH\uff0c\u4e26\u4e14\u5c07 gas \u8a2d\u5b9a\u6210 50\uff0c\u5c07\u4ea4\u6613\u9001\u51fa\u3002\\n3. Chris \u4f5c\u70ba\u4e00\u500b\u76e3\u807d mempool \u7684\u4eba\uff0c\u5bdf\u89ba\u5230\u4e86\u4e00\u7b46\u6e05\u7b97\u4ea4\u6613\u767c\u5230\u4e86 mempool\uff0c\u5373\u6642\u8a08\u7b97\u5f8c\u5f97\u77e5\u6b64\u4ea4\u6613\u53ef\u7372\u5229 5%\uff0c\u6240\u4ee5\u767c\u51fa\u4e86\u4e00\u7b46\u8ddf Bob \u4e00\u6a21\u4e00\u6a23\u7684\u4ea4\u6613\uff0c\u7528 285,000 USDC \u4f86\u8cb7\u4e0b 100 ETH\uff0c\u4e26\u4e14\u628a gas \u52a0\u500d\u6210 100 \u4f86\u4f01\u5716\u84cb\u904e\u539f\u672c\u7684\u4ea4\u6613\uff0c\u4e26\u4e14\u767c\u51fa\u4e86\u4ea4\u6613\u3002\\n4. \u6b64\u6642\u6709\u5168\u7db2 20% \u7b97\u529b\u7684\u7926\u5de5 Dexter \u540c\u6a23\u4e5f\u767c\u73fe\u4e86\u6b64\u6a5f\u6703\uff0cmempool \u88e1\u9762\u6709\u5169\u7b46\u4ea4\u6613\u90fd\u60f3\u900f\u904e\u6e05\u7b97\u8cfa\u9322\uff0c\u6240\u4ee5\u4ed6\u4e5f\u767c\u4e86\u4e00\u6a21\u4e00\u6a23\u7684\u6e05\u7b97\u4ea4\u6613\uff0c\u4f46\u662f\u4ed6\u662f\u7926\u5de5\uff0c\u6240\u4ee5\u76f4\u63a5\u628a\u81ea\u5df1\u7684\u4ea4\u6613\u653e\u5230\u63a5\u4e0b\u4f86\u8981\u9001\u51fa\u7684\u5340\u584a\u5167\uff0c\u4e26\u4e14\u4e0d\u767c\u5230 mempool \u88e1\u9762\u76f4\u63a5\u81ea\u5df1\u7af6\u722d\u8a18\u5e33\u6b0a\u3002\\n5. \u6700\u7d42\u7684\u7d50\u679c Dexter \u900f\u904e\u81ea\u5df1 20% \u7684\u7b97\u529b\uff0c\u5728\u9019\u6b21\u7af6\u722d\u4e2d\u7372\u5f97\u4e86\u5229\u6f64\uff0c\u4ed6\u7b11\u4e86\u7b11\uff0c\u7926\u5de5\u7684\u5feb\u6a02\u5c31\u662f\u5982\u6b64\u6a38\u5be6\u7121\u83ef\u4e14\u67af\u71e5\u3002\\n\\n\u7531\u65bc\u5229\u76ca\u7684\u9a45\u52d5\u4e26\u4e14 mempool \u662f\u516c\u958b\u7684\u60c5\u6cc1\u4e0b\uff0c\u6703\u6709\u5f88\u591a\u4eba\u64b0\u5beb\u8a31\u591a\u975e\u5e38\u6709\u5f48\u6027\u7684\u8173\u672c\u4f86\u76e3\u63a7 mempool\uff0c\u7576\u4ed6\u767c\u73fe\u6392\u5e8f\u4ea4\u6613\u53ef\u4ee5\u5e36\u4f86\u5229\u76ca\u6642\uff0c\u5c31\u6703\u81ea\u52d5\u7684\u6392\u5e8f\u4ea4\u6613\u4f86\u7372\u5229\u3002\u9019\u6a23\u5c31\u6703\u8b8a\u6210\u6a5f\u5668\u4eba\u5927\u6230\uff0c\u7121\u6578\u7684\u6a5f\u5668\u4eba\u76e3\u63a7\u8457 mempool\uff0c\u767c\u73fe\u8cfa\u9322\u6a5f\u6703\u5c31\u6703\u81ea\u52d5\u7684\u6392\u5e8f\u4ea4\u6613\uff0c\u5982\u679c MEV \u767c\u8d77\u8005\u4e0d\u662f\u7926\u5de5\uff0c\u6240\u4ee5\u9700\u8981\u628a\u4ea4\u6613\u9001\u56de mempool \u6642\uff0c\u76e3\u63a7\u8457 mempool \u7684\u5176\u4ed6\u4eba\u770b\u5230\u4f60\u65b0\u767c\u51fa\u7684\u4ea4\u6613\u6642\uff0c\u540c\u6a23\u4e5f\u6703\u6beb\u4e0d\u7559\u60c5\u7684\u518d\u51fa\u767c\u65b0\u7684\u4ea4\u6613\u4f01\u5716\u7372\u5f97\u4f60\u7684\u6536\u76ca\u3002\\n\\n\u6240\u4ee5\u53ea\u8981\u4f60\u8e0f\u5165\u4e86 mempool \u5c31\u50cf\u8e0f\u5165\u4e86\u4e09\u9ad4\u7684\u9ed1\u6697\u68ee\u6797\u4e00\u6a23\uff0c\u7576\u4f60\u767c\u51fa\u610f\u5716\u6216\u662f\u4fe1\u865f\u6642\uff0c\u5f37\u5927\u7684\u63a0\u98df\u8005\u5c31\u6703\u64b2\u9762\u800c\u4f86\u3002\\n\\n## \u5be6\u969b\u767c\u751f\u7684 MEV \u6848\u4f8b\\n\\nFlashbots \u7684 [MEV Explore][6] \u63d0\u4f9b\u4e86\u4e00\u500b\u6392\u540d\u53ef\u4ee5\u5075\u6e2c\u51fa\u55ae\u4e00\u4ea4\u6613\u7684 MEV\uff0c\u6240\u4ee5\u53ef\u4ee5\u5f9e\u9019\u908a\u4f86\u770b\u5230\u4e00\u4e9b\u900f\u904e front running \u7684\u884c\u70ba\uff0c\u4e0d\u904e\u4e09\u660e\u6cbb\u653b\u64ca\u56e0\u70ba\u6d89\u53ca\u5230\u591a\u7b46\u4ea4\u6613\uff0c\u6240\u4ee5\u5728\u9019\u500b\u7db2\u7ad9\u4e0a\u5c31\u6c92\u8fa6\u6cd5\u5075\u6e2c\u5230\u3002\u76ee\u524d\u5728\u7db2\u7ad9\u4e0a\u6240\u8ffd\u8e64\u5230\u6700\u9ad8\u7684\u4e00\u6b21 MEV \u662f\u4ea4\u6613 [0xd70b...7d41][8] \u5f9e\u4e2d\u7372\u53d6\u4e86\u9ad8\u9054\u4e09\u767e\u842c\u7f8e\u91d1\u7684\u5229\u6f64\u3002\\n\\n\u9019\u500b\u4ea4\u6613\u7d50\u5408\u4e86\u9583\u96fb\u8cb8 (Flashloan) \u4f86\u9054\u6210\u9019\u6b21\u7684 MEV \u884c\u70ba\uff0c\u5f80\u5f8c\u6211\u5011\u53ef\u4ee5\u66f4\u6df1\u5165\u7684\u63a2\u8a0e\u9583\u96fb\u8cb8\u3002\\n\\nUniswap \u6216\u5176\u4ed6\u6709\u8003\u616e\u5230\u9019\u6a23\u884c\u70ba\u7684\u667a\u80fd\u5408\u7d04\u6703\u5be6\u4f5c\u4e00\u4e9b\u6a5f\u5236\u4f86\u9632\u7bc4\u9019\u7a2e\u884c\u70ba\uff0c\u4f46\u662f\u9019\u7a2e\u653b\u64ca\u5982\u679c\u662f\u81ea\u52d5\u767c\u52d5\u7684\u60c5\u6cc1\u4e0b\uff0c\u4efb\u4f55\u6c92\u6709\u8003\u616e MEV \u884c\u70ba\u7684\u667a\u80fd\u5408\u7d04\u90fd\u6709\u53ef\u80fd\u81ea\u52d5\u7684\u6210\u70ba\u63d0\u53d6\u50f9\u503c\u7684\u5c0d\u8c61\u3002\\n\\n## \u89e3\u6c7a\u65b9\u6848\\n\u6709\u4e9b\u65b9\u6cd5\u662f\u300c\u6253\u4e0d\u904e\u5c31\u52a0\u5165\u4ed6\u300d\uff0c[Eden Network][1] \u767c\u884c\u4e86\u4ee3\u5e63\uff0c\u7576\u4f60\u52a0\u5165\u4ed6\u5011\u7684\u7d93\u6fdf\u9ad4\u5236\u5f8c\uff0c\u4ed6\u6703\u5e6b\u4f60\u512a\u5148\u767c\u9001\u4ea4\u6613\uff0c\u540c\u6642\uff0c\u4f60\u4e5f\u6210\u70ba\u4e86\u63a0\u98df\u8005\u3002\\n\\n[CowSwap][3] \u8b93\u4f60\u7c3d\u7f72\u4e00\u500b [meta transaction][2]\uff0c\u4e26\u4e14\u5728\u93c8\u4e0b\u9032\u884c\u8a02\u55ae\u7684\u64ae\u5408\uff0c\u5982\u679c\u64ae\u5408\u6210\u529f\u5c31\u76f4\u63a5\u628a\u4ea4\u6613\u900f\u904e\u7121\u6cd5\u767c\u52d5 MEV \u7684\u65b9\u5f0f\u767c\u5e03\u4e0a\u93c8\uff0c\u5982\u679c\u6c92\u8fa6\u6cd5\u93c8\u4e0b\u64ae\u5408\u6210\u529f\uff0c\u5247\u6703\u900f\u904e\u93c8\u4e0a\u7684\u4ea4\u6613\u6240\u9032\u884c\u4ea4\u6613\uff0c\u4f46\u662f\u6703\u76f4\u63a5\u9001\u5230\u7531 CowSwap \u6240\u7ba1\u7406\u7684\u7bc0\u9ede\uff0c\u4e0d\u6703\u66b4\u9732\u5728\u516c\u958b\u7684 mempool \u4e0a\u9762\uff0c\u4f46\u662f\u64ae\u5408\u6a5f\u5236\u5c31\u8b8a\u6210\u4e0d\u662f\u5728\u93c8\u4e0a\u904b\u884c\uff0c\u6e1b\u4f4e\u4e86\u53bb\u4e2d\u5fc3\u5316\u7684\u7a0b\u5ea6\u3002\\n\\n\u800c [Flashbots][4] \u63d0\u4f9b\u4e86\u4fee\u6539\u904e\u5f8c\u7684 go-ethereum \u8b93\u4ea4\u6613\u76f4\u63a5\u9001\u7d66\u7926\u5de5\uff0c\u800c\u4e0d\u6703\u66b4\u9732\u5728 mempool\uff0c\u800c\u8af7\u523a\u7684\u662f\u76ee\u524d\u5f88\u5927\u4e00\u90e8\u5206\u7684 MEV \u653b\u64ca\u884c\u70ba\u90fd\u662f\u900f\u904e flashbots \u9054\u6210\u3002\\n\\n\u4f60\u6709\u77e5\u9053\u5176\u4ed6\u66f4\u597d\u7684\u89e3\u6c7a\u65b9\u6848\u55ce\uff1f\u6b61\u8fce\u5230 LunDAO \u7684 [GitHub Discussion][5] \u8a0e\u8ad6\uff01\\n\\n## \u6ce8\u91cb\\n- \u76ee\u524d Miner Extractable Value \u9010\u6f38\u7684\u63a1\u7528\u4e00\u500b\u65b0\u7684\u540d\u8a5e Maximal Extractable Value \u4f86\u53d6\u4ee3\u4f86\u66f4\u6e96\u78ba\u7684\u63cf\u8ff0\u9019\u6a23\u7684\u884c\u70ba\uff0c\u8a73\u60c5\u8acb\u898b [Why MEV as Maximal Extractable Value instead of Miner Extractable Value?][7] \\n\\n[1]: https://www.edennetwork.io/\\n[2]: https://yurenju.medium.com/perp-meta-tx-e53cfb65367\\n[3]: https://cowswap.exchange/\\n[4]: https://ethereum.org/en/developers/docs/mev/#mev-extraction-flashbots\\n[5]: https://github.com/lun-dao/LunDAO/discussions/76\\n[6]: https://explore.flashbots.net/leaderboard\\n[7]: https://explore.flashbots.net/faq\\n[8]: https://etherscan.io/tx/0xd70b42daec5bb9ac6e5df3d25d309f186db50df701f667e1f20b22448ea27d41"}]}')}}]);