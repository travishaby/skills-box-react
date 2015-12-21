var AllSkills = React.createClass({
  getInitialState() {
    return { skills: [] }
  },
  componentDidMount() {
    $.getJSON('/api/v1/skills.json', (response) => { this.setState({state: response}) });
  },
  render() {
    return(
      <div>
        <p>All the skills, for your viewing pleasure</p>
        <Body />
      </div>
    )
  }
});
