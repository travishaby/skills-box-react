var Body = React.createClass({
  getInitialState() {
    return { skills: [] }
  },
  componentDidMount() {
    $.getJSON('/api/v1/skills.json', (response) => { this.setState({skills: response}); });
  },
  handleSubmit(skill) {
    let newState = this.state.skills.concat(skill);
    this.setState({ skills: newState })
  },
  removeIdeaFromDOM(id) {
    let newSkills = this.state.skills.filter((skill) => {
      return skill.id != id;
    });

    this.setState({ skills: newSkills });
  },
  handleDelete(id) {
    $.ajax({
      url: '/api/v1/skills/' + id.toString(),
      type: 'DELETE',
      success: () => {
        this.removeIdeaFromDOM(id);
      }
    });
  } ,
  render() {
    return(
      <div>
        <NewSkill handleSubmit={this.handleSubmit} />
        <AllSkills skills={this.state.skills} handleDelete={this.handleDelete}/>
      </div>
    )
  }
});
