import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class Customer extends React.Component {
  render() {
    const customers = [
      { id: 1, name: 'John Doe', email: 'john@example.com', country: 'chennai' },
      { id: 2, name: 'Jane Smith', email: 'jane@example.com', country: 'Nellai' },
      { id: 3, name: 'Alice Johnson', email: 'alice@example.com', country: 'MPM' },
      { id: 4, name: 'Bob Williams', email: 'bob@example.com', country: 'Thoothukudi' },
      { id: 5, name: 'Eva Davis', email: 'eva@example.com', country: 'Salem' },
      { id: 6, name: 'Charlie Brown', email: 'charlie@example.com', country: 'KPM' },
      { id: 7, name: 'Grace Lee', email: 'grace@example.com', country: 'Madurai' },
    ];

    return (
        <>
        <div >
          <h2>Customer Table</h2>
          <div className="table-responsive">
            <table className="table table-bordered table-hover"  style={{ border: '2px solid #1b203d',color:'black', padding: '8px' }}>
              <thead className="thead-dark">
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Country</th>
                </tr>
              </thead>
              <tbody>
                {customers.map((customer) => (
                  <tr key={customer.id}>
                    <td>{customer.id}</td>
                    <td>{customer.name}</td>
                    <td>{customer.email}</td>
                    <td>{customer.country}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </>
    );
  }
}

export default Customer;
