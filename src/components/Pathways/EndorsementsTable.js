import React, { Component } from 'react';
import { Table } from 'antd';

const dataSource = [
    {
      key: '1',
      name: 'STEAM',
      recommended: '',
      fall21: "STEAM Instructional Design",
      spring22: "STEAM Transdisciplinary Teaching",
      summer22: "STEAM Assessment",
      fall22: "STEAM Enacted & Evaluated",
      spring23: "Course F"
    },
    {
      key: '2',
      name: 'Teacher Leader',
      recommended: '✔',
      fall21: "Courses A+B",
      spring22: "Course C",
      summer22: "Course D",
      fall22: "Course E",
    },
    {
      key: '3',
      name: 'Online Teaching',
      recommended: '',
      fall21: "Courses A+B",
      spring22: "Course C",
      summer22: "Course D",
      fall22: "Course E",
    },
  ];
  
  const columns = [
    {
      title: 'Degree Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Recommended',
      dataIndex: 'recommended',
      key: 'recommended',
    },
    {
      title: 'Spring 2022',
      dataIndex: 'spring22',
      key: 'spring22',
    },
    {
      title: 'Summer 2022',
      dataIndex: 'summer22',
      key: 'summer22',
    },
    {
      title: 'Fall 2022',
      dataIndex: 'fall22',
      key: 'fall22',
    },
    {
      title: 'Spring 2023',
      dataIndex: 'spring23',
      key: 'spring23',
    },
  ];

const EndorsementsTable = () => {
  return (
    <div>
      <Table 
      dataSource={dataSource} 
      columns={columns} 
      rowSelection={{type: "radio"}}
      pagination={{ hideOnSinglePage: true}}
      />
    </div>
  )
}
  
  
export default EndorsementsTable;