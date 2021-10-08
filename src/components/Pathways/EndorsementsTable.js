import React from 'react';
import { Table } from 'antd';
import { getCourseTermNames, generateMastersTableColumns, generateMastersTableRows } from '../../utils/tableUtils';


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

const generateEndorsementColumns = (endorsements) => {
  const endorsementColumnIndexes = ["1","2","3","4"]
  const columns = endorsementColumnIndexes.map(col => {
    let columnTitle = 'Course ' + col;
    return {
      title: 'Course ' + col,
      dataIndex: col,
      key: col
    }
  })
  columns.unshift({
    title: 'Endorsement Name',
    dataIndex: 'name',
    key: 'name'
  },{
    title: 'Recommended',
    dataIndex: 'recommended',
    key: 'recommended'
  })
  return columns
}

const generateEndorsementTableRows = (endorsements) => {
  // this map returns an array of all rows, formatted to match key-value pairs in "dataSource"
  // for each endorsement in endorsements, return json object
  return endorsements.map(endorsement => {
      const recommended = endorsement.rec_pos
      const row = {
          name: endorsement.name,
          dataIndex: endorsement.unique_id,
          key: endorsement.unique_id,
          recommended: recommended,
        }
      // dynamically adds the course term as a key-value pair for this row
      endorsement.courses.forEach(course => {
          row[course.index] = course.name
      })
      return row;
  })
}

const EndorsementsTable = (props) => {
  // props && console.log('ndorsmentprops.endorsements',props.endorsements)
  const tableColumns = generateEndorsementColumns(props.endorsements)
  const tableRows = generateEndorsementTableRows(props.endorsements);
  return (
    <div>
      <Table 
      dataSource={tableRows} 
      columns={tableColumns} 
      scroll={{ x: 700 }}
      rowSelection={{
        type: "radio",
        onChange: (record) => {
          console.log('recordinEndorsementsonChange',record)
          props.setSelection(record[0]);
        }
    }}
      pagination={{ hideOnSinglePage: true}}
      />
    </div>
  )
}
  
  
export default EndorsementsTable;