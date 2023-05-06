# 数据分析 - Analysis
数据分析列表元素

## 使用示例
### 基本
```vue
<template>
  <analysis :info="data" />
</template>
<script lang="ts" setup>
import { CompetitorAndProductAnalysis } from '@/api/model/commonModel';
import { MarketDataAnalysis } from '@/api/model/marketModel';
import Analysis from '@/components/list-item/Analysis.vue';

const data = ref<CompetitorAndProductAnalysis | MarketDataAnalysis>();
</script>
```

## Props

### info
- 类型：`CompetitorAndProductAnalysis | MarketDataAnalysis`  
数据

### type
- 类型：`'competitorAndProduct' | 'market'`
- 默认值：`competitorAndProduct`  
类型，`competitorAndProduct`: 竞品和产品对比分析; `market`: 市场数据分析

### border
- 类型：`boolean`
- 默认值：`false`  
是否显示边框，默认不显示
