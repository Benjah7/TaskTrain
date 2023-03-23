import React, { useState, useEffect } from 'react';
import classNames from 'classnames';

const Project = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [skills, setSkills] = useState([]);
  const [skill, setSkill] = useState('');
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    fetch('https://phase-3-project.onrender.com/portfolios')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setProjects(data.data);
      })
      .catch(error => console.error(error));
  }, []);

  const handleDelete = (event, id) => {
    event.preventDefault();
    fetch(`https://phase-3-project.onrender.com/portfolios/destroy/${id}`, {
      method: 'DELETE',
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        const updatedProjects = projects.filter(project => project.id !== id);
        setProjects(updatedProjects);
      })
      .catch(error => console.error(error));
  }

  const handleUpdate = (event) => {
    event.preventDefault();

    fetch(`https://phase-3-project.onrender.com/portfolios/update/${selectedProject.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name,
        description,
        skills
      })
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        const updatedProjects = projects.map(project => {
          if (project.id === selectedProject.id) {
            return {
              ...project,
              name: name,
              description: description,
              skills: skills
            };
          }
          return project;
        });
        setProjects(updatedProjects);
        setSelectedProject(null);
        setName('');
        setDescription('');
        setSkills([]);
        setSkill('');
      })
      .catch(error => console.error(error));
  }

  const projectList = projects.map(project => {
    return (
      <div key={project.id} className="project-list-item">
   
        <div className="card-body">
          <h3>{project.name}</h3>
          <p>{project.description}</p>
          <ul className="skills-list">
            {project.skills && project.skills.map(skill =>(
              <li key={skill}>{skill}</li>
            ))}
          </ul>
          <div>
            <button className={classNames('button', 'delete-button')} onClick={(event) => handleDelete(event, project.id)}>Delete</button>
            <button className={classNames('button', 'update-button')} onClick={() => setSelectedProject(project)}>Update</button>
          </div>
        </div>
      </div>
    )
  });

  const handleNameChange = (event) => {
    setName(event.target.value);
  }

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  }

  const handleSkillChange = (event) => {
    setSkill(event.target.value);
  }

  const handleAddSkill = (event) => {
    event.preventDefault();
    if (skill.trim() === '') {
      return;
    }
    if (skills.length >= 10) {
      alert('You cannot add more than 10 skills.');
      return;
    }
    setSkills([...skills, skill.trim()]);
    setSkill('');
  }

  const handleSubmit =(event) => {
    event.preventDefault();
    fetch('https://phase-3-project.onrender.com/portfolios/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name,
        description,
        skills
      })
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        const newProject = data.data;
        setProjects([...projects, newProject]);
        setName('');
        setDescription('');
        setSkills([]);
        setSkill('');
      })
      .catch(error => console.error(error));
    }

    return (
    <div className="projects-container">
    <h2>Projects</h2>
    {projectList}
    <div className="project-form-container">
    <h3>{selectedProject ? 'Update Project' : 'Add New Project'}</h3>
    <form className="project-form" onSubmit={selectedProject ? handleUpdate : handleSubmit}>
    <div className="form-group">
    <label htmlFor="name">Name:</label>
    <input type="text" id="name" name="name" value={name} onChange={handleNameChange} required />
    </div>
    <div className="form-group">
    <label htmlFor="description">Description:</label>
    <textarea id="description" name="description" value={description} onChange={handleDescriptionChange} required />
    </div>
    <div className="form-group">
    <label htmlFor="skills">Skills:</label>
    <ul className="skills-list">
    {skills.map(skill => (
    <li key={skill}>{skill}</li>
    ))}
    </ul>
    <div className="add-skill-container">
    <input type="text" id="skills" name="skills" value={skill} onChange={handleSkillChange} maxLength="20" />
    <button className="button" onClick={handleAddSkill}>Add</button>
    </div>
    </div>
    <button type="submit" className="button">{selectedProject ? 'Update Project' : 'Add Project'}</button>
    {selectedProject && (
    <button type="button" className="button" onClick={() => setSelectedProject(null)}>Cancel</button>
    )}
    </form>
    </div>
    </div>
    );
    }
    
    export default Project;


