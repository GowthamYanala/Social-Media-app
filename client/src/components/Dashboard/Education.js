import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import formatDate from '../../utils/formatDate'
import {deleteEducation} from '../../actions/profile'

const Education = ({education,deleteEducation}) =>{
    const educations = education.map((edu) => (
        <tr key={edu._id}>
          <td>{edu.school}</td>
          <td className="hide-sm">{edu.degree}</td>
          <td>
            {formatDate(edu.from)} - {edu.to ? formatDate(edu.to) : 'Now'}
          </td>
          <td>
            {edu.fieldofstudy}
          </td>
          <td>
            <button
              onClick={() => deleteEducation(edu._id)}
              className="btn btn-danger"
            >
              Delete
            </button>
          </td>
        </tr>
    ))
    return (
        <Fragment>
            <h2 className="my-2">Education Credentials</h2>
            <table className="table education">
                <thead>
                    <tr>
                    <th>School</th>
                    <th className="hide-sm">Degree</th>
                    <th className="hide-sm">Years</th>
                    <th className="hide-sm">field of study</th>
                    <th />
                    </tr>
                </thead>
                <tbody>
                    {educations}
                </tbody>
            </table>

        </Fragment>
    )
}

export default connect(null,{deleteEducation})(Education)
