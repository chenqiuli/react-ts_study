import React, { useState, FunctionComponent } from 'react';

export default function App() {
  const [isShow, setisShow] = useState<boolean>(false);
  return (
    <div>
      <Navbar
        toggleShow={() => {
          setisShow(!isShow);
        }}
      />
      {isShow && <Siderbar />}
    </div>
  );
}

interface NavbarProps {
  toggleShow: () => void;
}

const Navbar: FunctionComponent<NavbarProps> = (props) => {
  return (
    <div>
      Navbar
      <button onClick={() => props.toggleShow()}>click</button>
    </div>
  );
};

interface SiderbarProps {}

const Siderbar: FunctionComponent<SiderbarProps> = () => {
  return <div>Siderbar</div>;
};
