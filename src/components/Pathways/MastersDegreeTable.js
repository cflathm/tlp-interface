import React, {useEffect, useState} from 'react';
import { Table } from 'antd';

/* TODO
  - Change "recommended" column to implement color scale
*/

const sortColumnsChronollogically = (columns) => {
  const termIndexes = {
    "Spring 1 2022": 1,
    "Spring 2 2022": 2,
    "Summer 1 2022": 3,
    "Summer 2 2022": 4,
    "Fall 1 2022": 5,
    "Fall 2 2022": 6,    
  }

  columns.sort((colA,colB) => {
    if(termIndexes[colA.title] > termIndexes[colB.title]){
      return 1
    } else if (termIndexes[colA.title] < termIndexes[colB.title]){
      return -1
    } else {
      return 0
    }
  })
  return columns
}

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
  return pathways.map(pathway => {
      const row = {
          dataIndex: pathway.unique_id,
          key: pathway.unique_id,
          recommended: pathway.rec_pos,
          enabled: true,
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
          if(course.term === undefined){
            course.term = 'No date'
            course.year = ''
          }
          const courseTerm = course.term + " " + course.year;
          // check if an entry for a courseTerm exists
          // if so, and append the newest course's name, course.name 
          if(row[courseTerm] !== undefined){
              row[courseTerm] += ("\n\n" + course.name + "\n")
          }
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
  const sortedColumns = sortColumnsChronollogically(columns)
  return sortedColumns
}

const MastersDegreeTable = (props) => {
  // tablesEnabled is passed down to mastersTable and endorsementsTable
  // tablesEnabled is initially set false because it will be switched to true on first render
  // const [tablesEnabled, setTableEnabled] = useState(false);
  const courseTermNames = getCourseTermNames(props.mastersDegrees);
  const tableColumns = generateMastersTableColumns(courseTermNames);
  const tableRows = generateMastersTableRows(props.mastersDegrees);



    return (
    <div>
      <Table
      scroll={{ x: 900 }}
      dataSource={tableRows}
      columns={tableColumns}
      rowClassName={record => {
        if(props.tablesEnabled){
          return ("recommended_"+record.recommended)
        } else {
          if(record.key === props.selectedMastersDegree){
            return ("recommended_"+record.recommended)
          }
          return "disabled-row"
        }
      }}
      // rowClassName={record => !record.enabled ? "disabled-row":("recommended_"+record.recommended)}
      rowSelection={{
        // selectedRowKeys: selection,
        type: "checkbox",
        onChange: (record) => {
          props.setSelectedMastersDegree(record[0]);
        }
      }}
      pagination={{ hideOnSinglePage: true}}
      />
    </div>
  )
}
  
  
export default MastersDegreeTable;