import React from 'react';
import { Table } from 'antd';

/* TODO
  1) abstract helper functions for use in endorsementsTable and microcredentialsTable
  2) Change "recommended" column to implement color scale
*/

// helper functions //////////////////////////////////////////////
const getCourseTermNames = (degrees) => {
  const courseTermNames = []
  degrees.forEach(degree => {
    degree.courses.forEach(course => {
      const courseTerm = course.term + " " + course.year;
      if(!courseTermNames.includes(courseTerm)){
        courseTermNames.push(courseTerm)
      }
    })
  })
  return courseTermNames
}

const generateTableColumns = (courseTermNames) => {
  const columns = courseTermNames.map(col => {
    return {
      title: col,
      dataIndex: col,
      key: col
    }
  })
  columns.unshift({
    title: 'Degree Name',
    dataIndex: 'name',
    key: 'name'
  },{
    title: 'Recommended',
    dataIndex: 'recommended',
    key: 'recommended'
  })
  return columns
}

const generateTableRows = (degrees) => {
  return degrees.map(degree => {
    const recommended = degree.rec_pos
    const row = {
      name: degree.name,
      dataIndex: degree.option_id,
      key: degree.option_id,
      recommended: recommended
    }
    // adds each course to row
    degree.courses.forEach(course => {
      const courseTerm = course.term + " " + course.year;
      // check if an entry for a courseTerm exists
      // if so, and append the newest course's name, course.name 
      if(row[courseTerm] !== undefined){
        row[courseTerm] += ("\n\n" + course.name + "\n")
      } else {
        row[courseTerm] = course.name
      }
    })
    return row;
  })
}

// end helper functions ///////////////////////////////////////////

// main component
const MastersDegreeTable = (props) => {
  const courseTermNames = getCourseTermNames(props.mastersDegrees);
  const tableColumns = generateTableColumns(courseTermNames);
  const tableRows = generateTableRows(props.mastersDegrees);
  // console.log('props',props)

    return (
    <div>
      <Table 
      dataSource={tableRows} 
      columns={tableColumns} 
      rowSelection={{
        type: "radio",
        onChange: (record) => {
          // todo: call onChangeHandler
          // console.log('record in masters table', record)
          props.setChoice(record[0]);
        }
      }}
      pagination={{ hideOnSinglePage: true}}
      scroll={{ x: 700 }}/>
    </div>
  )
}
  
  
export default MastersDegreeTable;