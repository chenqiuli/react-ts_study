# react-ts

### [react](https://reactjs.org/)

<hr />

#### 1. 创建 react-ts 项目

```bash
# 更新create-react-app
npm i -g create-react-app
# 下载支持typescript的版本
create-react-app myappts --template typescript
```

#### 2. 组件文件后缀名为 tsx，才能当成一个组件执行

#### 3. 类组件约束 state 和 props

```tsx
interface ChildProps {
  id: number;
}

interface ChildState {
  name: string;
}

class Child extends React.Component<ChildProps, ChildState> {
  state = {
    name: 'Child',
  };
  render() {
    return <div>{this.props.id}</div>;
  }
}
```

#### 4. 函数组件约束 state 和 props

```tsx
import React, { useState, FunctionComponent } from 'react';

interface SiderbarProps {}

// 第一种写法
const Siderbar: FunctionComponent<SiderbarProps> = () => {
  const [isShow, setisShow] = useState<boolean>(false); // 约束state
  return <div>Siderbar</div>;
};

// 第二种写法
const Siderbar = (props: SiderbarProps) => {
  const [isShow, setisShow] = useState<boolean>(false); // 约束state
  return <div>Siderbar</div>;
};
```

#### 5. 路由的 ts 类型

```bash
# 下载react-router-dom的声明文件，typing.d.ts
npm i @types/react-router-dom -D
npm i react-router-dom@5 -S
```

```tsx
// 引入这个，可以使用history等属性，
import { RouteComponentProps } from 'react-router-dom';
interface IParams {
  id: string;
}
export default function Details(props: RouteComponentProps<IParams>) {}
```

#### 6. redux 约束 state 和 action

```tsx
import { createStore } from 'redux';

interface IAction {
  type: string;
  payload?: any;
}

interface IState {
  isShow: boolean;
}

const reducer = (
  prevState: IState = {
    isShow: true,
  },
  action: IAction
): IState => {
  const { type } = action;
  const newState = { ...prevState };

  switch (type) {
    case 'show':
      newState.isShow = true;
      return newState;
    case 'hide':
      newState.isShow = false;
      return newState;
    default:
      return prevState;
  }
};

const store = createStore(reducer);
export default store;
```
