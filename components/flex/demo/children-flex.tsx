import React, { useState } from 'react';
import { Flex, Radio } from 'antd';
import type { FlexProps } from 'antd';

const App: React.FC = () => {
  const [childrenFlex, setChildrenFlex] = useState<FlexProps['childrenFlex']>(1);

  // Toggle between common flex behaviors to demonstrate the API
  return (
    <Flex gap="middle" vertical>
      <Radio.Group value={childrenFlex} onChange={(e) => setChildrenFlex(e.target.value)}>
        <Radio.Button value={1}>1</Radio.Button>
        <Radio.Button value="auto">auto</Radio.Button>
        <Radio.Button value="none">none</Radio.Button>
        <Radio.Button value="1 1 200px">1 1 200px</Radio.Button>
      </Radio.Group>

      <Flex childrenFlex={childrenFlex} gap="middle" style={{ width: '100%', background: '#f5f5f5', padding: 16 }}>
        <div
          style={{
            background: '#1677ff',
            height: 50,
            color: '#fff',
            padding: '0 16px',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          Item 1
        </div>
        <div
          style={{
            background: '#1677ff',
            height: 50,
            color: '#fff',
            padding: '0 16px',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          Item 2
        </div>
        <div
          style={{
            background: '#1677ff',
            height: 50,
            color: '#fff',
            padding: '0 16px',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          Item 3
        </div>
      </Flex>
    </Flex>
  );
};

export default App;
