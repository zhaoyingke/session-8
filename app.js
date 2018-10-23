var app = new Vue({
  el: '#app',
  data: {
    firstName: "Yingke",
    lastName: "Zhao",
    description: "Journalism student at Sciences Po Paris",
    photo: "./705423090.jpg",
    twitter: "YingkeZ",
    instagram: "slf_zhaoyingke",
    mail: "yingke.zhao@sciencespo.fr",
    experiences: [{
      dateBegin: "May",
      dateEnd: "June 2018",
      name: "Cafébabel",
      title: "Intern journalist",
      description: "Served as Editorial Intern at the online magazine Cafébabel. Produced several video projects and a long format story on European news. Helped edit and manage contents from the contributor community."
    }, {
      dateBegin: "July",
      dateEnd: "August 2016",
      name: "China Radio International",
      title: "Intern journalist-translator",
      description: "Covered Chinese and international political news. Wrote, translated and published several pieces in French."
    }, {
      dateBegin: "January",
      dateEnd: "June 2016",
      name: "China Business News Weekly",
      title: "Intern journalist",
      description: "Served as intern journalist in the Business Breaking News team. Complied and published domestic and international news from international press. Interviewed a French business executive and contributed to CBN’s Dialogue column."
    }],
    formations: [{
      dateBegin: "September 2017",
      dateEnd: "Today",
      name: "Master in Journalism",
      university: "Sciences Po Paris",
      description: "M.S. program in journalism, expected date of graduation: June 1, 2019. Awarded Bourse d’excellence Eiffel scholarship for the two years of study."
    }, {
      dateBegin: "September 2012",
      dateEnd: "June 2017",
      name: "Bachelor of Arts",
      university: "Fudan University",
      description: "B.A. in French Language and Literature. General GPA: 3.45/4; major GPA: 3.67/4; ranked 4/17. Awarded Fudan Excellency Scholarship each year of study and Pierre  Fabre-Fudan Scholarship in academic year 2016. In 2012 — 2013 studied International Relations and Public Affairs "
    }],
    languages: ["Chinese", "English", "French", "Italian", "German"],
    skills: ["TBD"]
  },
  computed: {
    fullName() {
      return this.firstName + " " + this.lastName
    }
  }
})