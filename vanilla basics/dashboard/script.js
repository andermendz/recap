
const projectsJSON = [
    {
      title: "Project A",
      description: "",
    },
    {
      title: "Project B",
      description: "",
    },
    {
      title: "Project C",
      description: "",
    },
    {
      title: "Project D",
      description: "",
    },
    {
        title: "Project E",
        description: "",
      },
    
  ];
  

(function injectProjects(projects){

    const projectsContainer = document.querySelector(".user-projects-container");
      projects.forEach(project => {

        const projectHTML = `     <div class="user-project">
              <p>${project.title}</p>
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Soluta rerum quo, quis eveniet, beatae repellendus nesciunt,
                 impedit minus odit quam eligendi labore eaque.
                 Rerum ullam ex odit doloremque eaque porro!
              </div>

              <div class="project-options">
                <div>
                  <span class="material-symbols-outlined">
                    favorite
                    </span>
                    <span class="material-symbols-outlined">
                      add
                      </span>
                      <span class="material-symbols-outlined">
                        fork_right
                        </span>
                </div>
             
              </div>
          </div>`
        
          const projectElement = document.createElement('div')
          projectElement.classList.add = 'user-project'

          projectElement.innerHTML = projectHTML;

          projectsContainer.appendChild(projectElement)
    });

    
})(projectsJSON)

