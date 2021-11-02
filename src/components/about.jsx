import React from "react";


class About extends React.Component {
  constructor() {
    super();
    this.state = {
      skills: [
        { id: "Python", content: "Python", porcentage: "95%", value: "95" },
        {
          id: "Machine learning",
          content: "Machine learning",
          porcentage: "90%",
          value: "90"
        },
        { id: "Data_analysis", content: "Data analysis", porcentage: "80%", value: "80" },
        { id: "Django", content: "Django", porcentage: "80%", value: "80" },
        { id: "Linux", content: "Linux", porcentage: "80%", value: "80" },
        {
          id: "ReactJS_skill",
          content: "ReactJS",
          porcentage: "65%",
          value: "65"
        },
        {
          id: "Docker",
          content: "Docker",
          porcentage: "60%",
          value: "60"
        }
      ],
      about_me: [
        {
          id: "first-p-about",
          content:
            "Hi 👋 i'm currently pursuing my Undergrad in SRMKTR-India majoring in computer science.I am learning various algorithms and methods in Data science by working hands-on. "
        },
        {
          id: "second-p-about",
          content:
            "I'm exploring various new technologies including but not only restricted to containerization and virtualisation.I work with new libraries and frameworks to keep myself upto the bleeding edge technology"
        },
      ]
    };
  }

  render() {
    return (
      <section id="about" className="about-mf sect-pt4 route" style={{ color:"black"}}>
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="box-shadow-full">
                <div className="row">
                  <div className="col-md-6">
                    <div className="row">
                      <div
                        className="col-sm-6 col-md-5"
                        style={{ margin: "0 auto" }}
                      >
                        <div
                          className="about-img"
                          style={{ textAlign: "center" }}
                        >
                          <img
                            className="img-fluid rounded b-shadow-a"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="skill-mf">
                      {/* <p className="title-s">Skill</p> */}
                      {this.state.skills.map(skill => {
                        return (
                          <React.Fragment key={skill.id}>
                            <span>{skill.content}</span>{" "}
                            <span className="pull-right">
                              {skill.porcentage}
                            </span>
                            <div className="progress">
                              <div
                                className="progress-bar"
                                role="progressbar"
                                style={{ width: skill.porcentage }}
                                aria-valuenow={skill.value}
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </React.Fragment>
                        );
                      })}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="about-me pt-4 pt-md-0">
                      <div className="title-box-2">
                        <h5 className="title-left">About Me</h5>
                      </div>
                      {this.state.about_me.map(content => {
                        return (
                          <p className="lead" key={content.id}>
                            {content.content}
                          </p>
                        );
                      })}
                      <a
                      id="me1"
                      className="btn btn-primary btn js-scroll px-4"
                      href="https://drive.google.com/file/d/19tdHtw4rm02q4caCV5qscisABrORR3Ua/view?usp=sharing"
                      target="_blank"
                      role="button"
                    >
                      My Resume
                    </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
