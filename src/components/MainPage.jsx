import React from 'react';
import {Link, Route} from "react-router-dom";

function Tr(props){
    return (
        <tr>
            <th scope="row">{props.index}</th>
            <td><Link to={`/blog/${props.id}`}>{props.title}</Link></td>
            <td>{props.author}</td>
            <td><span onClick={function (){
                const formData = new FormData();
                formData.append("id", props.id);
                fetch("http://p90175gl.beget.tech/php/hendlerDeleteArticleById.php",{
                        method: "POST",
                        cors: "no-cors",
                        body: formData
                }).then(response=>response.json())
                    .then(result=>{
                        console.log(result);
                        if(result.result = "success"){
                            props.loadMainPageContent();
                        }
                    })
            }} style={{cursor:"pointer", color:"red"}}>[удалить]</span>
            <Link to={"/edit/"+props.id}>[Редактировать]</Link>
            </td>
        </tr>
    )
}


export class MainPage extends React.Component{
    constructor(){
        super();
        this.state={
            articles: []
        }
    }

    loadMainPageContent(){
        fetch("http://p90175gl.beget.tech/php/handlerGetArticles.php")
            .then(response=>response.json())
            .then(result=>{
                console.log(result);
                let articles = [];
                for (let i = 0; i < result.length; i++){
                    articles.push(<Tr
                        key={i}
                        index={i+1}
                        title={result[i].title}
                        author={result[i].author}
                        id={result[i].id}
                        loadMainPageContent={this.loadMainPageContent.bind(this)}
                    />);
                }
                this.setState({
                    articles: articles
                })
            });
    }
    componentDidMount(){
        this.loadMainPageContent();

    }
    render(){
        console.log("Вызван метод render");
        return  (
            <div>
                <Link className="btn btn-primary" to="/addArticle">Добавить статью</Link>
                <table className="table">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Заголовок</th>
                        <th scope="col">Автор</th>
                        <th scope="col">Управление</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.articles}
                    </tbody>
                </table>
            </div>
        );

    }
}