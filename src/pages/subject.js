import * as React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

export default function SubjectPage({ data }) {
  const subject = {
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
  }
  return (
    <Layout>
      <section className="py-5 text-center container">
        <div>
          <h2>
            Subject Name : <b>{subject.name}</b>
          </h2>
        </div>
        <div>
          {" "}
          <h3>
            Teacher Name : <b>{subject.teacher_name}</b>
          </h3>
        </div>
        <div className="row py-lg-5">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Day</th>
                <th scope="col">Time</th>
                <th scope="col">Section</th>
              </tr>
            </thead>
            <tbody>
              {subject.section_id.map(sec => (
                <tr>
                  <td>{sec.day}</td>
                  <td>{sec.time}</td>
                  <td>{sec.sec}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </Layout>
  )
}
