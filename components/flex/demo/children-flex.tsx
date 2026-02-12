import React, { useState } from 'react';
import { Flex, Radio, Input, Switch, Typography } from 'antd';

const containerStyle: React.CSSProperties = {
  width: '100%',
  padding: 16,
  border: '1px solid #d9d9d9',
  borderRadius: 8,
};

const itemStyle: React.CSSProperties = {
  padding: '16px',
  background: '#1677ff',
  color: '#fff',
  borderRadius: 6,
  // "minWidth: 0" is a flexbox best practice to allow shrinking below content size
  minWidth: 0,
};

const App: React.FC = () => {
  const [valueType, setValueType] = useState<string>('1');
  const [customValue, setCustomValue] = useState<string>('1 1 200px');
  const [wrap, setWrap] = useState<boolean>(false);

  const childrenFlex = valueType === 'custom' ? customValue : valueType === '1' ? 1 : valueType;

  return (
    <Flex gap="middle" vertical>
      <Flex gap="small" vertical>
        <Typography.Text>Select children flex value:</Typography.Text>
        <Radio.Group
          value={valueType}
          onChange={(e) => setValueType(e.target.value)}
          buttonStyle="solid"
        >
          <Radio.Button value="1">1 (Evenly)</Radio.Button>
          <Radio.Button value="auto">auto (Content)</Radio.Button>
          <Radio.Button value="none">none (Rigid)</Radio.Button>
          <Radio.Button value="0 0 50%">50% (Grid-like)</Radio.Button>
          <Radio.Button value="custom">Custom</Radio.Button>
        </Radio.Group>

        {valueType === 'custom' && (
          <Input
            addonBefore="flex:"
            style={{ maxWidth: 300 }}
            value={customValue}
            onChange={(e) => setCustomValue(e.target.value)}
            placeholder="e.g. 3 3 10%"
          />
        )}

        <Flex gap="small" align="center" style={{ marginTop: 8 }}>
          <Typography.Text>Container Wrap:</Typography.Text>
          <Switch
            checked={wrap}
            onChange={setWrap}
            checkedChildren="Wrap"
            unCheckedChildren="No-Wrap"
          />
        </Flex>
      </Flex>

      <Flex childrenFlex={childrenFlex} wrap={wrap} gap="middle" style={containerStyle}>
        <div style={itemStyle}>Short</div>
        <div style={itemStyle}>Medium Length Text</div>
        <div style={itemStyle}>Significantly Longer Content Block to Test Shrinking</div>
      </Flex>
    </Flex>
  );
};

export default App;
