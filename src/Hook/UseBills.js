import axios from 'axios';
import React, { useEffect, useState } from 'react';

const UseBills = () => {

  const [bills, setBill]= useState([])
   const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios('http://localhost:3000/bills')
    .then(data => setBill(data.data))
     setLoading(false);
  }, [])
  return {bills, loading}
};

export default UseBills;