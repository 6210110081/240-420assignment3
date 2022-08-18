import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { useStaticQuery, graphql, Link } from "gatsby"

const teams = [
  {
    id: 3,
    name: "Team 1",
    student_id: [6, 7],
  },
  {
    id: 4,
    name: "Team 2",
    student_id: [8, 11, 12],
  },
  {
    id: 5,
    name: "Team 3",
    student_id: [9, 10],
  },
]
const IndexPage = () => {
  // const data = useStaticQuery(graphql`
  //   query {
  //     directus {
  //       Team {
  //         id
  //       }
  //     }
  //   }
  // `)

  // console.log(data)

  return (
    <Layout>
      {
        <section className="py-5 container">
          {teams.map(team => (
            <MinTeamCard team={team} key={team.id}></MinTeamCard>
          ))}
          <div></div>
        </section>
      }
    </Layout>
  )
}

export function MinTeamCard(props) {
  return (
    <div class="card my-2">
      <div class="card-body">
        <div class="row no-gutters">
          <div class="col-12 col-sm-6 col-md-8">
            <b>{props.team.name}</b> 
          </div>
          <div class="col-6 col-md-4 text-right">
            <Link to={`/team/${props.team.id}`} className="btn btn-primary">
              Detail
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export const Head = () => <Seo title="Home" />

export default IndexPage
