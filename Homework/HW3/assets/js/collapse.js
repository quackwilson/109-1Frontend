const App = React.createClass({ displayName: "App",

  render() {
    let data = [
    {
      title: "Chinese (Native Language)",
      content1: `Proficient in Chinese, listening, speaking, reading and writing, and can communicate in Mandarin, Taiwanese Hokkien, and Cantonese.` },
    {
      title: "English (United Kingdom)",
      content1: `Able to communicate with native English speakers fluently. Passed the GCE O-level English test and obtained a score equivalent to IELTS 6.5.` },
    {
      title: "Malay (Malaysia)",
      content1: `Able to communicate with Malay users in the workplace. Passed the Malaysian Education Diploma (SPM) and obtained a certificate.` },
                
    {
      title: "Japanese",
      content1: `I am taking Japanese-related courses and can carry out simple daily communication. I am preparing for the N5 level of the Japanese test.` }];



    return (
      React.createElement(Accordion, { data: data }));

  } });


const Accordion = React.createClass({ displayName: "Accordion",

  componentWillMount() {
    let accordion = [];

    this.props.data.forEach(i => {
      accordion.push({
        title: i.title,
        content1: i.content1,
        open: false });

    });

    this.setState({
      accordionItems: accordion });

  },

  click(i) {
    const newAccordion = this.state.accordionItems.slice();
    const index = newAccordion.indexOf(i);

    newAccordion[index].open = !newAccordion[index].open;
    this.setState({ accordionItems: newAccordion });
  },

  render() {
    const sections = this.state.accordionItems.map((i) =>
    React.createElement("div", { key: this.state.accordionItems.indexOf(i) },
    React.createElement("div", {
      className: "title",
      onClick: this.click.bind(null, i) },

    React.createElement("div", { className: "arrow-wrapper" },
    React.createElement("i", { className: i.open ?
      "fa fa-angle-down fa-rotate-180" :
      "fa fa-angle-down" })),


    React.createElement("span", { className: "title-text" },
    i.title)),


    React.createElement("div", { className: i.open ?
      "content1 content-open" :
      "content1" },

    React.createElement("div", { className: i.open ?
      "content-text content-text-open" :
      "content-text" }, " ",
    i.content1))));





    return (
      React.createElement("div", { className: "accordion" },
      sections));


  } });


ReactDOM.render(
React.createElement(App, null),
document.getElementById('accordion'));