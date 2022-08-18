import * as React from "react"
import Layout from "../components/layout"
import { useStaticQuery, graphql, Link } from "gatsby"

export default function SubjectListPage() {
  const subjects = [
    {
      id: 1,
      name: "stat",
      teacher_name: "asis",
      section_id: [2, 3],
    },
    {
      id: 2,
      name: "math",
      teacher_name: "syed",
      section_id: [4, 5],
    },
    {
      id: 3,
      name: "discrete",
      teacher_name: "Pum",
      section_id: [1],
    },
  ]

  return (
    <Layout>
      <section className="py-5 text-center container">
      <table class="table">
          <thead>
            <tr>
              <th scope="col">Subject Name</th>
              <th scope="col">Teacher</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
          {subjects.map(subject => (
            <tr>
              <td >{subject.name}</td>
              <td>{subject.teacher_name}</td>
              <td>
                <Link to={`/subject/${subject.id}`} className="btn btn-primary">
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

export function MinSubjectCard(props) {
  return (
    <div class="card my-2">
      <div class="card-body">
        <div class="row no-gutters">
          <div class="col-6 col-sm-6 col-md-4">
            <b>{props.subject.name}</b>
          </div>
          <div class="col-6 col-sm-6 col-md-4">
            <b>{props.subject.teacher_name}</b>
          </div>
          <div class="col-6 col-md-4 text-right">
            <Link
              to={`/subject/${props.subject.id}`}
              className="btn btn-primary"
            >
              Detail
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
