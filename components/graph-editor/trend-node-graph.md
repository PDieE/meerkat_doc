# 趋势图 - TrendNodeGraph
基于 `AntV` [G](https://g-next.antv.vision/zh) 渲染引擎自主实现

## 使用示例
### 基本
```vue
<template>
  <trend-node-graph :default-value="trendNode" />
</template>
<script lang="ts" setup>
import { MarketTrendNode } from '@/api/model/marketModel';
import TrendNodeGraph from '@/components/graph-editor/trend-node-graph/index.vue';

const trendNode = ref<MarketTrendNode[]>([]);
</script>
```

## Props
### defaultValue
- 类型：`MarketTrendNode[]`  
默认值（不可控），必传

### readonly
- 类型：`boolean`
- 默认值：`false`  
是否只读，设为 `true` 后所有的数据编辑相关操作将被禁用

### display
- 类型：`'full' | 'simple' | 'single'`
- 默认值：`full`  
显示模式，`full`: 完全; `simple`: 简略; `single`: 单品类;

### heightLightPin
- 类型：`Category[]`
- 默认值：`[]`  
高亮图钉（品类）

### classId
- 类型：`number`  
品类ID，用于控制 `single` 显示模式下用于单独展示的图钉（品类），`display` 为 `single` 时必须存在

### cavasHeight
- 类型：`number`  
渲染区域的高度

## Events
### edit
- 参数：`(pin: MarketTrendPin, data: MarketTrendNode)`
点击图钉的编辑后触发

### change
- 参数：`(value: MarketTrendNode[])`
节点数据更新后回调，如新增节点，图钉拖动结束等

## Interface
### MarketTrendNode
详见 `@/api/model/marketModel` 文件
``` ts
export interface MarketTrendNode {
  gid?: string;
  id?: number;
  inventId?: string;
  list?: MarketTrendPin[];
  nodeTitle: string;
  trendId?: number;
}
```

### MarketTrendPin
详见 `@/api/model/marketModel` 文件
``` ts
export interface MarketTrendPin {
  classId: number;
  classTitle: string;
  id: number;
  inventId: string;
  nearPlace: number;
  nodeContent: string[];
  nodeGid: string;
  trendId: number;
  parentId: number;
}
```

### Category
详见 `@/api/model/systemModel` 文件
``` ts
export interface Category {
  id: number;
  clTitle: string;
  entryTime: string;
  pId: number;
  sFlag: boolean;
  list: Category[];
  orgId: string;
  cuserid: number;
  cUsername: string;
  cTime: string;
  delFlag: string;
  industryId: number;
  industryName: string;
  inTitle: string;
  disabled?: boolean;
}
```