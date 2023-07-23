import React, { FunctionComponent } from 'react';

export default function App() {
  return (
    <div>
      <Child name="child" />
    </div>
  );
}

interface ChildProps {
  name: string;
}

// 第一种约束props写法
// const Child: React.FC<ChildProps> = (props) => {
//   return <div>{props.name}</div>;
// };

// 第二种约束props写法
// const Child = (props: ChildProps) => {
//   return <div>{props.name}</div>;
// };

// 第三种写法
const Child: FunctionComponent<ChildProps> = (props) => {
  return <div>{props.name}</div>;
};
