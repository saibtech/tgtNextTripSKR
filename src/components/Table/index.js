/* eslint-disable camelcase */
import { arrayOf, object, shape, string } from 'prop-types'
import React from 'react'
import './table.scss'
const Table = ({ data }) => {
  return <table className="table departures-table">
    <thead className={'table head'}>
      <tr>
        {
          data.columns.map((elem, index) => {
            return <th key={index}>{elem}</th>
          })
        }
      </tr>
    </thead>
    <tbody>
      {data.data?.length ? data.data.map((datacolumns, index) => {
        const keys = Object.keys(datacolumns)
        return <tr key={index}>
          {keys.map((key, index) => {
            return <td key={index}>
              {datacolumns[key]}
            </td>
          })}
        </tr>
      }) : <tr><td colSpan={'2'}> No Data Available at this moment</td></tr>}
    </tbody>
  </table>
}

Table.propTypes = {
  data: shape({
    columns: arrayOf(string).isRequired,
    data: arrayOf(object)
  })
}

export default Table
