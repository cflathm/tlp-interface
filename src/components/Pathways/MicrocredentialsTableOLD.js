import React from 'react';
import { Table, Checkbox } from 'antd';

const dataSource = [
    {
      key: '1',
      name: 'Integrating Science & Engineering Practices',
      summer21_2: "Understanding & Integrating Science & Engineering Practices",
      Fall21_1: "Integrating Project-Based Learning with Science & Engineering Practices",
      Fall21_2: "Assessment of Science & Engineering Practices",
    },
    {
      key: '2',
      name: 'Integrating Science & Engineering Practices',
      summer21_2: "Understanding & Integrating Science & Engineering Practices",
      Fall21_1: "Integrating Project-Based Learning with Science & Engineering Practices",
      Fall21_2: "Assessment of Science & Engineering Practices",
    },
    {
      key: '3',
      name: 'Integrating Science & Engineering Practices',
      summer21_2: "Understanding & Integrating Science & Engineering Practices",
      Fall21_1: "Integrating Project-Based Learning with Science & Engineering Practices",
      Fall21_2: "Assessment of Science & Engineering Practices",
    },
    {
      key: '4',
      name: 'Integrating Science & Engineering Practices',
      summer21_2: "Understanding & Integrating Science & Engineering Practices",
      Fall21_1: "Integrating Project-Based Learning with Science & Engineering Practices",
      Fall21_2: "Assessment of Science & Engineering Practices",
    },
    {
      key: '5',
      name: 'Integrating Science & Engineering Practices',
      summer21_2: "Understanding & Integrating Science & Engineering Practices",
      Fall21_1: "Integrating Project-Based Learning with Science & Engineering Practices",
      Fall21_2: "Assessment of Science & Engineering Practices",
    },
    {
      key: '6',
      name: 'Integrating Science & Engineering Practices',
      summer21_2: "Understanding & Integrating Science & Engineering Practices",
      Fall21_1: "Integrating Project-Based Learning with Science & Engineering Practices",
      Fall21_2: "Assessment of Science & Engineering Practices",
    },
    {
      key: '7',
      name: 'Integrating Science & Engineering Practices',
      summer21_2: "Understanding & Integrating Science & Engineering Practices",
      Fall21_1: "Integrating Project-Based Learning with Science & Engineering Practices",
      Fall21_2: "Assessment of Science & Engineering Practices",
    },
  ];

  
  const columns = [
    {
      title: 'Credential Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Summer 2, 2021',
      dataIndex: 'summer21_2',
      key: 'summer21_2',
    },
    {
      title: 'Fall 1, 2021',
      dataIndex: 'Fall21_1',
      key: 'Fall21_1',
    },
    {
      title: 'Fall 2, 2021',
      dataIndex: 'Fall21_2',
      key: 'Fall21_2',
    },
  ];

const MicrocredentialsTable = () => {
  return (
    <div className="last-table">
      <Table 
      dataSource={dataSource} 
      columns={columns} 
      rowSelection={{type: "checkbox"}}
      pagination={{ hideOnSinglePage: true}}
      />
    </div>
  )
}
  
  
export default MicrocredentialsTable;