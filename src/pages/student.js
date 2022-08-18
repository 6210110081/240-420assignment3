import * as React from "react"
import Layout from "../components/layout"
import { useStaticQuery, graphql, Link } from "gatsby"

export default function StudentPage({ data }) {
  const student = {
    name: "Syedabdulrohman Alidrid",
    student_subject: [
      {
        subject_id: {
          name: "stat",
          teacher_name: "asis",
          section_id: [
            {
              day: "thu",
              time: "10.00 - 11.50",
              sec: 2,
            },
            {
              day: "sun",
              time: "13.00 - 14.50",
              sec: 1,
            },
          ],
        },
      },
      {
        subject_id: {
          name: "math",
          teacher_name: "syed",
          section_id: [
            {
              day: "wed",
              time: "10.00 - 11.50",
              sec: 1,
            },
            {
              day: "mon",
              time: "10.00 - 11.50",
              sec: 2,
            },
          ],
        },
      },
    ],
  }

  return (
    <Layout>
      {
        <section className="py-5 container">
          <div>
            <h2>{student.name}</h2>
          </div>
          <hr />
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Subject Name</th>
                <th scope="col">Teacher</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {student.student_subject.map(res => {
                const subject = res.subject_id
                return (
                  <tr>
                    <td>{subject.name}</td>
                    <td>{subject.teacher_name}</td>
                    <td>
                      <Link
                        to={`/subject/${subject.id}`}
                        className="btn btn-primary"
                      >
                        Detail
                      </Link>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </section>
      }
    </Layout>
  )
}

export function SectionCard(props) {
  const sec = props.data
  return (
    <div class="card w-100 mt-4">
      <div class="card-body">
        <h5 class="card-title">Section {sec.number}</h5>
        {sec.periods.map(p => (
          <h6>
            {p.day} {p.start} - {p.end}
          </h6>
        ))}
        <hr />
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Student ID</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
            </tr>
          </thead>
          <tbody>
            {sec.student.map(std => (
              <tr>
                <th scope="row">{std.Member_id.student_id}</th>
                <td>{std.Member_id.first_name}</td>
                <td>{std.Member_id.last_name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
