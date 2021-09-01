import React, { Component } from 'react';
import { Table } from 'antd';

const dataSource = [
    {
      key: '1',
      name: 'STEAM',
      fall21: "STEAM Instructional Design",
      spring22: "STEAM Transdisciplinary Teaching",
      summer22: "STEAM Assessment",
      fall22: "STEAM Enacted & Evaluated",
      spring23: "Course F"
    },
    {
      key: '2',
      name: 'Teacher Leader',
      fall21: "Courses A+B",
      spring22: "Course C",
      summer22: "Course D",
      fall22: "Course E",
    },
    {
      key: '3',
      name: 'Online Teaching',
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
      title: 'Fall 2021',
      dataIndex: 'fall21',
      key: 'fall21',
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
  ];

const EndorsementsTable = () => {
  return (
    <div className="EndorsementsTable" style={{padding: 40 + "px", paddingTop: 15 + "px"}}>
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