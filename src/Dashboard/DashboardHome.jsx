import React, { useContext, useEffect, useState } from 'react';
import { serverApi } from '../Hook/useServerAPI';
import { AuthContext } from '../Provider/AuthProvider';
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const DashboardHome = () => {
  const { user } = useContext(AuthContext);
  const [isdata, setisData] = useState([]);
  const [isdataAll, setisDataAll] = useState([]);
  const userEmail = user.email;
  useEffect(() => {
    fetch(`${serverApi}/paybillpersonal?email=${userEmail}`)
      .then((res) => res.json())
      .then((data) => {
        setisData(data);
      });
  }, [userEmail]);
  useEffect(() => {
    fetch(`${serverApi}/bills`)
      .then((res) => res.json())
      .then((data) => {
        setisDataAll(data);
      });
  }, []);

  const total = isdataAll.length;
  const paid = isdata.length;
  const unpaid = isdataAll.length - isdata.length;
  const paidAmount = isdata.reduce((sum, bill) => sum + bill.amount, 0);

  const ChartData = [
    { name: 'total bill length', bill: total },
    { name: 'paid bill length', bill: paid },
    { name: 'paid Amount ', bill: paidAmount },
    { name: 'unpaid bill length', bill: unpaid },
  ];




  return (
    <div className="mx-2 md:mx-3">
      <div className="grid grid-cols-1 md:grid-cols-2  gap-6">
        {/* Total Bills */}
        <div className="bg-blue-100 text-blue-800 shadow-lg p-10 rounded-md grid place-content-center text-center  ">
          <h2 className="text-3xl font-bold">Total Bills</h2>
          <h2 className="text-3xl font-bold">{total || 0}</h2>
        </div>

        {/* Unpaid Bills */}
        <div className="bg-red-100 text-red-800 shadow-lg p-10 rounded-md grid place-content-center text-center">
          <h2 className="text-3xl font-bold">Unpaid Bills</h2>
          <h2 className="text-3xl font-bold">{unpaid || 0}</h2>
        </div>

        {/* Paid Bills */}
        <div className="bg-green-100 text-green-800 shadow-lg p-10 rounded-md grid place-content-center text-center ">
          <h2 className="text-3xl font-bold">Paid Bills</h2>
          <h2 className="text-3xl font-bold">{paid || 0}</h2>
        </div>

        {/* Paid Amount */}
        <div className="bg-yellow-100 text-yellow-800 shadow-lg p-10 rounded-md grid place-content-center text-center  ">
          <h2 className="text-3xl font-bold">Amount</h2>
          <h2 className="text-3xl font-bold">{paidAmount || 0} Tk</h2>
        </div>
      </div>


       <div className="mt-30 w-full h-[300px]">
  <ResponsiveContainer width="100%" height="100%">
    <LineChart data={ChartData}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="bill"
        stroke="#8884d8"
        strokeWidth={3}
      />
    </LineChart>
  </ResponsiveContainer>
</div> 


    </div>
  );
};

export default DashboardHome;
