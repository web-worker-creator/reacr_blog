import React from "react";

export class AddArticle extends React.Component{
    constructor(){
        super();
        this.state = {
            title: "",
            content: "",
            author: ""
        }
        this.handlerChange = this.handlerChange.bind(this);
        this.handlerSubmit = this.handlerSubmit.bind(this);
}
    handlerSubmit(event){
        event.preventDefault();
        console.log("Статья отправлена на сервер");
        const formData = new FormData();
        formData.append('title', this.state.title);
        formData.append('content', this.state.content);
        formData.append('author', this.state.author);
        fetch("http://p90175gl.beget.tech/php/handlerAddArticle.php", {
            method:"POST",
            cors: "no-cors",
            body: formData
        }).then(response=>response.text())
            .then(result=>{console.log(result)});
    }
    handlerChange(event){
        const value = event.target.value;
        const name = event.target.name;
        console.log(name, value);
        this.setState({
            [name]: value
        })
    }
    render() {
        return (
            <div>
                <h1 className="text-center mb-3">Добавление статьи</h1>
                <div className="col-6 mx-auto">
                    <form onSubmit={this.handlerSubmit}>
                        <div className="mb-3">
                            <input name="title" type="text" value={this.state.title} onChange={this.handlerChange} className="form-control" placeholder="Заголовок статьи"/>
                        </div>
                        <div className="mb-3">
                            <textarea name="content" value={this.state.content} onChange={this.handlerChange} className="form-control" placeholder="Текст статьи"/>
                        </div>
                        <div className="mb-3">
                            <input name="author" value={this.state.author} onChange={this.handlerChange} className="form-control" placeholder="Автор"/>
                        </div>
                        <div className="mb-3">
                            <input type="submit" className="form-control btn btn-primary" value="Добавить статью"/>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}