import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { RouteComponentProps } from 'react-router-dom';

interface IList {
  filmId: number;
  name: string;
}

export default function Film(props: RouteComponentProps) {
  const [list, setlist] = useState([]);

  useEffect(() => {
    axios({
      url:
        'https://m.maizuo.com/gateway?cityId=440300&pageNum=1&pageSize=10&type=1&k=7249728',
      headers: {
        'X-Client-Info':
          '{"a":"3000","ch":"1002","v":"5.2.1","e":"16789325361560653676412929"}',
        'X-Host': 'mall.film-ticket.film.list',
      },
    }).then((res) => {
      setlist(res.data.data.films);
    });
  }, []);

  return (
    <div>
      {list.map((item: IList) => {
        return (
          <li
            key={item.filmId}
            onClick={() => {
              props.history.push(`/details/${item.filmId}`);
            }}
          >
            {item.name}
          </li>
        );
      })}
    </div>
  );
}
