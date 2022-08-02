import { useModel } from '@umijs/max';
import { Button, Drawer } from 'antd';
import { useState } from 'react';

export default function HomePage() {
  const [visible, setVisible] = useState(false);
  const masterProps = useModel('@@qiankunStateFromMaster');
  console.log('masterProps: ', masterProps);

  return (
    <div>
      <h2>HomePage</h2>
      <Button
        onClick={() => {
          setVisible(true);
        }}
      >
        打开 app2
      </Button>

      <Drawer
        title="嵌入 app2"
        visible={visible}
        onClose={() => {
          setVisible(false);
        }}
        width={800}
      ></Drawer>
    </div>
  );
}
