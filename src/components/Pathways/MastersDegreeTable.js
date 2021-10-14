import React, {useEffect} from 'react';
import { Table } from 'antd';

/* TODO
  - Change "recommended" column to implement color scale
*/

// param pathways: an array of pathways
const getCourseTermNames = (pathways) => {
  const courseTermNames = []
  pathways.forEach(pathway => {
    pathway.courses.forEach(course => {
      const courseTerm = course.term + " " + course.year;
      if(!courseTermNames.includes(courseTerm)){
        courseTermNames.push(courseTerm)
      }
    })
  })
  return courseTermNames
}

const generateMastersTableRows = (pathways) => {
  // this map returns an array of all rows, formatted to match key-value pairs in "dataSource"
  // for each pathway in pathways, return json object
  // console.log('pathways',pathways)
  return pathways.map(pathway => {
      // const recommended = pathway.rec_pos
      const row = {
          dataIndex: pathway.unique_id,
          key: pathway.unique_id,
          recommended: pathway.rec_pos,
      }
      let recommendedText = '';
      if(pathway.rec_pos === 3){
        recommendedText = '\n(#3 Recommendation)'
      } 
      if(pathway.rec_pos === 2){
        recommendedText = '\n(#2 Recommendation)'
      } 
      if(pathway.rec_pos === 1){
        recommendedText = '\n(#1 Recommendation)'
      }
      row["name"] = pathway.name + recommendedText


      // dynamically adds the course term as a key-value pair for this row
      pathway.courses.forEach(course => {
        // console.log('course',course)
          if(course.term === undefined){
            // console.log('UNDEFINED')
            course.term = 'No date'
            course.year = ''
          } 
          const courseTerm = course.term + " " + course.year;
          // check if an entry for a courseTerm exists
          // if so, and append the newest course's name, course.name 
          if(row[courseTerm] !== undefined){
              row[courseTerm] += ("\n\n" + course.name + "\n")
          } 
          // else if(row[courseTerm] === 'undefined undefined'){
          //   row[courseTerm] = 'No date'
          // } 
          else {
              row[courseTerm] = course.name
          }
      })
      return row;
  })
}

const generateMastersTableColumns = (courseTermNames) => {
  const columns = courseTermNames.map(col => {
    let columnTitle = '';
    if(col === 'undefined undefined'){
      columnTitle = 'No date'
    } else {
      columnTitle = col;
    }
    return {
      title: columnTitle,
      dataIndex: columnTitle,
      key: columnTitle,
    }
  })
  columns.unshift({
    title: 'Pathway Name',
    dataIndex: 'name',
    key: 'name',
    // width: '240px'
  });
  return columns
}



const MastersDegreeTable = (props) => {
  const courseTermNames = getCourseTermNames(props.mastersDegrees);
  const tableColumns = generateMastersTableColumns(courseTermNames);
  const tableRows = generateMastersTableRows(props.mastersDegrees);

  // useEffect((evt) => {
  //   if(props.selectedMastersDegree === undefined || props.selectedMastersDegree.length === 0){
  //     console.log('GOOD')
  //   } else {
  //     console.log('throw error/alert')
  //   }
  // },[props.selectedMastersDegree])
  // console.log('masters tableColumns',tableColumns)
  // console.log('masters tableRows',tableRows)
  // console.log('props.selectedMastersDegree',props.selectedMastersDegree)
  const selection = props.selectedMastersDegree;

    return (
    <div>
      <Table 
      scroll={{ x: 900 }}
      dataSource={tableRows} 
      columns={tableColumns}
      rowClassName={(record, index) => ("recommended_"+record.recommended)}
      rowSelection={{
        // selectedRowKeys: selection,
        type: "radio",
        onChange: (record) => {
          // props.setSelectedMastersDegree('');
          props.setSelectedMastersDegree(record[0]);
          // console.log('props.selectedMastersDegree',props.selectedMastersDegree)
          // console.log('record[0]',record[0])
        }
      }}
      pagination={{ hideOnSinglePage: true}}
      />
    </div>
  )
}
  
  
export default MastersDegreeTable;