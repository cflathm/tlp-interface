import React from 'react';
import { Table } from 'antd';

// CONFIRMTABLE: CHANGE COLUMNS TO BE TERM, YEAR, “pathway” it contributes to, ?confirm checkbox? (prob not)
  
const generateConfrimColumns = (selections) => {
  // const termIndexes = {
  //   "Spring 1 2022": 1,
  //   "Spring 2 2022": 2,
  //   "Summer 1 2022": 3,
  //   "Summer 2 2022": 4,
  //   "Fall 1 2022": 5,
  //   "Fall 2 2022": 6,    
  // }

      const allSelectedTerms = selections.map(selection => {
        // we want termsArray to be hashes of each courseTermName, pointing to each course.name with that
        const termsArray = []
        if(selection.courses){
          // handle Masters and Endorsements
          selection.courses.forEach(course => {
            const termName = generateCourseTermName(course)
            if(termsArray[termName] !== undefined){
              termsArray[[termName]].push(course.name)
            }
            else {
              termsArray[termName] = [course.name]
            }
          })
        } else {
          // handle Micro-credentials
          // console.log('termsArray',termsArray)
          // console.log('selection',selection)
          termsArray[generateCourseTermName(selection)] = selection.name
        }
        console.log('termsArray',termsArray)
        return termsArray
      }).flat()
    // })


    // console.log('allSelectedTerms',allSelectedTerms)
    const filteredSelectedTerms = [...new Set(allSelectedTerms)]
    // declare "const columns" by mapping over filteredSelectedTerms...
    const columns = filteredSelectedTerms.map(termName => {
      // TODO: use "termIndexes" to map each term name to its index?
      return {
        title: termName,
        dataIndex: termName,
        key: termName
      }
    })
    columns.unshift({
      title: 'Selection Name',
      dataIndex: 'name',
      key: 'name',
      width: '190px'
    })
    return columns
}

  const generateCourseTermName = (course) => {
    return course.term + " " + course.year;
  }

  const generateConfirmTableRows = (userSelections) => {
    // this map returns a json object of all rows, formatted to match key-value pairs in "tableRows"
    // for each pathway in pathways, return json object
    // console.log(userSelections)
    const selectedPathways = userSelections.map(selection => {
      const row = {
        dataIndex: selection.unique_id,
        key: selection.unique_id,
      }
      if(selection.courses){
        // handles Masters and Endorsements
        row["name"] = selection.name
        // dynamically adds the course term as a key-value pair for this row
        selection.courses.forEach(course => {
            row[generateCourseTermName(course)] = course.name
        })
        return row;
      } else {
        // handles Micro-credentials
        const row = {
          name: selection.credential_name,
          dataIndex: selection.unique_id,
          key: selection.unique_id,
        }
        row[generateCourseTermName(selection)] = selection.name
        return row;
      }
      });
    return selectedPathways.flat();
  };


const ConfirmTable = (props) => {
  // console.log('ConfirmTable: props.selections',props.selections)
  const tableRows = generateConfirmTableRows(props.selections)
  const tableColumns = generateConfrimColumns(props.selections)
  // console.log('tableRows',tableRows)
  // console.log('tableColumns',tableColumns)
  return (
    <div className="last-table">
      <Table 
      scroll={{ x: 900 }}
      dataSource={tableRows} 
      columns={tableColumns} 
      // rowSelection={{type: "radio"}}
      pagination={{ hideOnSinglePage: true}}
      />
    </div>
  )
}
  
export default ConfirmTable;