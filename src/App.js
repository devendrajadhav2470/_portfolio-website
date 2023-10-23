function App() {
  return (
    <div className="App">
      <Intro></Intro>
      <div className="recentProjectsheader">
        <div className="recentProjectsTitle"> Recent Projects</div>
        <div className="buttonContainer">
          <button className="Button">View All Projects</button>
        </div>
      </div>
      <div className="projectCard-container">
        <ProjectCard></ProjectCard>
        <ProjectCard></ProjectCard>
        <ProjectCard></ProjectCard>
        <ProjectCard></ProjectCard>
        <ProjectCard></ProjectCard>
        <ProjectCard></ProjectCard>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
