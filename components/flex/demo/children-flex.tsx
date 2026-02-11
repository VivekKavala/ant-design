import React, { useState } from 'react';
import { Flex, Radio } from 'antd';
import type { FlexProps } from 'antd';

const containerStyle: React.CSSProperties = {
  width: '100%',
  padding: 16,
  background: 'rgba(0, 0, 0, 0.05)',
  borderRadius: 8,
};

const itemStyle: React.CSSProperties = {
  padding: '16px',
  background: '#1677ff',
  color: '#fff',
  borderRadius: 6,
  // Ensure text doesn't break the layout when containers shrink
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
};

const App: React.FC = () => {
  const [childrenFlex, setChildrenFlex] = useState<FlexProps['childrenFlex']>(1);

  // The varied text lengths below are intentional to demonstrate
  // how different flex values distribute available space.
  return (
    <Flex gap="middle" vertical>
      <Radio.Group value={childrenFlex} onChange={(e) => setChildrenFlex(e.target.value)}>
        <Radio.Button value={1}>1 (Evenly)</Radio.Button>
        <Radio.Button value="auto">auto (Content)</Radio.Button>
        <Radio.Button value="none">none (Rigid)</Radio.Button>
        <Radio.Button value="1 1 150px">1 1 150px</Radio.Button>
        <Radio.Button value="0 1 50%">0 1 50%</Radio.Button>
      </Radio.Group>

      <Flex childrenFlex={childrenFlex} gap="middle" style={containerStyle}>
        <div style={itemStyle}>Short</div>
        <div style={itemStyle}>Medium Length</div>
        <div style={itemStyle}>Significantly Longer Content Block</div>
      </Flex>
    </Flex>
  );
};

export default App;
