import React from 'react'
import { repo } from "../Constant"

const Projects = () => (
    <div className='myprojects'>
        <h2>My Projects</h2>
        <div className="projectcards">
            {repo.map((repos) => (
                <div key={repos.id}>
                    <h3>{repos.title}</h3>
                    <a target="_blank" href={repos.url}>
                        <img src={repos.img} alt={repos.id} className="projectimage" />
                    </a>
                    <p className="repoinfo">{repos.info}</p>
                </div>
            )
            )}
        </div>
    </div>
  )

export default Projects