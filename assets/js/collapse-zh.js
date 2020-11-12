const App = React.createClass({ displayName: "App",

  render() {
    let data = [
    {
      title: "中文（母語）",
      content1: `精通中文，聽，說，讀，寫。並能用國語，臺語和粵語進行交流。` },
    {
      title: "英文（英國）",
      content1: `能夠與說英語的人流利交流。通過GCE O級英語考試，並獲得相當於雅思6.5的分數。` },
    {
      title: "馬來文（馬來西亞）",
      content1: `能夠在工作場所與馬來文用戶交流。通過了馬來西亞教育文憑考試（SPM）並獲得了證書。` },
                
    {
      title: "日文",
      content1: `正在修習日文的相關課程，能夠進行簡單的日常溝通。準備著日文檢定考N5等級中。` }];



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