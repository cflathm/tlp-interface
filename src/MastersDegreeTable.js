import React, { Component } from 'react';
import { Table } from 'antd';

const dataSource = [
    {
      key: '1',
      name: 'STEAM',
      fall21: "Courses A+B",
      spring22: "Course C",
      summer22: "Course D",
      fall22: "Course E",
      spring23: "Course F"
    },
    {
      key: '2',
      name: 'Online Instruction',
      fall21: "Courses A+B",
      spring22: "Course C",
      summer22: "Course D",
      fall22: "Course E",
      spring23: "Course F"
    },
    {
      key: '3',
      name: 'Instructional Coaching',
      fall21: "Courses A+B",
      spring22: "Course C",
      summer22: "Course D",
      fall22: "Course E",
      spring23: "Course F"
    },
    {
      key: '4',
      name: 'Effective and Reflective Teaching',
      fall21: "Courses A+B",
      spring22: "Course C",
      summer22: "Course D",
      fall22: "Course E",
      spring23: "Course F"
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
    {
      title: 'Spring 2023',
      dataIndex: 'spring23',
      key: 'spring23',
    }
  ];

const MastersDegreeTable = () => {
  return (
    <div className="MastersDegreeTable" style={{padding: 40 + "px", paddingTop: 15 + "px"}}>
      <Table 
      dataSource={dataSource} 
      columns={columns} 
      rowSelection={{type: "radio"}}
      pagination={{ hideOnSinglePage: true}}/>
    </div>
  )
}
  
  
export default MastersDegreeTable;