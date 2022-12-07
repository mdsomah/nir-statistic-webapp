// const now = new Date()

const eventsPlaner = [
  {
    title: "",
    start: new Date(new Date().setHours(new Date().getHours() - 3)),
    end: new Date(new Date().setHours(new Date().getHours() + 3)),
  },
  // {
  //   title: "New Event",
  //   start: now,
  //   end: now,
  // },
]

export default eventsPlaner;