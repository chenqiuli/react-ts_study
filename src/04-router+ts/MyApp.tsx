import React, { useState, useEffect } from 'react';
import IndexRoute from './route';
import store from './redux/store';

export default function MyApp() {
  const [show, setshow] = useState(store.getState().isShow);

  useEffect(() => {
    store.subscribe(() => {
      // console.log('store状态', store.getState());
      setshow(store.getState().isShow);
    });
  }, []);

  return (
    <div>
      <IndexRoute />
      {show ? '真' : '假'}
    </div>
  );
}
