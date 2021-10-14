import React from 'react';
import { Table } from 'antd';

// CONFIRMTABLE: CHANGE COLUMNS TO BE TERM, YEAR, “pathway” it contributes to, ?confirm checkbox? (prob not)
  
const generateConfirmColumns = (selections) => {
  // const termIndexes = {
  //   "Spring 1 2022": 1,
  //   "Spring 2 2022": 2,
  //   "Summer 1 2022": 3,
  //   "Summer 2 2022": 4,
  //   "Fall 1 2022": 5,
  //   "Fall 2 2022": 6,    
  // }
      // console.log("~ selections", selections)
      const allSelectedTerms = selections.map(selection => {
        // we want termsArray to be hashes of each courseTermName, pointing to each course.name with that
        const termsArray = []
        if(selection.courses){
          // handle Masters and Endorsements
          selection.courses.forEach(course => {
            const termName = generateCourseTermName(course)
            termsArray.push(termName)
          })
        } else {
          // handle Micro-credentials
          const termName = generateCourseTermName(selection)
          termsArray.push(termName)
        }
        return termsArray
      }).flat()
      // console.log("allSelectedTerms", allSelectedTerms)


    const filteredSelectedTerms = [...new Set(allSelectedTerms)]
    // console.log("~ filteredSelectedTerms", filteredSelectedTerms)
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
    // userSelections.forEach(selection => {

    const selectedDegreesAndEndorsements = userSelections.map(selection => {
      if(selection.courses !== undefined){
        const row = {
          dataIndex: selection.unique_id,
          key: selection.unique_id,
        }
        // handles Masters and Endorsements
        row["name"] = selection.name
        // dynamically adds the course term as a key-value pair for this row
        selection.courses.forEach(course => {
            row[generateCourseTermName(course)] = course.name
        })
        return row;
      }
    });

    const degreeAndEndorsementRows = selectedDegreesAndEndorsements.filter(Boolean)

      // the below code handles Micro-credentials
      const microCredentialRows = []
      userSelections.forEach(microcredentialCourse => {
        if(microcredentialCourse.credential_name){
          // ^^^ filters out userSelections that aren't microcredential courses
          const courseName = microcredentialCourse.name
          const courseTermName = generateCourseTermName(microcredentialCourse)
          const courseParentCredentialName = microcredentialCourse.credential_name

          // set credentialFound to true if credential alredy exists in microCredentialRows
          let credentialFound = false
          let credentialIndex = -1
          for (let [index, credential] of microCredentialRows.entries()) {
              if(credential.name === courseParentCredentialName){
                credentialFound = true
                credentialIndex = index
              }
          }
          // if credential exists in microCredentialRows, add this course to its row...
          if(credentialFound){
            // if an entry for this credential exists, go to its [index] and...
            // create a new field, titled this course's [courseTermName] and...
            // set it equal to this course's name
            microCredentialRows[credentialIndex][courseTermName] = courseName
          } else {
            // if credential doesn't exist in row, make new row and add it to microCredentialRows
            const credentialRow = {
              name: courseParentCredentialName,
              dataIndex: courseParentCredentialName,
              key: courseParentCredentialName,
            }
            // dynamically add key-value pair where key is the semester's term and value is course's name
            credentialRow[courseTermName] = courseName
            microCredentialRows.push(credentialRow)
          }
      }
      })

    const allRows = degreeAndEndorsementRows.push(microCredentialRows)
    return degreeAndEndorsementRows.flat();
  };


const ConfirmTable = (props) => {
  const tableRows = generateConfirmTableRows(props.selections)
  const tableColumns = generateConfirmColumns(props.selections)
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