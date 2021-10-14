import React from 'react';
import { Table } from 'antd';

const generateCourseTermName = (course) => {
  return course.term + " " + course.year;
}

const generateEndorsementColumns = (endorsements) => {
  // const termIndexes = {
  //   "Spring 1 2022": 1,
  //   "Spring 2 2022": 2,
  //   "Summer 1 2022": 3,
  //   "Summer 2 2022": 4,
  //   "Fall 1 2022": 5,
  //   "Fall 2 2022": 6,    
  // }
  // get all endorsement terms, store in "allEndorsementTerms"
  // note: flat() at the bottom is used to convert an array of arrays
  // into one big array of strings
  const allEndorsementTerms = endorsements.map(endorsement => {
    let termsArray = []
    endorsement.courses.forEach(course => {
      termsArray.push(generateCourseTermName(course))
    })
    return termsArray
  }).flat()
  const filteredEndorsementTerms = [...new Set(allEndorsementTerms)]
  // declare "const columns" by mapping over filteredEndorsementTerms...
  const columns = filteredEndorsementTerms.map(termName => {
    // TODO: use "termIndexes" to map each term name to its index?
    return {
      title: termName,
      dataIndex: termName,
      key: termName
    }
  })
  columns.unshift({
    title: 'Endorsement Name',
    dataIndex: 'name',
    key: 'name',
    width: '190px'
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
        let recommendedText = '';
      if(endorsement.rec_pos === 1){
        recommendedText = '\n(#1 Recommendation)'
      } 
      if(endorsement.rec_pos === 2){
        recommendedText = '\n(#2 Recommendation)'
      } 
      if(endorsement.rec_pos === 3){
        recommendedText = '\n(#3 Recommendation)'
      }
      row["name"] = endorsement.name + recommendedText
      // dynamically adds the course term as a key-value pair for this row
      endorsement.courses.forEach(course => {
          row[generateCourseTermName(course)] = course.name
      })
      return row;
  })
}

const EndorsementsTable = (props) => {
  const tableColumns = generateEndorsementColumns(props.endorsements)
  const tableRows = generateEndorsementTableRows(props.endorsements);
  // console.log('Endorsements tableColumns',tableColumns)
  // console.log('Endorsements tableRows',tableRows)

  return (
    <div>
      <Table 
      dataSource={tableRows} 
      columns={tableColumns}
      scroll={{ x: 900 }}
      rowClassName={(record, index) => ("recommended_"+record.recommended)}
      rowSelection={{
        type: "radio",
        onChange: (record) => {
          props.setSelectedEndorsement(record[0]);
        }
    }}
      pagination={{ hideOnSinglePage: true}}
      />
    </div>
  )
}
  
  
export default EndorsementsTable;