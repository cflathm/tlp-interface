import React, { Component } from 'react';
import { Table } from 'antd';

const dataSource = [
    {
      key: '1',
      name: 'Masters Degree in Education: Online Instruction',
      semesters: "5",
      workload: "5-8"
    },
    {
      key: '2',
      name: 'STEAM Leadership Micro-Credentials',
      semesters: "2",
      workload: "3-5"
    },
  ];
  
  const columns = [
    {
      title: 'Commitments',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Semesters',
      dataIndex: 'semesters',
      key: 'semesters',
    },
    {
      title: 'Workload/Week',
      dataIndex: 'workload',
      key: 'workload',
    }
  ];

const ConfirmTable = () => {
  return (
    <div className="last-table">
      <Table 
      dataSource={dataSource} 
      columns={columns} 
      rowSelection={{type: "radio"}}
      pagination={{ hideOnSinglePage: true}}/>
    </div>
  )
}
  
  
export default ConfirmTable;