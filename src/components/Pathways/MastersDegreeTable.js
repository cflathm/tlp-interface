import React, { Component } from 'react';
import { Table } from 'antd';

/* TODO
  1) modify MastersDegreesTable so that multiple courses can be displayed in one courseTerm column
  2) Change "recommended" column to implement color scale
*/

const MastersDegreeTable = (props) => {
  // populate courseTermNames and 
  let courseTermNames = []

  props.mastersDegrees.forEach(degree => {
    degree.courses.forEach(course => {
      let courseTerm = course.term + " " + course.year;
      if(!courseTermNames.includes(courseTerm)){
        courseTermNames.push(courseTerm)
      }
    })
  })
  
  let columns = courseTermNames.map(col => {
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

  const dataSource = 
    props.mastersDegrees.map(degree => {
      let recommended = degree.rec_pos
      let row = {
        name: degree.name,
        dataIndex: degree.option_id,
        key: degree.option_id,
        recommended: recommended
      }


      // adds each course to row
      degree.courses.forEach(course => {
        let courseTerm = course.term + " " + course.year;
        // broken code meant to check if an entry for a courseTerm exists. If so, it appends course.name 
        // or it would, if it weren't broken
        // if(row[courseTerm] != ''){
        //   console.log(row[courseTerm])
        // } else {
        //   row[courseTerm] = course.name
        // }
        row[courseTerm] = course.name
      })
      // console.log("row",row)
      return row;
    })

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