/* eslint-disable react/no-array-index-key */
import React from 'react';
import { Flex, Radio, Slider } from 'antd';

const baseStyle: React.CSSProperties = {
  height: 54,
  lineHeight: '54px',
  color: '#fff',
  textAlign: 'center',
  borderRadius: 6,
};

const App: React.FC = () => {
  const [value, setValue] = React.useState<string | number>('none');
  const [customFlex, setCustomFlex] = React.useState<number>(0);

  return (
    <Flex gap="middle" vertical>
      <Radio.Group value={value} onChange={(e) => setValue(e.target.value)}>
        <Radio value="none">none</Radio>
        <Radio value="1">flex: 1</Radio>
        <Radio value="auto">flex: auto</Radio>
        <Radio value="custom">custom size</Radio>
      </Radio.Group>

      {value === 'custom' && (
        <Slider value={customFlex} onChange={setCustomFlex} />
      )}

      <Flex childrenFlex={value === 'custom' ? customFlex : value === 'none' ? undefined : value}>
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} style={{ ...baseStyle, width: '25%', backgroundColor: i % 2 ? '#1677ff' : '#1677ffbf' }}>
            {i + 1}
          </div>
        ))}
      </Flex>
    </Flex>
  );
};

export default App;
