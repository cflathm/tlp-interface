import React, { Component } from 'react';
import { Table } from 'antd';
import { OmitProps } from 'antd/lib/transfer/ListBody';

const dataSource = [
    {
      key: '1',
      name: 'STEAM',
      recommended: '✔',
      fall21: "Courses A+B",
      spring22: "Course C",
      summer22: "Course D",
      fall22: "Course E",
      spring23: "Course F"
    },
    {
      key: '2',
      name: 'Online Instruction',
      recommended: '',
      fall21: "Courses A+B",
      spring22: "Course C",
      summer22: "Course D",
      fall22: "Course E",
      spring23: "Course F"
    },
    {
      key: '3',
      name: 'Instructional Coaching',
      recommended: '',
      fall21: "Courses A+B",
      spring22: "Course C",
      summer22: "Course D",
      fall22: "Course E",
      spring23: "Course F"
    },
    {
      key: '4',
      name: 'Effective and Reflective Teaching',
      recommended: '',
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
      title: 'Recommended',
      dataIndex: 'recommended',
      key: 'recommended',
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

const MastersDegreeTable = (props) => {
  return (
    <div>
      <Table 
      dataSource={dataSource} 
      columns={columns} 
      rowSelection={{type: "radio"}}
      pagination={{ hideOnSinglePage: true}}/>
    </div>
  )
}
  
  
export default MastersDegreeTable;