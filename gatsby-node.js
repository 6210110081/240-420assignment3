const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  // const team = await graphql(`
  //   query {
  //     directus {
  //       Team {
  //         id
  //       }
  //     }
  //   }
  // `).then(res => res.data)

  // team.directus.Team.forEach(team => {
  //   array
  // })

  teams.forEach(team => {
    actions.createPage({
      path: "/team/" + team.id,
      component: path.resolve("./src/pages/team.js"),
      context: { id: team.id },
    })
  })

  students.forEach(student => {
    actions.createPage({
      path: "/student/" + student.id,
      component: path.resolve("./src/pages/student.js"),
      context: { id: student.id },
    })
  })

  subjects.forEach(subject => {
    actions.createPage({
      path: "/subject/" + subject.id,
      component: path.resolve("./src/pages/subject.js"),
      context: { id: subject.id },
    })
  })

  createPage({
    path: "/using-dsg",
    component: require.resolve("./src/templates/using-dsg.js"),
    context: {},
    defer: true,
  })
}

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
