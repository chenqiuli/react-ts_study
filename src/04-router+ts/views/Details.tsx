import React, { useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import store from '../redux/store';

interface IParams {
  id: string;
}

export default function Details(props: RouteComponentProps<IParams>) {
  const [detailid, setdetailid] = useState('');

  useEffect(() => {
    console.log(props);
    // const id = (props.match.params as any).id;
    const id = props.match.params.id;
    setdetailid(id);
  }, []);

  useEffect(() => {
    store.dispatch({
      type: 'hide',
    });

    return () => {
      store.dispatch({
        type: 'show',
      });
    };
  }, []);

  return <div>Details-{detailid}</div>;
}
