import React from "react";

export class Article extends React.Component{
    constructor(){
        super();
        this.state={
            title: "",
            content: ""
        }

    }
    componentDidMount() {
        const id = window.location.pathname.split("/")[2];
        const formData = new FormData();
        formData.append('id', id);
        fetch("http://p90175gl.beget.tech/php/handlerGetArticleById.php",{
            method:"POST",
            cors: "no-cors",
            body: formData
        }).then(response=>response.json())
            .then(result=>{
                console.log(result);
                this.setState({
                    title: result.title,
                    content: result.content,
                })
            })
    }
    render() {
    return (
        <div><h1 className="mb-5">{this.state.title}</h1>
            <p>{this.state.content}</p>
            </div>
        );
    }
}