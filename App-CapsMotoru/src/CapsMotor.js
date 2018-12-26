import React, {Component} from "react"

class MemeGenerator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            topText: "",
            bottomText: "",
            randomImg: "http://i.imgflip.com/1bij.jpg",  // ilk caps
            allCapsImgs: []
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount() {  // json datadan memes verileri çekiyoruz
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(response => {
                const {memes} = response.data;
                this.setState({ allCapsImgs: memes })
            })
    }

    handleChange(event) {   // placeholder value out - input in
        const {name, value} = event.target;
        this.setState({ [name]: value })
    }

    handleSubmit(event) {       // siteden farklı caps almak için random sayı üretip urlye ekliyoruz
        event.preventDefault();
        const randNum = Math.floor(Math.random() * this.state.allCapsImgs.length);
        const randCapsImg = this.state.allCapsImgs[randNum].url;
        this.setState({ randomImg: randCapsImg })
    }

    render() {
        return (
            <div>
                <form className="caps-form" onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        name="topText"
                        placeholder="Üst Yazı"
                        value={this.state.topText}
                        onChange={this.handleChange}
                    />
                    <input
                        type="text"
                        name="bottomText"
                        placeholder="Alt Yazı"

                        value={this.state.bottomText}
                        onChange={this.handleChange}
                    />

                    <button>>>Geç>></button>
                </form>
                <div className="caps">
                    <img src={this.state.randomImg} alt="" />
                    <h2 className="top">{this.state.topText}</h2>
                    <h2 className="bottom">{this.state.bottomText}</h2>
                </div>
            </div>
        )
    }
}

export default MemeGenerator
