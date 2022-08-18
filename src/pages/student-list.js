import * as React from "react"
import Layout from "../components/layout"
import { useStaticQuery, graphql, Link } from "gatsby"

export default function StudentListPage() {
  const students = [
    {
      id: 6,
      name: "Patiphan Nudang",
      team_id: 3,
      student_subject: [1],
    },
    {
      id: 7,
      name: "Wirul Wangyunui",
      team_id: 3,
      student_subject: [2, 3, 4],
    },
    {
      id: 8,
      name: "Syedabdulrohman Alidrid",
      team_id: 4,
      student_subject: [5, 6],
    },
    {
      id: 9,
      name: "Sofron kuwa",
      team_id: 5,
      student_subject: [7],
    },
    {
      id: 10,
      name: "Nattapat Suraprechakul",
      team_id: 5,
      student_subject: [8],
    },
    {
      id: 11,
      name: "Jaranya Thanatavee",
      team_id: 4,
      student_subject: [9, 10],
    },
    {
      id: 12,
      name: "Phumitut Jaikaew",
      team_id: 4,
      student_subject: [11, 12],
    },
  ]

  return (
    <Layout>
      <section className="py-5 text-center container">
        <table class="table">
          <thead>
            <tr>
              <th scope="col" class="text-start">Student Name</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {students.map(student => (
              <tr>
                <td class="text-right">{student.name}</td>
                <td>
                  <Link
                    to={`/student/${student.id}`}
                    className="btn btn-primary"
                  >
                    Detail
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </Layout>
  )
}

