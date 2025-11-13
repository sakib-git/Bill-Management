import axios from 'axios';
import { useEffect, useState } from 'react';
import { serverApi } from './useServerAPI';

const UseBills = () => {
  const [bills, setBill] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios(`${serverApi}/bills`).then((res) => {
      setBill(res.data);
      setLoading(false);
    });
  }, []);
  return { bills, loading };
};

export default UseBills;