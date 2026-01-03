import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from './../Provider/AuthProvider';
import { serverApi } from './../Hook/useServerAPI';

const DashboarPaybill = () => {
  const { user } = useContext(AuthContext);
  const [isdata, setisData] = useState([]);
  const userEmail = user.email;
  useEffect(() => {
    fetch(`${serverApi}/paybillpersonal?email=${userEmail}`)
      .then((res) => res.json())
      .then((data) => {
        setisData(data);
      });
  }, []);
  return (
    <div>
      <h4 className="text-3xl font-semibold underline"> pay bill ({isdata.length})</h4>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
           
              <th>Name</th>
              <th>Email</th>
              <th>Address</th>
              <th>Number</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {isdata.map((data, i) => (
              <tr key={i}>
               
                <td>{data.name}</td>
                <td>{data.created_by}</td>
                <td>{data.address}</td>
                <td>{data.phone}</td>
                <td>{data.amount}</td>
              </tr>
            ))}
            {/* row 1 */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DashboarPaybill;
