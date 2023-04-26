# 行业发展史 - IndustryNodeGraph
`需要重写！！！！`

## 使用示例
### 基本
```vue
<template>
  <industry-node-graph v-model="data" />
</template>
<script lang="ts" setup>
import { IndustryHistoryNodeData } from '@/components/graph-editor/industry-node-graph/types';
import IndustryNodeGraph from '@/components/graph-editor/industry-node-graph/index.vue';

const data = ref<IndustryHistoryNodeData[]>([]);
</script>
```

## Props

### modelValue
- 类型：`IndustryHistoryNodeData[]`  
`v-model` 绑定值，必传

### readonly
- 类型：`boolean`
- 默认值：`false`  
是否只读，设为 `true` 后所有的数据编辑相关操作将被禁用

### selectClassIds
- 类型：`number[]`  
已选品类ID

## Interface
### IndustryHistoryNodeData
详见 `@/components/graph-editor/industry-node-graph/types` 文件
``` ts
export interface IndustryHistoryNodeData {
  nodeDes: string;
  fileUrl: string;
  fileName: string;
  nodeTime: string;
  classId: number;
  className: string;
  base64Url?: string;
}
```
